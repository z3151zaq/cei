import VueRouter from 'vue-router';
import CourseView from '../pages/CourseView';
import HelloTo from '../components/HelloTo.vue';

export default new VueRouter({
    routes: [
        {
            name: 'course',
            path: '/course',
            component: CourseView,
            props: true,
        },
        {
            path: '/',
            component: HelloTo,
        },
    ],
});
