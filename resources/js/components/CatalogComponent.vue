<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <top/>
                
            </div>
        </div>

        <div class="row mt-5">
            <div v-for="(list, index) in foodList" :key="index" class="col-sm-6 col-md-4 col-lg-3">
                <div class="card text-center mt-5 shadow-sm">
                    <div class="card-body">
                            <h5 class="fw-bold">{{list.name}}</h5>
                            <h6>{{list.description}}</h6>
                    </div>
                    <div class="card-footer">
                        <h6>Stok : {{list.stok}}</h6>
                        <h6 :class="list.stok == 0 ? 'sold' : ''">Rp.{{list.price}}</h6>
                        <button v-if="list.stok != 0" @click="addChart(index)" class="btn btn-success" id="chrt">
                            <font-awesome-icon  icon="fa-solid fa-cart-plus" size="xl" id="addcart"/>
                        </button>
                        <buton v-else class="btn btn-danger" text="Sold Out"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import{mapGetters} from 'vuex';

export default {
    data(){
        return{

        }
    },
    methods:{
        addChart(index){
            this.$store.dispatch("addToChart", index);
        }
    },
    computed:{
        ...mapGetters({
            foodList : 'getProduct',
            tochart : 'getTocart'
        }),
    },
    created(){
        this.$store.dispatch('getDataProduct'); 
    }
}
</script>
<style scoped>

.sold{
    text-decoration: line-through;
    color: rgb(97, 97, 97) !important;
}

.card{
    border-radius: 0;
    width: 100%;
    height: 220px;
}

#addcart{
    color: #ffffff;
    cursor: pointer;
}

.btn{
    border-radius: 0;
}

#chrt{
    background-color: rgb(27, 245, 125);
    border: 0;
}

#chrt:hover{
    background-color: rgba(41, 245, 133, 0.596);
}

*{
    font-family: "Fira Sans Extra Condensed", sans-serif;
    box-sizing: border-box;
}

</style>