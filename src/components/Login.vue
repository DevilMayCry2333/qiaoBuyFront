<template>
    <div>
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
        <el-input show-password v-model="password" placeholder="请输入密码"></el-input>

        <el-button type="primary" @click="login">登录</el-button>
        <h4>没有账号?</h4>
        <el-button type="info" @click="register">注册</el-button>

    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Cookies from 'js-cookie'

const config = require('../config/conf.js');

export default Vue.extend({
   name: 'Login',
   created(){

   },
   methods:{
     login(){
       console.log(this.username);
       console.log(this.password);
      var that = this;
                axios({
                        method:'post',
                        url: config.url+ "login",
                        params:{
                            username: this.username,
                            password: this.password
                        }
                }).then(function(resp){
                        that.$nextTick(function () {
                       if(resp.data.Res){
                          Cookies.set('token',resp.data.Token);
                          Cookies.set('username',this.username);
                          Cookies.set('Province',resp.data.Info.province);
                          Cookies.set('City',resp.data.Info.city);
                          Cookies.set('County',resp.data.Info.county);
                          Cookies.set('Detail',resp.data.Info.detail);
                          Cookies.set('Tel',resp.data.Info.tel);
                            that.$message({
                              message: '登录成功',
                              type: 'success'
                          });
                          that.$router.push("/");
                          }else{
                            that.$message({
                              message: '账号或密码错误!',
                              type: 'fail'
                          });
                          }
                        console.log(resp.data);
                        })
                })
     },
     register(){
          console.log("注册");
          this.$router.push({
              path:'/Register',
          })
     }
   },
   data() {
    return {
      username: '',
      password: ''
    }
  }
})
</script>

<style>

</style>