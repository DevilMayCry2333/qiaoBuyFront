<template>
    <div>
  <div class="demo-image">
   <div>
         <p>商品详情</p>
    </div>
    <el-image
      style="width: 70%; height: 70%"
      :src="url"
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
  <el-button type="primary" disabled>购买</el-button>
    </div>
   
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'Detail',
    data() {
      return {
        fit: ['fill'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        radio1:'白色',
        options: [{
          value: '选项1',
          label: 'S'
        }, {
          value: '选项2',
          label: 'M'
        }, {
          value: '选项3',
          label: 'L'
        }, {
          value: '选项4',
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
    width: 60%;
    height: 60%;
}

</style>
