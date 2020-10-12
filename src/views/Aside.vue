<template>
  <div>
    <aside class="menu">
      <el-menu
        :default-active="defaultMenu"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <!-- <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu> -->
        <el-menu-item v-for="(item, index) in menuList" :key="index" :index="item.pathName" @click="toLink(item.pathName)">
          <!-- <i class="el-icon-menu"></i> -->
          <i class="iconStyle iconfont" :class="item.icon"></i>
          <!-- :class="menu.meta.icon" -->
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
    </aside>
  </div>
</template>
<script>
// import router from '../router';
export default {
  data() {
    return {
      menuList: [
        {
          name: '项目管理',
          pathName: 'project',
          icon: 'icon-02',
        },
        {
          name: '公告查询',
          pathName: 'about',
          icon: 'icon-tongzhigonggaochaxun',
        },
        // {
        //   name: '业务通知',
        //   pathName: 'notice',
        //   icon: 'icon-02',
        // },
        // {
        //   name: '重大事项',
        //   pathName: 'matter',
        //   icon: 'icon-02',
        // },
        // {
        //   name: '考核管理',
        //   pathName: 'examine',
        //   icon: 'icon-02',
        // },
      ],
    }
  },
  created() {
    console.log(1111111)
    // this.defaultMenu = this.menuList.length ? this.menuList
  },
  computed: {
    defaultMenu() {
      console.log(this.$route.matched)
      if (this.$route.matched && this.$route.matched.length > 2) {
        return this.$route.matched[1].name;
      } else {
        return this.$route.name;
      }
    }
  },
  methods: {
    toLink(name) {
      console.log(name)
      this.$router.push({name})
    }
  }
}
</script>
<style lang="less" scoped>
/deep/ .el-menu{
  border-right: 0;
}
.menu{
  min-width: 200px;
  height: calc(100vh - 80px);
  background: #545c64;
  .iconStyle{
    font-size: 20px;
    margin-right: 10px;
  }
}
.el-menu-item {
  border-left: 4px solid transparent;
}
.el-menu-item.is-active {
  border-left: 4px solid #ffd04b;
}
</style>