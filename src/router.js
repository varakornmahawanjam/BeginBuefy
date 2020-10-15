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
  { path: "/", redirect: "/home" },
  {
    name: "Cards",
    path: "/home",
    component: BoardGameList,
  },
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
