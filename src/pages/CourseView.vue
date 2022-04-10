<template>
    <div>
        <div class="banner">{{ navigationName }}</div>
        <div style="display: flex; justify-content: center">
            <div class="course-container">
                <CourseCard v-for="course in courses" :key="course.productID" :course="course" />
            </div>
        </div>
    </div>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue';
import Service from '../service/Service';
export default {
    name: 'CourseView',
    components: {
        CourseCard,
    },
    props: ['id', 'navigationName'],
    data() {
        return {
            courses: [],
        };
    },
    watch: {
        $route() {
            Service.getCourse(this.id).then(res => (this.courses = res.rows));
        },
    },
    mounted() {
        Service.getCourse(this.id).then(res => (this.courses = res.rows));
    },
    // beforeUpdate() {
    //     Service.getCourse(this.id).then(res => (this.courses = res.rows));
    // },
    // beforeUpdate() {
    //     Service.getCourse(this.id).then(res => (this.courses = res.rows));
    // },
};
</script>

<style scoped>
.course-container {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
}
.banner {
    background-color: #06141a;
    padding: 20px 0px;
    text-align: center;
    color: white;
}
</style>
