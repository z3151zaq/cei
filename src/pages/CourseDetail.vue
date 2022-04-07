<template>
    <div>
        <div style="display: flex; background-color: white">
            <div>
                <div style="position: relative; margin: 0px 50px 0px 30px">
                    <img class="preview" :src="detail.previewImgUrl" :alt="detail.productID" />
                    <img
                        style="width: 40px; position: absolute; bottom: 7px; right: 0px"
                        src="data:image/png;base64,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"
                        alt=""
                    />
                </div>
                <div>
                    <span>{{ detail.buyCount }}人购买</span>
                    <span>{{ detail.likeCount }}人喜欢</span>
                </div>
            </div>
            <div>
                <div>{{ detail.productName }}</div>
                <img src="@/assets/kecheng_vip_bg.png" alt="vip免费" />
                <div>价格：¥{{ detail.basicPrice.toFixed(2) }}</div>
                <div>
                    VIP:<span style="color: red">¥{{ detail.vipPrice }}</span>
                </div>
                <div>体系：{{ detail.parentSeriesName }}--{{ detail.seriesName }}</div>
                <div>教师：{{ detail.teacherName }}</div>
                <div>有效时长：{{ detail.authorizeDay }}天</div>
                <div style="display: flex">
                    <el-button type="danger">加入购物车</el-button>
                    <el-button type="primary">立即购买</el-button>
                </div>
            </div>
        </div>
        <el-tabs type="border-card" style="margin: 0px 40px">
            <el-tab-pane label="课程介绍" v-html="detail.webIntroduce">
                {{ detail.webIntroduce }}
            </el-tab-pane>
            <el-tab-pane label="评价">暂无评价</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Service from '../service/Service';
export default {
    name: 'CourseDetail',
    data() {
        return {
            detail: {},
        };
    },
    beforeMount() {
        Service.getCourseDetail({ productID: this.$route.query.id }).then(
            res => (this.detail = res)
        );
    },
    beforeUpdate() {
        Service.getCourseDetail({ productID: this.$route.query.id }).then(
            res => (this.detail = res)
        );
    },
};
</script>

<style scoped>
.preview {
    border-radius: 10px;
    width: 400px;
}
</style>
