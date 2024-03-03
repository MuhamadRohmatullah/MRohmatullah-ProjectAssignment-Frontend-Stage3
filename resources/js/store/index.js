import axios from "axios";
import { createStore } from "vuex";

export default createStore({

    state:{
        product:{},
        chart : [],
        total: 0,
        tochart : 0,
        bill : {}
    },
    getters:{
        getProduct(state){
            return state.product;
        },
        getChart(state){
            return state.chart;
        },
        getTotal(state){
            return state.total;
        },
        getTocart(state){
            return state.tochart;
        },
        getBillPay(state){
            return state.bill;
        }
    },
    actions:{
        getDataProduct : async (context) =>{
            let response = await axios.get('api/getAllProduct');
            
            context.commit('ADD_PRODUCT', response.data);
        },
        addToChart(context, payload){

            context.commit('ADD_CART', payload);
        },
        deleteCart(context, payload){

            context.commit('DELETE_CART', payload);
        },
        hitungTotal(context){

            context.commit('TOTAL_PRICE');
        },
        billPay(context, payload){

            context.commit('GET_BILL', payload);
        }
    },
    mutations:{
        ADD_PRODUCT(state, payload){
            state.product = payload.data;

        },
        ADD_CART(state, payload){
            state.tochart += 1;
            let newcart = {
                id : state.product[payload].id,
                name : state.product[payload].name,
                qty : 1,
                price : state.product[payload].price
            }

            if(state.chart.length != 0){
                for(const el of state.chart){
                    var same = el.id == newcart.id;
                    if(same){
                        el.qty+=1;   
                    };
                };
                if(!same){
                    state.chart.push(newcart);
                }
            }else{
                state.chart.push(newcart);
            }

            state.product[payload].stok-=1;
            
        },
        DELETE_CART(state, payload){
            state.tochart -= 1;
            state.chart[payload].qty-=1;
            if(state.chart[payload].qty < 1){
                state.chart.splice(payload, 1);
            }
            
        },
        TOTAL_PRICE(state){
            for(const el of state.chart){
                    state.total = el.price*el.qty;
            }
             
        },
        GET_BILL(state, payload){
           state.bill = payload;
        }
    }

});