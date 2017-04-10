<template>
  <div id="love" class="">
    <input type="button" value="点击alert" @click="alertFun">

    <!--<input type="button" value="点击我load" @click="this.$load">-->

    <input type="button" value="点击我message" @click="messageFun">


  </div>
</template>

<script>

  export default {
    name: 'aa',
    data () {
      return {

        loadDisplay:false,

        kiss:123456789
      }
    },
    methods:{

      alertFun:function(){

        let _this = this;

        this.$alert({

          title:'这是一个测试',

          callBack:function(){

            console.log(_this.kiss)

          }

        });
      },


      messageFun:function(){

        this.$message({

          type:'success',

          text:'成功',

          time:2500

        })
      },


    },


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
