<template>
<div>
  <router-link v-for='path in paths' :key='path.id' :to="{
    name:'course',
    params:{
      param: path.param
    }
  }">{{path.param}}</router-link>
</div>
</template>

<script>
export default {
name: 'HelloTo',
data(){
  return {
    paths:[
      {
        id:'001',
        param:'环境执法'
      },
      {
        id:'002',
        param:'环境监测'
      },
    ]
  }
},
methods: {
  toCourse(){
    this.$router.push('course')
  },
}
}

</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>