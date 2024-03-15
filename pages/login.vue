<template>
  <div class="page">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="rules"
      label-width="120px"
    >
      <el-form-item label="Username" prop="username">
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="loginForm.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">
          Login
        </el-button>
        <el-button @click="resetForm('loginForm')">
          Reset
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      loginForm: {
        username: 'kminchelle',
        password: '0lelplR'
      },
      rules: {
        username: [
          { required: true, message: 'Please input Username', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please input Username', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('login', this.loginForm)
        } else {
          this.$message.warning('Please check all fields.')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
