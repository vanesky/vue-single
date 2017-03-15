<template>
    <section class="com-message" v-if="display">
      <div class="circle" :class="style"><div :class="childStyle"></div></div>
      <div class="text">{{text}}</div>
      <span class="close" @click="display = false">&times;</span>
    </section>
</template>

<script>

  export default {
    name: '',
    data () {
      return {

        display:false,

        style:'',

        childStyle:'',

        text:''

      }
    },
    methods:{

      setMessage:function(param){

        this.style = param.type;

        if(param.type == 'warning' || param.type == 'prompt'){

          this.childStyle = 'sigh';

        }else if(param.type == 'success'){

          this.childStyle = 'hook';
        }

        this.text = param.text;

        this.display = true;

        let _this = this;

        setTimeout(function(){

          _this.$el.style.opacity = 1;

          _this.$el.style.transform = "translate(-50%,30px)";
        });

        setTimeout(function(){

          _this.display = false;

        },param.time)

      }


    },


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  @import 'com-message.css';

</style>
