import VueRouter from 'vue-router';
import CourseView from '../pages/CourseView';

export default new VueRouter({
    routes: [
        {
            path: '/course',
            component: CourseView,
        },
    ],
});
