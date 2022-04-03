<template>
  <div id="app">
    <CHeader />
    <router-view/>
    <CFooter/>
  </div>
</template>

<script>
import CHeader from './components/CHeader.vue'
import CFooter from './components/CFooter.vue'
export default {
  name: 'App',
  components: {
    CHeader,
    CFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background:#f3f3f4;
}
</style>
