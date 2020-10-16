<template>
  <div class="home">
    <Head></Head>
    <div class="flex content">
      <Aside></Aside>
      <router-view  class="router-view"></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Head from '@/views/Head.vue'
import Aside from '@/views/Aside.vue'
export default {
  name: 'Home',
  components: {
    Head,
    Aside,
  },
  data() {
    return {

    }
  },
}
</script>
<style lang="less" scoped>
.home{
  background: rgb(230, 228, 228);
  .content{
    width: 100%;
    height: calc(100vh - 80px);
  }
  .router-view {
    flex-grow: 1;
    background: #ffffff;
    margin-left: 20px;
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    overflow-y: scroll;
  }
}
</style>
