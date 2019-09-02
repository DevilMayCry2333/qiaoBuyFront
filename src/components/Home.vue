<template>
<div>


  <div style="margin-left: 70%">
  <el-button type="primary" @click="login">登录</el-button>
  <el-button type="primary" @click="register">注册</el-button>
  <el-button type="primary" @click="backend">后台管理</el-button>

  <h4>欢迎您: {{username}}</h4>
  </div>
<el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in car" :key="item.num">
      <!-- <h3>{{ item.num }}</h3> -->
      <el-image
      style="width: 100%; height: 100%"
      :src="item.pic"
      :fit="fita"></el-image>

    </el-carousel-item>

  </el-carousel>
  <el-row>
    <el-col :span="8">
    <div class="demo-image">
      <div class="block" v-for="fit in leftList" :key="fit.name">
        <span class="demonstration">{{ fit.name }}</span>
        <el-image
          style="width: 200px; height: 200px"
          :src="fit.pic"
          :fit="fita"
          @click="test(fit.name)"></el-image>
      </div>
    </div>
    </el-col>
    <el-col :span="8" style="margin-left:20%">
    <div class="demo-image">
      <div class="block" v-for="fit in rightList" :key="fit.name">
        <span class="demonstration">{{ fit.name }}</span>
        <el-image
          style="width: 200px; height: 200px"
          :src="fit.pic"
          :fit="fita"
          @click="test(fit.name)"></el-image>
      </div>
    </div>
    </el-col>

  </el-row>


</div>

</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Cookies from 'js-cookie'
const config = require('../config/conf.js');
export default {
  name:'Home',
  created(){
    var that = this;
    this.username = Cookies.get('username');

    if(!this.username){
        this.$message({
            message: '您未登录，请登录',
            type: 'fail'
        });
      this.$router.push('/');
    }
                axios({
                        method:'post',
                        url: config.url+ "AllGoods"
                }).then(function(resp){
                        that.$nextTick(function () {

                        that.$message({
                            message: '商品拉取成功',
                            type: 'success'
                        });
                        console.log(resp.data);
                        that.leftList = resp.data.leftList;
                        that.rightList = resp.data.rightList;
                        // console.log(this.desserts);
                        })
            })

  },
  methods:{
    test(e){
      console.log("Test");
      console.log(e);
          this.$router.push({
              path:'/Detail',
              query:{
                  name:e,
              }
          })

      
    },
    register(){
      console.log("注册");
          this.$router.push({
              path:'/Register',
          })
    },
    backend(){
      window.location.href = config.furl;
    },
    login(){
      console.log("登录");
      this.$router.push({
              path:'/Login',
          })
    }
  },
    data() {
      return {
        username:'',
        car:[
          {num:1,pic:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'},
          {num:2,pic:"https://cdn.pixabay.com/photo/2019/08/19/07/45/pets-4415649_1280.jpg"},
          {num:3,pic:"https://cdn.pixabay.com/photo/2019/08/06/08/21/golden-4387704_1280.jpg"},

        ],
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
         fits2: ['fill', 'fill', 'fill', 'fill', 'fill'],
         leftList:[
           {
             way:'fill',
             name:'商品1',
             pic:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
           },
           {
             way:'fill',
             name:'商品2',
             pic:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
           }

         ],
         rightList:[],
        fita:'fill',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
         src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /* .demo-image__placeholder{
    margin-top: 5%
  } */

</style>