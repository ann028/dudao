<template>
  <div>
    <div class="title">
      <span v-for="(item,index) in stepName" :key="index">{{item.name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    stepName: {
      type: Array,
    }
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.title{
  line-height: 50px;
  border-bottom: 1px solid #cccccc;
}
</style>