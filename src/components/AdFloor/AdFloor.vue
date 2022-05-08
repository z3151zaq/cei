<template>
    <div class="floor-container">
        <!-- 主体 -->
        <el-row :gutter="20">
            <el-col :span="6">
                <img
                    v-for="image in floor.leftAdvertisementList"
                    :src="image.imageUrl"
                    :alt="image.advertisementName"
                    :key="image.advertisementID"
                />
            </el-col>
            <el-col :span="18" class="child-floor">
                <div class="center-container">
                    <CourseRecom :floorID="floor.floorID" :floorName='floor.floorName'/>
                </div>
                <div class="side-container">
                    <div>
                        <div class="side-title">
                            <div style="width: 10px; height: 10px; background-color: blue"></div>
                            <div>热门资讯</div>
                            <a href="/#/newshome">更多&gt;</a>
                        </div>
                        <div
                            v-for="info in floor.informationList.slice(0, 2)"
                            :key="info.informationID"
                        >
                            {{ info.introduce }}
                            {{ info.updateTime }}
                        </div>
                    </div>
                    <div>
                        <div class="side-title">
                            <div style="width: 10px; height: 10px; background-color: blue"></div>
                            <div>热门问答</div>
                            <a href="/#/teacher">更多&gt;</a>
                        </div>
                        <div v-for="qa in floor.askList.slice(0, 1)" :key="qa.answerID">
                            {{ qa.title }}
                            <div v-html="qa.answerText"></div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>

        <!-- 底部广告栏 -->
        <el-row :gutter="20">
            <el-col
                :span="12"
                v-for="image in floor.downAdvertisementList"
                :key="image.advertisementID"
            >
                <img :src="image.imageUrl" :alt="image.advertisementName" />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import CourseRecom from './CourseRecom';
export default {
    name: 'AdFloor',
    components: {
        CourseRecom,
    },
    props: ['floor'],
};
</script>

<style scoped>
.floor-container {
    margin: 10px auto;
    width: 1000px;
}
.child-floor {
    display: flex;
}
img {
    border-radius: 10px;
    width: auto;
}
.center-container {
    width: 67%;
}
.side-container {
    width: 33%;
}
.side-title {
    display: flex;
    align-items: center;
}
</style>
