/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import store from './store';
import { createRouter, createWebHistory } from 'vue-router';
import {routes} from './routes';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faCartPlus, faShop, faTrash, faArrowLeftLong, faMoneyCheck} from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});
const router = createRouter({
    history : createWebHistory(),
    routes
});

library.add(faShoppingCart, faCartPlus, faShop, faTrash, faArrowLeftLong, faSquareCheck, faMoneyCheck);
app.component('font-awesome-icon', FontAwesomeIcon);

import ExampleComponent from './components/ExampleComponent.vue';
app.component('example-component', ExampleComponent);

import CatalogComponent from "./components/CatalogComponent.vue";
app.component('catalog', CatalogComponent);

import ChartComponent from "./components/ChartComponent.vue";
app.component('chartt', ChartComponent);

import PaymentComponent from "./components/Payment.vue";
app.component('payment', PaymentComponent);

import ButtonComponent from "./components/ButtonComponent.vue";
app.component('buton', ButtonComponent);

import HeaderComponent from "./components/HeaderComponent.vue";
app.component('top', HeaderComponent);

import ModalComponent from "./components/ModalComponent.vue";
app.component('warning', ModalComponent);

import FooterComponent from "./components/FooterChartComponent.vue";
app.component('bot', FooterComponent);

import BannerComponent from "./components/BannerComponent.vue";
app.component('banner', BannerComponent);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.use(store);
app.use(router);
app.mount('#app');
