<template>
  <div class="">
    {{msg}}
  </div>
</template>

<script>
  //校验
  export default {
    name: '',
    data () {
      return {

        checked:'',

        msg: 'Welcome to Your Vue.js this is menu2',

        customerName:'12346',

        phone:18092828092,

      }
    },
    created:function(){

      let validate = {

        rules:{
          //姓名
          customerName:{require:true},
          //电话
          phone:{require:true,mobileRule:true},

        },
        prompt: {

          customerName: {require: '请填写姓名'},

          phone:{require:'请填写电话',mobileRule:'电话规则不正确'},
        }

      }

      this.valid(this,validate);
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
