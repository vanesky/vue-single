<template>
  <div class="">

    <div>
      <com-radio v-model="checked" :label="1">{{1}}</com-radio>
      <com-radio v-model="checked" :label="2">{{2}}</com-radio>
    </div>
    <div class="mt10">选择：{{checked}}</div>

    <prent-select v-model="model" class="mt20">
      <com-select v-for="item in list" :label="item.name" :value="item.age"></com-select>
    </prent-select>

    <prent-select v-model="model" class="mt20">
      <com-select v-for="item in list" :label="item.name" :value="item.age"></com-select>
    </prent-select>

    <input type="button" value="点击我" @click="demo">
  </div>
</template>

<script>

  var _list = [
    {
      name:'小明',
      age:10
    },
    {
      name:'小李',
      age:11
    },
    {
      name:'小红',
      age:12
    }
  ]

  //组件全局
  export default {
    name: '',
    data () {
      return {
        checked:'',

        list:_list,

        model:''
      }
    },
    created:function(){

    },
    methods:{
      demo:function(){
        console.log(this.model)
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
