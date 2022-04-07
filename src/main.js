import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import { Button, Select, Loading, MessageBox, Message, Notification, Tabs } from 'element-ui';
import VueRouter from 'vue-router';
import router from './routes';
import store from './store';

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.use(VueRouter);
// Vue.use(Button);
// Vue.use(Select);
// Vue.use(Tabs);
// Vue.use(Loading.directive);

// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');
