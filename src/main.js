import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入rem.js，实现手机端的适配方案
//设计的是屏幕全局是7.5rem，针对的是750px宽度的设计稿，100px就是1rem
//实际的web浏览器上查看就是1rem=50px
import "@/common/js/rem.js"

//浏览器样式格式化（手机端）
import "@/common/css/reset.css"

//导入图标
import "@/common/css/iconfont/iconfont.css";

//导入全局的路由守卫
import "./permission.js";

//导入自定义校验数据
import rules from './common/js/rules';

Vue.prototype.$rules = rules;

//在Vue对象上全局注册一些自定义方法
import backbase from './common/js/backbase';

Vue.use(backbase);

//全局引入：导入vant的ui组件库--全局引入（缺点引入的包很大，导致打开程序很慢，尤其是手机端网速不行的时候）
//import Vant from 'vant';
//import 'vant/lib/index.css';
//Vue.use(Vant);

//按需引入：打包少，程序运行速度会变快
//使用babel-plugin-import实现按需引入，配置babel.config.js文件
import {
    Button,
    Row,
    Col,
    Swipe,
    SwipeItem,
    Lazyload,
    List,
    Field,
    NavBar,
    Toast,
    Notify,
    Form,
    Tab,
    Tabs,
    PullRefresh,
    Stepper,
    Tabbar,
    TabbarItem
} from "vant";

Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List).use(Field).use(NavBar).use(Toast).use(Notify).use(Form)
    .use(Tab).use(Tabs).use(PullRefresh).use(Stepper).use(Tabbar).use(TabbarItem);

//导入api接口
import api from './api/index';

Vue.prototype.$api = api;

//引入vue-awesome-swiper的使用,全局使用（如果只是某个页面使用的话，就在那个页面引入就可以了）
//import VueAwesomeSwiper from 'vue-awesome-swiper'
//import 'swiper/dist/css/swiper.css'
//Vue.use(VueAwesomeSwiper);

//引入全局过滤器
import * as filters from './common/js/filter.js'

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});

//全局使用自定义的UI的组件
import GUI from './components/plugins';

Vue.use(GUI);


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
