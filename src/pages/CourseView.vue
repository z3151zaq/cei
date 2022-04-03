<template>
  <div>
    <div class='banner'>{{param}}</div>
    <div style='display:flex;justify-content: center;'>
      <div class='course-container'>
        <CourseCard v-for="course in courses" :key='course.productName' :course='course'/>
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
        courses:[
          {
            basicPrice: 88,
            buyCount: 2257,
            courseType: 1,
            introduction: "",
            likeCount: 50,
            originalPrice: -1,
            previewImgUrl: "https://data.cei.net.cn/images/product/1632448855733.jpg",
            productID: 860,
            productName: "新《环境保护法》解读",
            productType: 1,
            seriesID: 2,
            seriesName: "环境保护法及四个配套办法",
            thumbnailUrl: "https://data.cei.net.cn/images/product/1632448860940.jpg"
          },
          {
            basicPrice: 43,
            buyCount: 3084,
            courseType: 1,
            introduction: "",
            likeCount: 51,
            originalPrice: -1,
            previewImgUrl: "https://data.cei.net.cn/images/product/1632448839663.jpg",
            productID: 861,
            productName: "《环境保护法》重点条文解读",
            productType: 1,
            seriesID: 2,
            seriesName: "环境保护法及四个配套办法",
            thumbnailUrl: "https://data.cei.net.cn/images/product/1632448844508.jpg",
          }
        ]
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