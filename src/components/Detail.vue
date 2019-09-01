<template>
  <div class="test">
    <div class="demo-image">
        <div>
              <p>商品详情</p>
          </div>
          <el-image
            style="width: 70%; height: 70%"
            :src="tableData.pic"
            :fit="fit"></el-image>
      </div>
      <div>
          <el-radio-group v-model="radio1">
            <el-radio-button label="蓝色"></el-radio-button>
            <el-radio-button label="红色"></el-radio-button>
            <el-radio-button label="白色"></el-radio-button>
            <el-radio-button label="紫色"></el-radio-button>
          </el-radio-group>
        </div>
        <div>
            <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </div>
        <div>
            <el-input v-model="input" placeholder="请输入数量"></el-input>
        </div>
        <el-button type="primary" @click="buy">购买</el-button>
  </div>
   
</template>


<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Cookies from 'js-cookie'

const config = require('../config/conf.js');

export default Vue.extend({
    name:'Detail',
    created(){
      console.log(this.$route.query.name);
      this.name = this.$route.query.name;

      var that = this;
                axios({
                        method:'post',
                        url: config.url+ "BuyFrontDetail",
                        params:{
                          name: that.name
                        }
                }).then(function(resp){
                        that.$nextTick(function () {

                        that.$message({
                            message: '恭喜你，这是一条成功消息',
                            type: 'success'
                        });
                        console.log(resp.data);
                        that.tableData = resp.data[0];
                        console.log(that.tableData);
                        })
            })
    },
    methods:{
      buy(){
        var that = this;
        console.log("buy");
        console.log(Cookies.get('token'));
        console.log(Cookies.get('username'));
        console.log(Cookies.get('Province'));
        console.log(Cookies.get('City'));
        console.log(Cookies.get('County'));
        console.log(Cookies.get('Detail'));
        console.log(Cookies.get('Tel'));

        //S,M这些
        console.log(this.value);
        //颜色
        console.log(this.radio1);
        //数量
        console.log(this.input);
        //图片
        console.log(this.tableData.pic);

                axios({
                        method:'post',
                        url: config.url+ "insertOrder",
                        params:{
                          size: this.value,
                          color: this.radio1,
                          amount: this.input,
                          pic: this.tableData.pic,
                          username: Cookies.get('username'),
                          province: Cookies.get('Province'),
                          city: Cookies.get('City'),
                          county: Cookies.get('County'),
                          detail: Cookies.get('Detail'),
                          tel: Cookies.get('Tel')
                        }
                }).then(function(resp){
                        that.$nextTick(function () {
                        that.$message({
                            message: '恭喜你，这是一条成功消息',
                            type: 'success'
                        });
                        console.log(resp.data);
                        })
            })

      }
    },
    data() {
      return {
        name:'',
        fit: 'fill',
        tableData:'',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        radio1:'白色',
        options: [{
          value: 'S',
          label: 'S'
        }, {
          value: 'M',
          label: 'M'
        }, {
          value: 'L',
          label: 'L'
        }, {
          value: 'XL',
          label: 'XL'
        }],
        value: '',
        input: ''
      }
    },
    
        
       
    
})
</script>
<style>
.demo-image{
    width: 100%;
    height: 60%;
    /* margin-left: 15% */
}
.test{
margin-left: 20%
}

</style>
