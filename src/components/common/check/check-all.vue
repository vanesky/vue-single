<template>
  <label class="ml20">
    <span>全选</span>
    <input type="checkbox" v-model="allChecked" class="hide">
    <span class="check-box" :class="{'bc-c':prVal.length == list.length}"></span>
  </label>
</template>

<script>
  export default {

    name: '',
    data () {
      return {

      }
    },
    props:['prVal','list'],

    computed:{

      allChecked:{
        get:function(){

          if(this.prVal.length == this.list.length){return true;}
        },
        set:function(value){

          if(value){

            let _this = this;

            this.prVal.splice(0,this.prVal.length);

            this.list.forEach(function(val,index){

              _this.prVal.push(val.name);

            })

          }else{

            this.prVal.splice(0,this.prVal.length);
          }
        }

      },

    },


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
