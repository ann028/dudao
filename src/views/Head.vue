<template>
  <div class="head ">
    <div class="left align_center">
      <img src="" alt="">
      <h3>权益业务持续督导</h3>
      <div  style="margin-left: 100px;" @click="doAdd">
        <div v-if="$route.name === 'workNotice' || $route.name === 'workMessage'|| $route.name === 'addWorkMessage'">
          <span :class="[ $route.name === 'workNotice' ? 'activeClassName' : '']" @click="$router.push({name: 'workNotice'})">业务通知</span>
          <span>|</span>
          <span :class="[$route.name === 'workMessage'|| $route.name === 'addWorkMessage' ? 'activeClassName' : '']" @click="$router.push({name: 'workMessage'})">管理</span>
        </div>
      </div>
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script>
export default {
  name: 'head',
  data() {
    return {
      name: 'head',
    }
  },
  filters: {

  },
  methods: {
    doAdd() {
      // console.log(this.$route)
    },
  },
}
</script>
<style lang="less">
  .head{
    width: 100%;
    height: 80px;
    background: gainsboro;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .activeClassName{
    color: #ffd04b;
  }
</style>