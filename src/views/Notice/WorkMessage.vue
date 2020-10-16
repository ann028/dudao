<template>
  <div>
    管理
    <el-button @click="$router.push({name: 'addWorkMessage'})">新增</el-button>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component
export default class WorkMessage extends Vue {}
</script>