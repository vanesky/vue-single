<template>
  <div class="">
    {{msg}}
    <check-all :prVal="model" :list="list"></check-all>

    <prent-check v-model="model">
      <com-check v-for="item in list" :child="item"></com-check>
    </prent-check>
  </div>
</template>

<script>
  //多选组件
  var _list = [
    {
      name:'小明',
      age:12
    },
    {
      name:'小李',
      age:11
    },
    {
      name:'小红',
      age:11
    }
  ]


  export default {
    name: '',
    data () {
      return {
        msg: 'Welcome to Your Vue.js this is menu4',

        list : _list,

        model:[],
      }
    },

    methods:{
      clickList:function(){
        console.log(this.checked)
      },
    },


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .check-box{
    position: relative;
    display: inline-block;
    width:1rem;
    height:1rem;
    border-radius:2px;
    border: 1px solid pink;
  }
  .check-box:after{
    position: absolute;
    left: .3rem;
    top:.1rem;
    content: "";
    display: block;
    width: .2rem;
    height: .5rem;
    border: .15rem solid #ffffff;
    border-top: 0;
    border-left:0;
    transform: rotateZ(45deg);
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;
    transform-origin: center;
  }
</style>
