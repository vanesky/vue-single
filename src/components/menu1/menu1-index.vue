<template>
  <div class="one-a">
    {{msg}}

    <div style="width:300px;height:300px;background-color: #1fb394;" v-touch:tap="{method:demo,param:'这是文字'}">你就是一个傻子</div>

  </div>
</template>

<script>

  export default {
    name: 'one-a',
    data () {
      return {

        msg: 'Welcome to Your Vue.js this is menu1',
      }
    },

    methods:{

      demo:function(str){
        console.log(str)
      }

    },
    computed:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
