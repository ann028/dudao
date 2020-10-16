<template>
  <div>
    <div class="title">
      <span v-for="(item,index) in stepName" :key="index">{{item.name}}</span>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
@Component
export default class Step extends Vue {
  @Prop() public readonly stepName!: any[]
}
</script>
<style lang="less" scoped>
.title{
  line-height: 50px;
  border-bottom: 1px solid #cccccc;
}
</style>