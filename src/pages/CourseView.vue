<template>
<div>
  <CourseCard  v-for="course in courses" :key='course.productName' :course='course'/>
</div>
  
  
</template>

<script>
import CourseCard from '@/components/CourseCard.vue'
export default {
    name:'CourseView',
    components:{
      CourseCard
    },
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
    }
}
</script>

<style>

</style>