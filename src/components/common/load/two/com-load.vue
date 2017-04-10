<template>
  <section id="load" class="com-load" v-if="display" @click="display=false">
    <div class="load-main">
      <div class="animate">
      <div class="animate-list"></div>
      <div class="animate-list"></div>
      <div class="animate-list"></div>
      </div><span class="animate-text">正在加载 . .</span>
    </div>
  </section>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        display:false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "com-load.css";
</style>
