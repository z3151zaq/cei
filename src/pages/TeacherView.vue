<template>
    <div>
        <div class="radio-buttons">
            筛选：
            <el-radio-group v-model="selectedCategory" size="small">
                <el-radio-button
                    v-for="cat in teacherCategory"
                    :key="cat.teacherCategoryID"
                    :label="cat.teacherCategoryID"
                >
                    {{ cat.categoryName }}
                </el-radio-button>
            </el-radio-group>
        </div>

        <div class="teacher-card-container">
            <TeacherCard v-for="t in teacherList" :key="t.teacherID" :t="t" />
        </div>
    </div>
</template>

<script>
import TeacherCard from '@/components/TeacherCard.vue';
import Service from '@/service/Service';
export default {
    name: 'TeacherView',
    data() {
        return {
            selectedCategory: 0,
            teacherCategory: [],
            teacherList: [],
        };
    },
    components: { TeacherCard },
    watch: {
        selectedCategory() {
            Service.getTeacherList({
                teacherCategoryID: this.selectedCategory,
                pageSize: 100,
            }).then(res => (this.teacherList = res.rows));
        },
    },
    mounted() {
        Service.searchTeacherCategoryList().then(res => (this.teacherCategory = res));
        Service.getTeacherList({
            teacherCategoryID: this.selectedCategory,
            pageSize: 100,
        }).then(res => (this.teacherList = res.rows));
    },
};
</script>

<style>
.radio-buttons {
    margin: 10px auto;
    width: 90%;
    background-color: white;
    padding: 4px 10px;
}
.teacher-card-container {
    margin: 0 auto;
    max-width: 90%;
    display: grid;
    justify-content: space-around;
    grid-template-columns: repeat(auto-fill, minmax(400px, auto));
    row-gap: 20px;
}
</style>
