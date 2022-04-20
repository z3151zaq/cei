<template>
    <div class="t-container">
        <img :src="t.photoUrl" alt="t.teacherName" class="t-photo" />
        <div>
            <div class="t-name">{{ t.teacherName }}</div>
            <div class="t-title">{{ t.titleLevel }}</div>
            <div class="t-introduction">{{ t.introduction }}</div>
            <div>老师主页</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeacherCard',
    data() {
        return {
            t: {
                categoryName: '环境执法',
                introduction:
                    '1985毕业于河北化工学院环境工程系环境保护专业，同年到沧州市环境监测站工作，1993年成立沧州市环境执法支队后到执法支队工作。2018年2月退休。 河北省沧州市环境执法支队原副支队长，高级工程师 ， 从事环保执法工作30多年，获得环保部从事环保工作30年工作纪念章，环保部环境执法岗位培训师资，获得河北省环保执法标兵，沧州市执法标兵，沧州市“三八”红旗手等荣誉称号。积累了丰富的一线执法经验，喜欢将自己的经验分享给环保工作者，曾为环保部环监局、河北省环监局环保执法岗位培训多次授课。',
                photoUrl: 'https://data.cei.net.cn/images/teacher/big/1618991070725.jpg',
                teacherCategoryID: 1,
                teacherID: 105,
                teacherName: '吴振兰',
                titleLevel: '原河北省沧州市环境执法支队副支队长',
            },
        };
    },
};
</script>

<style>
.t-container {
    display: flex;
    width: 400px;
    height: 200px;
    padding: 10px;
    background-color: white;
    border-radius: 20px;
}
.t-photo {
    width: 140px;
    height: 180px;
    border-radius: 20px;
}
.t-name {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 0 0 6px 0;
}
.t-title {
    font-size: 14px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    /* text-overflow: ellipsis; */
    -webkit-line-clamp: 2;
    margin: 0 0 6px 0;
}
.t-introduction {
    font-size: 13px;
    color: #999;
    width: 260px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    /* text-overflow: ellipsis; */
    -webkit-line-clamp: 4;
    margin: 0 0 6px 0;
}
</style>
