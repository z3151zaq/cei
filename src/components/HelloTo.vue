<template>
    <div>
        <router-link
            v-for="path in paths"
            :key="path.id"
            :to="{
                name: 'course',
                params: {
                    id: path.id,
                },
            }"
            >{{ path.param }}
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'HelloTo',
    data() {
        return {
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
};
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
}
</style>
