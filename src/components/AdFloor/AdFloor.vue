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
            <el-col :span="12">
                <div>{{ floor.floorID }}</div>
            </el-col>
            <el-col :span="6">
                <div>{{ floor.floorID }}</div>
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
export default {
    name: 'AdFloor',
    props: ['floor'],
};
</script>

<style scoped>
.floor-container {
    margin: 10px auto;
    width: 1000px;
}
img {
    border-radius: 10px;
    width: auto;
}
</style>
