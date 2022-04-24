<template>
    <div class="t-container">
        <img :src="t.photoUrl" alt="t.teacherName" class="t-photo" />
        <div style="display: flex; flex-direction: column">
            <div class="t-name">{{ t.teacherName }}</div>
            <div class="t-title">{{ t.titleLevel }}</div>
            <div class="t-introduction">{{ t.introduction }}</div>
            <div class="t-homepage">老师主页</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeacherCard',
    props: ['t'],
};
</script>

<style>
.t-container {
    display: flex;
    align-items: center;
    width: 400px;
    height: 200px;
    padding: 10px;
    background-color: white;
    border-radius: 20px;
    cursor: pointer;
}
.t-container:hover {
    box-shadow: 3px 3px 1px #888888;
    transform: translateY(-2px);
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
    line-height: 18px;
    color: #999;
    width: 260px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    /* text-overflow: ellipsis; */
    -webkit-line-clamp: 4;
    margin: 0 0 6px 0;
    height: 72px;
}
.t-homepage {
    justify-content: end;
    color: #4aa1f0;
}
</style>
