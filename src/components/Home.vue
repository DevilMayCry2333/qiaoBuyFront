<template>
<div>
  <div style="margin-left: 70%">
  <el-button type="primary" @click="login">登录</el-button>
  <el-button type="primary" @click="register">注册</el-button>
  </div>
<el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>

  </el-carousel>

  <div class="demo-image">
    <div class="block" v-for="fit in fits3" :key="fit.name">
      <span class="demonstration">{{ fit.name }}</span>
      <el-image
        style="width: 500px;"
        :src="fit.pic"
        :fit="fita"
        @click="test(fit.name)"></el-image>
    </div>
  </div>
</div>

</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

const config = require('../config/conf.js');
export default {
  name:'Home',
  created(){
    var that = this;
                axios({
                        method:'post',
                        url: config.url+ "AllGoods"
                }).then(function(resp){
                        that.$nextTick(function () {

                        that.$message({
                            message: '恭喜你，这是一条成功消息',
                            type: 'success'
                        });
                        console.log(resp.data);
                        that.fits3 = resp.data.tableData;
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
    login(){
      console.log("登录");
      this.$router.push({
              path:'/Login',
          })
    }
  },
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
         fits2: ['fill', 'fill', 'fill', 'fill', 'fill'],
         fits3:[
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