<template>
  <section class="com-select" @mouseenter="contentDisplay = false" @mouseleave="contentDisplay = true">
    <div class="sel-head">
      <input type="text" :value="label" readonly="readonly" placeholder="请选择">
    </div>
    <ul class="sel-content" :class="{'hide':contentDisplay}">
      <slot></slot>
    </ul>
  </section>
</template>

<script>
  export default {

    data () {
      return {
        label:'',

        contentDisplay:true
      }
    },
    props:['value'],

    methods:{

      input:function(value){

        this.$emit('input',value)
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import url('com-select.css');

</style>
