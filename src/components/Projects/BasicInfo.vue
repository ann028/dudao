<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :label-position="right" label-width="100px" class="demo-ruleForm" >
      <section class="flex">
        <el-form-item label="证券代码" prop="code" class="tag">
          <span class="viewInfoStyle" v-if="viewProjectInfo">{{ruleForm.code}}</span>
          <el-input v-else v-model="ruleForm.code" maxlength="30" class="input_width1"></el-input>
        </el-form-item>
        <el-form-item label="证券简称" prop="name" class="tag">
          <span class="viewInfoStyle" v-if="viewProjectInfo">{{ruleForm.name}}</span>
          <el-input v-else v-model="ruleForm.name" maxlength="120" class="input_width1" :disabled="viewProjectInfo ? true :  false"></el-input>
        </el-form-item>
      </section>
      <section class="flex">
        <el-form-item label="项目类型" prop="type" class="tag">
          <span class="viewInfoStyle" v-if="viewProjectInfo">{{ruleForm.type}}</span>
          <el-select v-model="ruleForm.type" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="业务部门" prop="department" class="tag">
          <span class="viewInfoStyle" v-if="viewProjectInfo">{{ruleForm.department}}</span>
          <el-input v-else v-model="ruleForm.department" maxlength="120" class="input_width1" :disabled="viewProjectInfo ? true :  false"></el-input>
        </el-form-item>
      </section>
      <section class="flex">
        <el-form-item label="督导时间" prop="time2" class="tag">
          <span class="viewInfoStyle" v-if="viewProjectInfo">{{ruleForm.time1}}</span>
          <div class="flex">
            <el-date-picker
              v-model="ruleForm.time1"
              type="year"
              placeholder="选择年">
            </el-date-picker>
            <span style="margin: 0 3px;">至</span>
            <el-date-picker
              v-model="ruleForm.time2"
              type="year"
              placeholder="选择年">
            </el-date-picker>
          </div>
        </el-form-item>
        <!-- <el-form-item label="板块" prop="name" class="tag">
          <span class="viewInfoStyle" v-if="viewProjectInfo">{{ruleForm.name}}</span>
          <el-input v-else v-model="ruleForm.name" maxlength="120" class="input_width1" :disabled="viewProjectInfo ? true :  false"></el-input>
        </el-form-item> -->
      </section>
      <section>
        <el-form-item label="板块" prop="plate" class="tag">
          <span class="viewInfoStyle" v-if="viewProjectInfo">{{ruleForm.plate}}</span>
          <el-select v-model="ruleForm.plate" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
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
        code: '',
        name: '',
        type: '',
        department: '',
        plate: '',
      },
      rules: {
        code: [
          {required: true, message: '请输入债券简称', trigger: 'blur'},
        ],
        name: [
          { required: true, message: '请输入债券全称', trigger: 'blur' },
          { max: 120, message: '最长120 个字符', trigger: 'change' },
        ],
        type: [
          {required: true, message: '请选择证券类型', trigger: 'change'},
        ],
        department: [
          { required: true, message: '请输入业务部门', trigger: 'blur'},
        ],
        time1: [
          { required: true, message: '请选择督导时间', trigger: 'change'},
        ],
        time2: [
          { required: true, message: '请选择督导时间', trigger: 'change'},
        ],
        plate: [
          { required: true, message: '请填写板块', trigger: 'change'},
        ],
      }
    }
  }
}
</script>
<style lang="less" scoped>

</style>