<template>
    <div>
        <h4>基本信息</h4>
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
        <el-input v-model="password" placeholder="请输入密码"></el-input>
        <el-input v-model="confirmPass" placeholder="请输入确认密码"></el-input>
        <h4>收货地址</h4>
        <el-input v-model="province" placeholder="省"></el-input>
        <el-input v-model="city" placeholder="市"></el-input>
        <el-input v-model="county" placeholder="县"></el-input>
        <el-input v-model="detail" placeholder="具体地址"></el-input>
         <el-input v-model="tel" placeholder="电话"></el-input>

        <el-button type="primary" @click="register">注册</el-button>

    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Cookies from 'js-cookie'

const config = require('../config/conf.js');

export default Vue.extend({
   name: 'Register',
   created(){

   },
   methods:{
     register(){
       console.log(this.username);
       console.log(this.password);
      var that = this;
                axios({
                        method:'post',
                        url: config.url+ "register",
                        params:{
                            username: this.username,
                            password: this.password,
                            Province: this.province,
                            City: this.city,
                            County: this.county,
                            Detail: this.detail,
                            Tel: this.tel
                        }
                }).then(function(resp){
                        that.$nextTick(function () {
                          Cookies.set('token',resp.data.Token);
                          Cookies.set('username',this.username);
                          Cookies.set('Province',this.province);
                          Cookies.set('City',this.City);
                          Cookies.set('County',this.county);
                          Cookies.set('Detail',this.detail);
                          Cookies.set('Tel',this.tel);
                          
                           that.$message({
                            message: '注册成功',
                            type: 'success'
                        });
                        that.$router.push("/");
                        console.log(resp.data);
                        })
                })
     }
   },
   data() {
    return {
      username: '',
      password: '',
      confirmPass: '',
      province:'',
      city:'',
      county:'',
      detail:'',
      tel:'',

    }
  }
})
</script>

<style>

</style>