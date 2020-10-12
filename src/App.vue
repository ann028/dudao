<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="less">
body,ul,li{
  margin: 0;
  padding: 0;
}
#app {
  // margin: 0;
  // padding: 0;
  // .el-input .el-input__suffix,.el-input__inner{
  //   height: 30px !important;
  // }
  // .el-input__icon{
  //   line-height: 30px !important;
  // }
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
