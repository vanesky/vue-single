<template>
  <div id="love" class="">

    <com-dis></com-dis>

    <input type="button" value="点击我" @click="demo">
  </div>
</template>

<script>

  import display from '../display.vue';

  export default {
    name: '',
    data () {
      return {
        kiss:'lisa'
      }
    },
    methods:{

      demo:function(){

        this.$store.commit('dis',{

          title:'这是一个测试',

          callBack:function(_this){

            console.log(_this.kiss)
          },

          context:this
        })

      }

    },
    created:function(){

      //console.log(mapState)
    },

    components:{

      'com-dis':display
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
