<template>
  <div class="about" style="position: relative;">
    <Step :stepName="stepName"></Step>
    <div class="mt20 flex">
      <section class="align_center">
        <span class="mr10">上市类型</span>
        <el-select v-model="searchParam.type" placeholder="请选择" class="mr10">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </section>
      <!-- <el-input
        placeholder="请选择日期"
        suffix-icon="el-icon-date"
        v-model="searchParam.search"
        style="width: 200px;">
      </el-input> -->
      <el-input
        placeholder="请选择日期"
        v-model="searchParam.search"
        style="width: 476px;">
        <i slot="suffix" @click="onSearch" class="el-input__icon el-icon-date"></i>
      </el-input>
    </div>
    <transition name="bounce">
      <div class="mt20" v-if="isShow"  style="position: absolute; top: 124px; left: 246px; z-index: 999;">
        <div class="flex">
          <section class="align_center">
            <span class="mr10" style="flex-shrink: 0;">证券代码</span>
            <el-input v-model="searchParam.code" placeholder="请输入内容"></el-input>
          </section>
          <section class="align_center">
            <span class="mr10" style="flex-shrink: 0;">证券简称</span>
            <el-input v-model="searchParam.name" placeholder="请输入内容"></el-input>
          </section>
        </div>
        <div class="flex mt20">
          <section class="align_center">
            <span class="mr10" style="flex-shrink: 0;">证券代码</span>
            <el-input v-model="searchParam.code" placeholder="请输入内容"></el-input>
          </section>
          <section class="align_center">
            <span class="mr10" style="flex-shrink: 0;">证券简称</span>
            <el-input v-model="searchParam.name" placeholder="请输入内容"></el-input>
          </section>
        </div>
      </div>
    </transition>
    <el-table
      :data="tableData"
      style="width: 100%"
      class="mt20"
      :header-cell-style="{background:'#FFF9F3'}">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator'
  import Step from '@/components/Step.vue'
  @Component({
    components: {
      Step,
    },
  })
  export default class About extends Vue {
    private stepName: any = [
      {
        path: '',
        name: '公告查询',
      },
    ]
    private searchParam: any = {
      type: '',
      search: '',
      code: '',
      name: '',
    }
    private typeOptions: any[] = []
    private isShow: boolean = false
    private tableData: any[] = []
    private onSearch() {
      this.isShow = !this.isShow
    }
    //
    // 注册过滤器
    // Object.keys(Filter).forEach((key: string) => {
    //   Vue.filter(key, (Filter as any)[key])
    // })
  }
</script>
<style lang="less" scoped>
  .bounce-enter-active, .bounce-leave-active{
    transition: all .5s ease;
  }
  .bounce-enter, .bounce-leave-to{
    height: 0;
  }
  .bounce-leave, .bounce-enter-to{
    height: 50px;
  }
</style>
