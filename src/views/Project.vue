<template>
  <div>
    项目管理
    <!-- <div id="qrcode" ref="qrcode"></div> -->
    <el-table
      :data="tableData"
      style="width: 100%"
      row-key="id" :expand-row-keys="expands">
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
    </el-table>
  </div>
</template>
<script>
import QRCode from 'qrcodejs2';

export default {
  data() {
    return {
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