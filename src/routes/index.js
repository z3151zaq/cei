import VueRouter from 'vue-router';
import CourseView from '../pages/CourseView';
import CourseDetail from '../pages/CourseDetail';
import HelloTo from '../components/HelloTo.vue';
import BookView from '../pages/BookView';
import BookDetail from '../pages/BookDetail';

export default new VueRouter({
    routes: [
        {
            name: 'course',
            path: '/course/:id',
            component: CourseView,
            props: true,
        },
        {
            name: 'cdetail',
            path: '/cdetail',
            component: CourseDetail,
        },
        {
            name: 'book',
            path: '/book',
            component: BookView,
        },
        {
            name: 'bdetail',
            path: '/bdetail',
            component: BookDetail,
        },
        {
            path: '/',
            component: HelloTo,
        },
    ],
});
