<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>通用後臺管理系統</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form">
        <el-form-item label="用戶名" prop="username" :rules="rules.username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密碼" prop="password" :rules="rules.password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">送出</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>

export default {
  name: "VueLogin",
  props: {},
  data() {
    const validateName = (rule, value, callback) => {
      const regex = /^[a-zA-Z0-9]{4,10}$/;
      if (value === "") {
        callback(new Error("請輸入用戶名"));
      } else if (!regex.test(value)) {
        callback(new Error("請輸入4~10位用戶名"));
      }
    };
    const validatePassword = (rule, value, callback) => {
      const regex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$/;
      if (value === "") {
        callback(new Error("請輸入密碼"));
      } else if (!regex.test(value)) {
        callback(new Error("請輸入6~12位需要包含大小寫英文字和數字以及特殊符號密碼"));
      }
    };

    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
      },
    };
  },
  methods: {
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form);
        } else {
          console.error(this.form);
        }
      });
    },
  },
};
</script>
<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #409eff;

  .box-card {
    width: 450px;
    margin: 200px auto;
    .clearfix {
      font-size: 32px;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
