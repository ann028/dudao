<template>
  <div>
    <Step :stepName="stepName"></Step>
    <!-- <div id="qrcode" ref="qrcode"></div> -->
    <div class="mt20 space-center">
      <div class="flex">
        <el-input v-model="searchParam.name" placeholder="请输入内容" style="width: 200px;"></el-input>
        <div class="ml20">
          <span class="mr10">项目类型</span>
          <el-select v-model="searchParam.type" placeholder="请选择">
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="ml20">
          <span class="mr10">板块</span>
          <el-select v-model="searchParam.type" placeholder="请选择">
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="ml20">
          <span class="mr10">督导专员</span>
          <el-input v-model="searchParam.name" placeholder="请输入内容" class="mr20" style="width: 200px;"></el-input>
        </div>
        <el-button type="primary" class="ml20">查询</el-button>
      </div>
      <div>
        <el-button type="primary" @click="projectType('add')">新增</el-button>
      </div>
    </div>
    <!-- <el-table
      :data="tableData"
      style="width: 100%"
      row-key="id" :expand-row-keys="expands"
       :header-cell-style="{background:'#FFF9F3'}">
      <el-table-column type="expand" width="0">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand" >
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="商品 ID"
        prop="id">
      </el-table-column>
      <el-table-column
        label="商品名称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="描述"
        prop="desc">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="expandRow(scope.row)">展开</el-button>
        </template>
      </el-table-column>
    </el-table> -->
    <el-table
      :data="tableData"
      style="width: 100%; height: auto; margin-top: 26px;"
      ref="multipleTable"
      :header-cell-style="{background:'#FFF9F3'}">
      <el-table-column
        type="index"
        label="序号"
        :index="indexMethods"
        width="55"
        align="center">
      </el-table-column>
      <el-table-column
        label="证券简称"
        prop="name"
        align="center">
      </el-table-column>
      <el-table-column
        prop="loginName"
        label="证券代码"
        align="center">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="项目类型"
        align="center">
      </el-table-column>
      <el-table-column
        prop="email"
        label="板块"
        align="center">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="业务部门"
        align="center">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="督导专员"
        align="center">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="督导时间"
        align="center">
      </el-table-column>
      <el-table-column
        label="操作"
        align="center">
        <template>
          <!-- slot-scope="scope" -->
          <el-button  type="text" size="middle" @click="projectType('view')">查看</el-button>
          <el-button type="text" size="middle" @click="projectType('edit')">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹框内容 -->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      width="600px"
      :before-close="handleClose">
      <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="基本信息" name="first">
            <Basic></Basic>
          </el-tab-pane>
          <el-tab-pane label="相关人员" name="second">
            <PersonSetting></PersonSetting>
          </el-tab-pane>
        </el-tabs>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
// import QRCode from 'qrcodejs2';
import Step from '@/components/Step.vue'
import Basic from '@/components/Projects/BasicInfo.vue'
import PersonSetting from '@/components/Projects/PersonSetting.vue'

export default {
  components: {
    'Step': Step,
    'Basic': Basic,
    'PersonSetting': PersonSetting
  },
  data() {
    return {
      stepName: [
        {
          path: '',
          name: '项目管理',
        },
      ],
      searchParam: {
        name: '',
        type: '',
      },
      typeOptions: [],
      tableData:[
        {
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        },
      ],
      expands: [],
      dialogVisible: false,
      dialogTitle: '新增',
      activeName: 'first',
    }
  },
  methods: {
    qrcode () {
      // document.getElementById("qrcode").innerHTML = "";
      // setTimeout(() => {
      // new QRCode(this.$refs.qrcode, {
      //   text: 'http://wxshop.carmanclub.com.cn/web/drawPrize/index.html?key_code=' + 123456789,
      //   // text: 'https://www.baidu.com',
      //   width: 200,
      //   height: 200,
      //   colorDark: "#333333", //二维码颜色
      //   colorLight: "#ffffff", //二维码背景色
      //   correctLevel: QRCode.CorrectLevel.L//容错率，L/M/H
      // })
      // }, 100)
    },
    expandRow(row) {
      if (this.expands.indexOf(row.id) < 0) {
        this.expands = [];
        this.expands.push(row.id);
      } else {
        this.expands = [];
      }
    },
    projectType(type) {
      switch(type) {
        case 'add': 
          this.dialogVisible = true
          this.dialogTitle = '新增'
          break;
        case 'edit':
          this.dialogVisible =   true
          this.dialogTitle = '编辑'
          break;
        case 'view':
          this.dialogVisible = true
          this.dialogTitle = '详情'
      }

    }
  },
  mounted() {
    this.qrcode()
  }
}
</script>
<style lang="less" scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
/deep/ .el-table__expand-icon{
  visibility: hidden;
}
</style>