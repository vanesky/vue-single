<template>
  <section class="com-prompt" v-if="display">
    <div class="prompt-main">
      <h5 class="prompt-tit">提示</h5><div class="prompt-text">{{title}}</div>
      <ul class="prompt-item">
        <li class="prompt-button bc-db c6" @click="clickFun(0)">取消</li>
        <li class="prompt-button bc-c cf" @click="clickFun(1)">确定</li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {

    name: '',
    data () {
      return {

        display:false,

        title:'',

        preFun:'',

      }
    },

    methods:{

      setAlert:function(param){

        this.display = true;

        if(param.title){this.title = param.title}

        if(param.callBack){this.preFun = param.callBack}

      },

      clickFun:function(str){

        if(str == 1 && this.preFun){

          this.preFun()

        }
        this.display = false;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "com-alert.css";
</style>
