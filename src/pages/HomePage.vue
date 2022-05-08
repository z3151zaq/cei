<template>
    <div>
        <el-carousel trigger="click" height="400px">
            <el-carousel-item v-for="item in 4" :key="item" label="轮播图">
                <img
                    class="carousel-img"
                    src="https://data.cei.net.cn/images/product/1600147595981.jpg"
                    alt="轮播图"
                />
            </el-carousel-item>
        </el-carousel>
        <div style="width: 80%; margin: 0 auto">
            <AdFloor v-for="floor in floorList" :floor="floor" :key="floor.floorID" />
            <TrainMap />
        </div>
    </div>
</template>

<script>
import TrainMap from '../components/TrainMap.vue';
import AdFloor from '@/components/AdFloor/AdFloor.vue';
import Service from '@/service/Service';
export default {
    name: 'HomePage',
    components: { TrainMap, AdFloor },
    data() {
        return {
            floorList: [],
            paths: [
                {
                    id: 1,
                    param: '环境执法',
                },
                {
                    id: 2,
                    param: '环境监测',
                },
            ],
        };
    },
    methods: {
        toCourse() {
            this.$router.push('course');
        },
    },
    mounted() {
        Service.searchHomeFloorList().then(res => (this.floorList = res));
    },
};
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
}
/* .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    background: url('https://data.cei.net.cn/images/product/1600147595981.jpg');
} */
.small {
    text-align: center;
}
.carousel-img {
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    margin: 0 auto;
}
</style>
