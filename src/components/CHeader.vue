<template>
    <div>
        <div>全部课程</div>
        <el-cascader
            v-model="value"
            :options="option"
            :props="{ expandTrigger: 'hover', checkStrictly: true }"
            @change="handleChange"
        >
        </el-cascader>
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
                    path: '/course',
                    params: {
                        id: value[0],
                    },
                });
            }
        },
    },
    computed: {
        option() {
            const option = this.navigation.map(navi => ({
                value: navi.navigationID,
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
    created() {
        Service.getNavigationList({
            pageNo: 1,
            pageSize: 8,
        }).then(res => (this.navigation = res));
    },
};
</script>

<style></style>
