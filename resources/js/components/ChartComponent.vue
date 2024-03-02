<template>
 <div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col text-center fw-bold">
             <font-awesome-icon id="cart" icon="fa-solid fa-cart-shopping" size="2xl"/><span class="fs-2">Keranjang</span>
        </div>
    </div>
    <font-awesome-icon id="back" icon="fa-solid fa-arrow-left-long" size="xl" title="go back" @click="goBack()"/>
   
    <div class="card p-auto shadow-sm">
        <div class="card-body">
            <table class="table table-hover table-info">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Jumlah</th>
                        <th>harga</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody v-for="(item, index) in chartItem" :key="index">
                    <tr v-if="item.qty != 0">
                        <td>{{item.name}}</td>
                        <td>{{item.qty}}</td>
                        <td>{{item.price*item.qty}}</td>
                        <td><font-awesome-icon id="delete" icon="fa-solid fa-trash" size="xl" style="color: #d01616;"  @click="deleteCart(index)"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    <div class="fixed-bottom">
        <div class="card shadow-sm" id="footer">
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <h4>Total <span v-if="total != 0">: {{total}}</span></h4>
                    </div>
                    <div class="col text-end">
                        
                        <button class="btn btn-warning" @click="goToPayment()"><font-awesome-icon icon="fa-regular fa-square-check" size="xl" style="color: #0a0a0a;" /><span class="fw-bold"> Checkout</span></button>
                    </div>
                </div>
            </div>
        </div>



    </div>
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
        },
        goToPayment(){
           this.$router.push({name : "payment"});
        }

    },
    computed:{
        ...mapGetters({
            chartItem : "getChart",
            total : "getTotal"
        })
    },
    created(){
        this.$store.dispatch('hitungTotal');
    }
}
</script>
<style scoped>

*{
    font-family: "Fira Sans Extra Condensed", sans-serif;
    box-sizing: border-box;
}


#delete:hover{
    cursor: pointer;
    width: 18px;
}

.card{
    border-radius: 0;
}

#back{
    width: 30px;
    cursor: pointer;
}

#back:hover{
    color: rgb(133, 133, 130);
}

</style>