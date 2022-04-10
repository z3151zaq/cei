<template>
    <div style="display: flex; align-items: center">
        <el-cascader
            ref="courseCascader"
            v-model="value"
            :options="option"
            :props="{ expandTrigger: 'hover', checkStrictly: true }"
            @change="handleChange"
        >
        </el-cascader>
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
        <span>下载APP</span>
        <span>登录/注册</span>
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
</style>
