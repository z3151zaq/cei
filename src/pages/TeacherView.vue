<template>
    <div class="teacher-card-container">
        <TeacherCard v-for="i in 4" :key="i" />
    </div>
</template>

<script>
import TeacherCard from '@/components/TeacherCard.vue';
export default {
    name: 'TeacherView',
    components: { TeacherCard },
};
</script>

<style>
.teacher-card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, auto));
    gap: 10px;
}
</style>
