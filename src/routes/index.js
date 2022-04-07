import VueRouter from 'vue-router';
import CourseView from '../pages/CourseView';
import CourseDetail from '../pages/CourseDetail';
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
            name: 'cdetail',
            path: '/cdetail',
            component: CourseDetail,
        },
        {
            path: '/',
            component: HelloTo,
        },
    ],
});
