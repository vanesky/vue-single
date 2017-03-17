<template>
  <section class="com-prompt" v-if="display">
    <div class="prompt-main">
      <h5 class="prompt-tit">提示</h5><div class="prompt-text">{{titles}}</div>
      <ul class="prompt-item">
        <li class="prompt-button bc-db c6" @click="clickFun(0)">取消</li>
        <li class="prompt-button bc-c cf" @click="clickFun(1)">确定</li>
      </ul>
    </div>
  </section>
</template>

<script>

  import {mapState} from 'vuex'

  export default {

    name: '',
    data () {
      return {

        display:true,

        title:'',

        preFun:'',

        context:'',
      }
    },
    //props:['obj'],
    created:function(){

    },

    computed:mapState({

      titles:function(){

        return this.$store.state.b.obj.title;

      }

    }),

    methods:{

      clickFun:function(str){

        let o = this.$store.state.b;

        if(str == 1 && o.obj.callBack){

          o.obj.callBack(o.obj.context)

        }
        o.show = false;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .com-prompt{position:fixed;width:100%;height:100%;top:0;left:0;background-color:rgba(0,0,0,.4);z-index:99}
  .com-prompt .prompt-main{position:relative;width:30rem;height:12rem;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;background-color:#fff;border-radius:5px}
  .com-prompt .prompt-main .prompt-tit{height:3rem;line-height:3rem;border-bottom:1px solid #f2f2f2;font-weight:700;text-align:left;padding-left:1.5rem}
  .com-prompt .prompt-main .prompt-text{padding-top:1rem;height:4rem;width:85%;margin:0 auto;font-size:1.4rem}
  .com-prompt .prompt-main .prompt-item{width:80%;margin:0 auto}
  .com-prompt .prompt-main .prompt-item .prompt-button{display:inline-block;width:7rem;height:2.5rem;line-height:2.5rem;border-radius:5px;cursor:pointer}
  .com-prompt .prompt-main .prompt-item .prompt-button:first-child{margin-right:2rem}
</style>
