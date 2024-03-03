import ChartComponent from "./components/ChartComponent.vue";
import PaymentComponent from "./components/Payment.vue";
import MainPageComponent from "./components/MainPageComponent.vue";

export const routes = [

    {
        path : "/",
        name : "home",
        component : MainPageComponent
    },
    {
        path : "/chart",
        name : "chart",
        component: ChartComponent
    },
    {
        path : "/payment",
        name : "payment",
        component: PaymentComponent
    }

];