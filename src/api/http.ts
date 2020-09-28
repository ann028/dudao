import axios from 'axios';
import {Message, Loading} from 'element-ui'


// 配置默认headers需要带有参数
axios.defaults.headers["Token"] = window.sessionStorage.getItem("Token") ? window.sessionStorage.getItem("Token") : '';
axios.defaults.headers["Token-Id"] = window.sessionStorage.getItem("Token-Id") ?
  window.sessionStorage.getItem("Token-Id") : '';
axios.defaults.headers["Platform"] = 'PC';

// 请求拦截器
let loadingInstance: any
axios.interceptors.request.use((config) => {
  loadingInstance = Loading.service({
    text: '加载中...',
    spinner: 'el-icon-loading',
    background: "rgba(0,0,0, 0.3)"
  });
  config.timeout = 50000;
  return config;
}, (error) => {
  loadingInstance.close();
  Message.error(`请求失败${error}`);
  return Promise.reject(error);
});

// 响应拦截器，在接收到响应后先做一层操作，例如状态码判断登录状态，授权
axios.interceptors.response.use(response => {
  loadingInstance.close();
  // if (response.data.code === 108) {
  //   Message.error('登录超时，请重新登录');
  //   window.location.href = '/login';
  // }
  return response;
}, err => {
  loadingInstance.close();
  if (err.message.includes('timeout')) {
    Message.error('请求超时');
    return Promise.reject(err);
  }
  // else if (err.response.status === 400) {
  //   Message.error('系统错误');
  //   return Promise.reject(err);
  // }
  Message.error(err.message);
  return Promise.reject(err);
})

export default {
  get(url: any, param: any) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        data: {},
        params: param,
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  post(url: any, param: any, token: any) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param,
        headers: token ? {
          "Token": window.sessionStorage.getItem("Token"),
          "Token-Id": window.sessionStorage.getItem("Token-Id"),
          "Platform": '3'
        } : null
      })
    })
  },
}
