<template>
 <div class="container-fluid">
    <div class="row">
        <div class="col-lg-5 col-md-4 col-sm-4 col-4">
            <font-awesome-icon id="back" icon="fa-solid fa-arrow-left-long" size="2xl" title="go back" @click="goBack()"/>
        </div>
        <div class="col-lg-7 col-md-8 col-sm-8 col-8 text-start fw-bold">
            <font-awesome-icon id="cart" icon="fa-solid fa-cart-shopping" size="2xl"/><span class="fs-2">Keranjang</span>
        </div>
    </div>
    
    <div class="card p-auto shadow-sm">
        <div class="card-body">
            <table class="table table-hover table-info">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Jumlah</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody v-for="(item, index) in chartItem" :key="index">
                    <tr v-if="item.qty != 0">
                        <td>{{item.name}}</td>
                        <td>{{item.price}}</td>
                        <td  class="ms-2">{{item.qty}}</td>
                        <td>{{item.price*item.qty}}</td>
                        <td><font-awesome-icon id="delete" icon="fa-solid fa-trash" size="xl" style="color: #d01616;"  @click="deleteCart(index)"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <bot/>

</div>
    
</template>
<script>
import {mapGetters} from "vuex";
export default {
    data(){
        return{
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        deleteCart(index){
            this.$store.dispatch('deleteCart', index);
            this.$store.dispatch('hitungTotal');
        }
    },
    computed:{
        ...mapGetters({
            chartItem : "getChart",
        })
    },
    created(){
        this.$store.dispatch('hitungTotal');
    }
}

</script>
<style scoped>

#delete:hover{
    cursor: pointer;
    width: 18px;
}

.total{
    color : rgb(42, 153, 245);
}

</style>