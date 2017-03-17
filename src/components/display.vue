<template>
  <div class="add">
    {{a}}

    <span>这个是B的值</span>
    {{b}}
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App111'
      }
    },
    /*computed:Vuex.mapGetters({
      msg : 'getMessage'
    }),*/
    computed:{

      b:function(){
        return this.$store.state.b.count;
      },

      a:function(){
        return this.$store.state.a.count;
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
