<template>
  <div>
    项目管理
    <div id="qrcode" ref="qrcode"></div>
  </div>
</template>
<script>
import QRCode from 'qrcodejs2';

export default {
  data() {
    return {
      
    }
  },
  methods: {
    qrcode () {
      // let qrcode = new QRCode('qrcode',{
      //   width: 200, // 设置宽度，单位像素
      //   height: 200, // 设置高度，单位像素
      //   text: 'https://www.baidu.com'   // 设置二维码内容或跳转地址
      // })

      document.getElementById("qrcode").innerHTML = "";
      setTimeout(() => {
      new QRCode(this.$refs.qrcode, {
        // text: 'http://wxshop.carmanclub.com.cn/web/drawPrize/index.html?key_code=' + 123456789,
        text: 'https://www.baidu.com',
        width: 200,
        height: 200,
        colorDark: "#333333", //二维码颜色
        colorLight: "#ffffff", //二维码背景色
        correctLevel: QRCode.CorrectLevel.L//容错率，L/M/H
      })
      }, 100)
    }
  },
  mounted() {
    this.qrcode()
  }
}
</script>