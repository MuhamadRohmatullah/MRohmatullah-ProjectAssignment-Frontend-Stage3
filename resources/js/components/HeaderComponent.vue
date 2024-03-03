<template>

<nav class="navbar fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="#" @click="goToHome()"><font-awesome-icon icon="fa-solid fa-shop" size="xl" style="color: #ffffff;" /><span class="fs-3 fw-bold">noshop</span></a>
        <div id="chart" class="text-end me-3">
           <font-awesome-icon id="cart" icon="fa-solid fa-cart-shopping" size="xl" style="color: #ffffff;" @click="getToChart()"/>
           <span v-if="tochart>=1" class="count">{{tochart}}</span>
        </div>
    </div>
</nav>

</template>
<script>

import {mapGetters} from 'vuex';
export default {
    methods:{
        getToChart(){
            this.$router.push({name : "chart"});
        },
        goToHome(){
             this.$router.push({name : "home"});
        }
    },
    computed:{
        ...mapGetters({
            tochart : 'getTocart'
        })
    }
}

</script>
<style scoped>

#chart{
    width: 100px;
}

.btn{
    background-color: #03ff89;
    border: 0;
}

.navbar{
    background-color: #03ff89;
}

.count{
    color: white;
    font-weight: bold;
}

#cart{
   cursor: pointer;
}

#cart:hover{
    width: 23px;
}

span{
    color: white;
}

</style>