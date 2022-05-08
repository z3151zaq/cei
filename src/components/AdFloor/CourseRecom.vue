<template>
    <div>
        <div class="center-title">
            <div style="width: 10px; height: 10px; background-color: blue"></div>
            <div>{{ floorName }}</div>
            <!-- <el-menu
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                :default-active="activeIndex"
                background-color="#f3f3f4"
                size="small"
            >
                <el-menu-item index="1"> 推荐 </el-menu-item>
                <el-menu-item index="2"> 在线课程 </el-menu-item>
                <el-menu-item index="3"> 远程培训班 </el-menu-item>
                <el-menu-item index="4"> 面授培训班 </el-menu-item>
            </el-menu> -->
            <!-- <el-tabs v-model="activeName" @tab-click="handleSelect">
                <el-tab-pane label="推荐" name="1"></el-tab-pane>
                <el-tab-pane label="在线课程" name="2"></el-tab-pane>
                <el-tab-pane label="远程培训班" name="3"></el-tab-pane>
                <el-tab-pane label="面授培训班" name="4"></el-tab-pane>
            </el-tabs> -->
            <el-button
                type="text"
                value="0"
                :class="{ active: activeType === 0 }"
                @click="handleClick(0)"
            >
                推荐
            </el-button>
            <el-button
                type="text"
                value="1"
                :class="{ active: activeType === 1 }"
                @click="handleClick(1)"
            >
                在线课程
            </el-button>
            <el-button
                type="text"
                value="2"
                :class="{ active: activeType === 2 }"
                @click="handleClick(2)"
            >
                远程培训班
            </el-button>
            <el-button
                type="text"
                value="3"
                v-bind:class="{ active: activeType === 3 }"
                @click="handleClick(3)"
            >
                面授培训班
            </el-button>
            <a href="/#/newshome">更多&gt;</a>
        </div>
        <div v-if="activeType === 0" style="display: flex">
            <CourseCard
                style="width: 33%; font-size: 10px"
                v-for="course in courseList"
                :key="course.productID"
                :course="course"
            />
        </div>
        <div v-if="activeType === 0" style="display: flex">
            <CourseCard
                style="width: 50%; font-size: 10px"
                v-for="course in classList"
                :key="course.productID"
                :course="course"
            />
        </div>
        <div
            v-if="activeType !== 0"
            :class="{
                'recom-container-3cols': activeType === 1,
                'recom-container-2cols': activeType !== 1, 
            }"
        >
            <CourseCard
                style="font-size: 10px"
                v-for="course in rows"
                :key="course.productID"
                :course="course"
            />
        </div>
    </div>
</template>

<script>
import Service from '@/service/Service';

import CourseCard from '@/components/CourseCard';
export default {
    name: 'CourseRecom',
    components: {
        CourseCard,
    },
    props: ['floorID', 'floorName'],
    data() {
        return {
            activeType: 0,
            classList: [],
            courseList: [],
            rows: [],
        };
    },
    computed: {
        pageSize() {
            return this.activeType === 1 ? 6 : 4;
        },
    },
    methods: {
        handleClick(type) {
            this.activeType = type;
            if (type !== 0) {
                Service.searchHomeFloorProductList({
                    floorID: this.floorID,
                    seriesID: 0,
                    type,
                    pageSize: type === 1 ? 6 : 4,
                }).then(res => (this.rows = res.rows));
            }
        },
    },
    mounted() {
        Service.searchHomeFloorProductWebRecomList({ floorID: this.floorID }).then(res => {
            this.classList = res.classList;
            this.courseList = res.courseList;
        });
    },
};
</script>

<style>
.center-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
}
.active span {
    border-bottom: 4px solid #4c97e7;
}
/* button span {
} */
.recom-container-2cols {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.recom-container-3cols {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
</style>
