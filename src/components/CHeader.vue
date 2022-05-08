<template>
    <div class="header">
        <img src="../assets/title_png.png" alt="网站logo" class="header-title-png" />
        <el-dropdown style="margin: 0 20px">
            <span class="el-dropdown-link">
                所有课程<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-cascader-panel
                    :options="option"
                    v-model="value"
                    :props="{ expandTrigger: 'hover', checkStrictly: true }"
                    @change="handleChange"
                    ref="courseCascader"
                ></el-cascader-panel>
            </el-dropdown-menu>
        </el-dropdown>
        <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">
                <router-link to="/"> 首页 </router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link to="/book"> 图书馆 </router-link>
            </el-menu-item>
            <el-menu-item index="3">
                <router-link to="/teacher"> 优秀教师 </router-link>
            </el-menu-item>
            <el-menu-item index="4">
                <router-link to="/newshome"> 热门资讯 </router-link>
            </el-menu-item>
            <el-menu-item index="5">
                <router-link to="/newshome"> VIP畅学 </router-link>
            </el-menu-item>
        </el-menu>
        <a href="/#/book" style="margin: 0 10px 0 20px">下载APP</a>
        <a href="/#/teacher " style="margin: 0 20px 0 10px">登录/注册</a>
        <el-button type="primary" round>查询证书</el-button>
    </div>
</template>

<script>
import Service from '../service/Service';
export default {
    name: 'CHeader',
    data() {
        return {
            value: [],
            navigation: [],
        };
    },
    methods: {
        handleChange(value) {
            console.log(value);
            if (value.length === 3)
                this.$router.push({
                    path: '/cdetail',
                    query: {
                        id: value[2],
                    },
                });
            else if (value.length === 1) {
                this.$router.push({
                    name: 'course',
                    // path:`/course/${value[0]}`,
                    params: {
                        id: value[0],
                        navigationName:
                            this.$refs.courseCascader.getCheckedNodes()[0].pathLabels[0],
                    },
                });
            }
        },
    },
    computed: {
        option() {
            const option = this.navigation.map(navi => ({
                value: navi.seriesID,
                label: navi.navigationName,
                children: navi.childrenList.map(navi_2 => ({
                    value: navi_2.seriesID,
                    label: navi_2.seriesName,
                    children: navi_2.courseList.map(navi_3 => ({
                        value: navi_3.productID,
                        label: navi_3.productName,
                    })),
                })),
            }));
            return option;
        },
    },
    mounted() {
        Service.getNavigationList({
            pageNo: 1,
            pageSize: 8,
        }).then(res => (this.navigation = res));
    },
};
</script>

<style scoped>
a {
    text-decoration: none;
}
* {
    font-size: 18px;
}
.header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
}
.header-title-png {
    margin: 0 20px;
    height: 30px;
}
</style>
