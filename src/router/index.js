import { createRouter, createWebHistory } from "vue-router";
import HomeApp from "../views/HomeApp.vue";
import SaddlingCalculator from "@/views/calculators/SaddlingCalculator.vue";

const routes = [
  { path: "/", name: "home", component: HomeApp },
  { path: "/saddling", name: "saddling", component: SaddlingCalculator },
  { path: "/enchantments", name: "enchantments", component: SaddlingCalculator },
  { path: "/factions", name: "factions", component: SaddlingCalculator },
  { path: "/breeding", name: "breeding", component: SaddlingCalculator },
  { path: "/crop", name: "crop", component: SaddlingCalculator },
  { path: "/power_fishing", name: "power_fishing", component: SaddlingCalculator },
  { path: "/kitchen", name: "kitchen", component: SaddlingCalculator },
  { path: "/refining_fame", name: "refining_fame", component: SaddlingCalculator },
  { path: "/fishing", name: "fishing", component: SaddlingCalculator },
  { path: "/artifacts", name: "artifacts", component: SaddlingCalculator },
  { path: "/refining", name: "refining", component: SaddlingCalculator },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
