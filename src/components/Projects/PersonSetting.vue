<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :label-position="right" label-width="140px" class="demo-ruleForm" >
      <section class="flex">
        <el-form-item label="业务部门负责人" prop="code" class="tag">
          <!-- <el-input v-model="ruleForm.code" maxlength="30" class="input_width1"></el-input> -->
          <el-button>添加</el-button>
        </el-form-item>
        <el-form-item label="保荐代表人" prop="name" class="tag">
          <!-- <el-input v-model="ruleForm.name" maxlength="120" class="input_width1" :disabled="viewProjectInfo ? true :  false"></el-input> -->
          <el-button>添加</el-button>
        </el-form-item>
      </section>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        code: [],
        name: [],
      },
      rules: {
         code: [
          {required: true, message: '请输入债券简称', trigger: 'blur'},
        ],
        name: [
          { required: true, message: '请输入债券全称', trigger: 'blur' },
          { max: 120, message: '最长120 个字符', trigger: 'change' },
        ],
      },
    }
  },
}
</script>
<style lang="less" scoped>

</style>