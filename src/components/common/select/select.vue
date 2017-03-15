<template>

  <li data-val="" class="sel-list" @click="clickFun()">{{label}}</li>

</template>

<script>
  export default {

    name: 'hello',
    data () {
      return {

      }
    },

    props: ['label','value'],

    methods:{
      clickFun:function(){

        this.$parent.label = this.label;

        this.$parent.input(this.value);

        this.$parent.contentDisplay = true;

      }

    },


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
