<template>
  <div class="">
    {{msg}}

    <div>
      <com-radio v-model="checked" :label="1">{{1}}</com-radio>
      <com-radio v-model="checked" :label="2">{{2}}</com-radio>
    </div>

    <div class="mt10">选择：{{checked}}</div>
  </div>
</template>

<script>
  //组件全局
  export default {
    name: '',
    data () {
      return {
        checked:'',
        msg: 'Welcome to Your Vue.js this is menu3'
      }
    },
    created:function(){

    },
    methods:{

    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
