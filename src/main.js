import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import HomePage from "./components/pages/HomePage";
import PrivacyPage from "./components/pages/PrivacyPage";
import ColorsPage from "./components/pages/ColorsPage";
import VueRouter from "vue-router";
import { library } from '@fortawesome/fontawesome-svg-core'
import { ColorPlugin } from "./ColorPlugin";
import ThemePage from "./components/pages/ThemePage";
import CreditPage from "./components/pages/credit/CreditPage";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopyright } from "@fortawesome/free-regular-svg-icons/faCopyright";
import { faGitlab } from "@fortawesome/free-brands-svg-icons/faGitlab";
import Contributors from "./components/pages/credit/Contributors";
import Libraries from "./components/pages/credit/Libraries";

Vue.config.productionTip = false;

library.add(
  faCopyright,
  faGithub,
  faGitlab,
  faYoutube,
  faInstagram
);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter);
Vue.use(ColorPlugin);
Vue.use(Vuex);

/** The routes to different pages of the application. */
const routes = [
  { path: '/', component: HomePage },
  { path: '/colors', component: ColorsPage },
  { path: '/privacy', component: PrivacyPage },
  { path: '/theme', component: ThemePage },
  {
    path: '/credit',
    component: CreditPage,
    children: [
      {
        path: 'contributors',
        component: Contributors
      },
      {
        path: 'libraries',
        component: Libraries
      }
    ]
  }
];

/** The actual router. */
const router = new VueRouter({
  routes
});


const store = new Vuex.Store({
  state: {
    currentTheme: localStorage.getItem('theme')
  },
  mutations: {
    setTheme(state, newTheme) {
      state.currentTheme = newTheme;
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');




