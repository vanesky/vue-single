<template>
  <div class="ml20 bc-eb"><slot></slot></div>
</template>

<script>
  export default {

    name: 'hello',
    data () {
      return {

      }
    },
    props:['value'],

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
