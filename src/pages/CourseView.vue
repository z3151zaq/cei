<template>
  <div>
    <div class='banner'>{{param}}</div>
    <div style='display:flex;justify-content: center;'>
      <div class='course-container'>
        <CourseCard v-for="course in courses" :key='course.productID' :course='course'/>
      </div>
    </div>
  </div>
    
</template>

<script>
import CourseCard from '@/components/CourseCard.vue'
import Service from '../service/Service'
export default {
    name:'CourseView',
    components:{
      CourseCard
    },
    props:['param'],
    data(){
      return{
        courses:[]
      }
    },
    mounted() {
      Service.getCourse().then(
        res => this.courses = res.rows
      )
    },
}
</script>

<style scoped>
.course-container{
  width:80%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.banner{
  background-color:#06141a;
  padding: 20px 0px;
  text-align: center;
  color: white;
}
</style>