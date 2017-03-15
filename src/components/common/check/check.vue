<template>
  <label class="ml20">
    <span>{{child.name}}</span>
    <input type="checkbox" :value="child.name" v-model="sel" @click.stop="" class="hide">
    <span class="check-box" :class="{&quot;bc-c&quot; : sel }"></span>
  </label>
</template>

<script>
  export default {

    name: '',

    props:['child'],
    computed:{

      sel:{

        get:function(){

          let _this = this;

          let temp = false;

          this.$parent.value.forEach(function(item,index){

            if(item == _this.child.name){
              temp = true;
              return false;
            }
          })

          return temp;
        },

        set:function(val){

          let _this = this;

          if(val){

            this.$parent.value.push(this.child.name)

            return true;
          }else{

            this.$parent.value.forEach(function(item,index,self){

              if(item == _this.child.name){

                self.splice(index,1)
              }
            })
          }
        }
      }

    },

    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
