import axios from "axios";
import { createStore } from "vuex";

export default createStore({

    state:{
        product:{},
        chart : []
    },
    getters:{
        getProduct(state){
            return state.product;
        },
        getChart(state){
            return state.chart;
        }
    },
    actions:{
        getDataProduct : async (context) =>{
            let response = await axios.get('api/getAllProduct');
            
            context.commit('ADD_PRODUCT', response.data);
        },
        addToChart(context, payload){
            context.commit('ADD_CHART', payload);

        }
    },
    mutations:{
        ADD_PRODUCT(state, payload){
            state.product = payload.data;
        },
        ADD_CHART(state, payload){
            state.chart.push(state.product[payload]);
            state.product[payload].stok-=1;
            
        }
    }

})