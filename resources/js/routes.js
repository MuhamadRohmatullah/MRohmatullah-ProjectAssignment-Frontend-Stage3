import CatalogComponent from "./components/CatalogComponent.vue";
import ChartComponent from "./components/ChartComponent.vue";

export const routes = [

    {
        path : "/",
        name : "home",
        component : CatalogComponent
    },
    {
        path : "/chart",
        name : "chart",
        component: ChartComponent
    }

];