<template>
<div>
<el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>

  </el-carousel>

  <div class="demo-image">
    <div class="block" v-for="fit in fits3" :key="fit">
      <span class="demonstration">{{ fit.way }}</span>
      <el-image
        style="width: 167%;"
        :src="fit.src"
        :fit="fit.way"></el-image>
    </div>
  </div>
</div>

</template>

<script lang="ts">
import Vue from 'vue'
const config = require('../config/conf.js');
export default {
  name:'Home',
  methods:{
    test(){
      console.log("Test");
    }
  },
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
         fits2: ['fill', 'fill', 'fill', 'fill', 'fill'],
         fits3:[
           {
             way:'fill',
             src:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
           },
           {
             way:'fill',
             src:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
           }

         ],
        fit:'cover',
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