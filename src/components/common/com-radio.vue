<template>
  <label class="com-label ml20">
    <input class="com-radio"
    type="radio"
    v-bind:value="label"
    v-on:focus="updateValue($event.target.value)"
    v-model="model"
    >
    <span class="com-radio-box" :class="{boxAdd:value == label}"></span>
    <slot></slot>
  </label>
</template>

<script>
  export default {

    name: 'hello',
    data () {
      return {

      }
    },

    props: ['value','label'],

    methods:{
      updateValue:function(value){

        this.$emit('input',value)
      },
    },
    computed:{

      model:function(){

        return this.value;
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .boxAdd{
    background-color: #714f52;
  }

  .com-label,.com-radio-box{
    position: relative;
  }
  .com-radio{
    position: absolute;
    left:0;
    opacity: 0;
  }
  .com-radio-box{
    width:1rem;
    height:1rem;
    border-radius: 1rem;
    border: 2px solid #666;
    display: inline-block;
  }
</style>
