import Vue from "vue";
import VueRouter from "vue-router";
import BoardGameList from "./components/BoardGameList.vue";
import Carcassonne from "./components/BoardGame/Carcassonne.vue";
import Catan from './components/BoardGame/Catan.vue'
import Deception from './components/BoardGame/Deception.vue'
import Jaws from './components/BoardGame/Jaws.vue'
import MansionsOfMadness from './components/BoardGame/MansionsOfMadness.vue'
import Pandemic from './components/BoardGame/Pandemic.vue'


Vue.use(VueRouter);
const routes = [
  { path: "/", redirect: "/home" }, //เมื่อมีpathที่ชื่อ/เข้ามาจะทำการเปลี่ยนเป็นpath /home
  {
    name: "Cards",
    path: "/home",  //กำหนดpathที่จะเข้าไป
    component: BoardGameList, //เมื่อมีpathที่ชื่อตรงตามด้านบนจะเปลี่ยนไปที่หน้าตามที่เราเก็บไว้ในที่นี้คือ BoardGameList ตามที่เราได้importไว้
  }, //ซึ่งในไฟร์ที่routeทั้งหมดจะเป็นหน้าที่เขียนแบบhardcodeเพื่อไว้แสดงในการเชื่อมpath
  {
    path: "/carcassonne",
    name: "carcassonne",
    component: Carcassonne,
  },
  {
    path: "/catan",
    name: "catan",
    component: Catan,
  },
  {
    path: "/deception",
    name: "deception",
    component: Deception,
  },
  {
    path: "/jaws",
    name: "jaws",
    component: Jaws,
  },
  {
    path: "/mansions",
    name: "mansions",
    component: MansionsOfMadness,
  },
  {
    path: "/pandemic",
    name: "pandemic",
    component: Pandemic,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
