<template>
  <section id="app">

    <!--<input @click="incrementClick" type="button" value="点击">
    {{result}}
    <add></add>
    <div>
      <display></display>
    </div>-->

    <section id="nav">
      <div class="nav-logo">
        <img src="../../static/img/logo.jpg" alt="">
      </div>
      <ul class="nav-item">
        <li class="nav-list" @click="navToggle('第一个','/index/menu1')" :class="{ 'nav-list-after' : toggleVal == '第一个'}">
          <span>第一个</span>
        </li>
        <li class="nav-list" @click="navToggle('第二个','/index/menu2')" :class="{ 'nav-list-after' : toggleVal == '第二个'}">
          <span>第二个</span>
        </li>
        <li class="nav-list" @click="navToggle('第三个','/index/menu3')" :class="{ 'nav-list-after' : toggleVal == '第三个'}">
          <span>第三个</span>
        </li>
        <li class="nav-list" @click="navToggle('第四个','/index/menu4')" :class="{ 'nav-list-after' : toggleVal == '第四个'}">
          <span>第四个</span>
        </li>
        <li class="nav-list" @click="navToggle('第五个','/index/menu5')" :class="{ 'nav-list-after' : toggleVal == '第五个'}">
          <span>第五个</span>
        </li>
        <li class="nav-list" @click="navToggle('第六个','/index/menu6')" :class="{ 'nav-list-after' : toggleVal == '第六个'}">
          <span>第六个</span>
        </li>
      </ul>
    </section>

    <section id="common-nav">
      <div class="nav-img">

      </div>
    </section>

    <section id="main-display">
      <section class="main">

        <router-view></router-view>

      </section>
    </section>

    <demo v-if="result"></demo>

  </section>
</template>

<script>
  import add from './add'


  export default {
    name: 'app',

    data :function() {
      return {
        toggleVal: '第一个',
      }
    },

    created:function(){

    },
    computed: {
      result () {
        return this.$store.state.b.show
      },
      backObj(){

        return this.$store.state.b.obj
      }
    },
    methods: {
      //一级导航点击事件
      navToggle:function(data,href){

        this.toggleVal = data;

        this.$router.push(href);

      },

    },

  }
</script>
