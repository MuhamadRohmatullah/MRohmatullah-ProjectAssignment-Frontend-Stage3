<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <button class="btn btn-success" @click="getToChart()">Chart</button>
            </div>
        </div>

        <div class="row">
            <div v-for="(list, index) in foodList" :key="index" class="col">
                <div class="card text-center">
                    <div class="card-body">
                            <h5>{{list.name}}</h5>
                            <h6>{{list.description}}</h6>
                    </div>
                    <div class="card-footer">
                        <h6>Stok : {{list.stok}}</h6>
                        <h6 :class="list.stok == 0 ? 'sold' : ''">Rp.{{list.price}}</h6>
                        <button v-if="list.stok != 0" class="btn btn-primary" @click="addChart(index)">Add To Chart</button>
                        <button v-else class="btn btn-danger">SoldOut</button>
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
        getToChart(){
            this.$router.push({name : "chart"});
        },
        addChart(index){
            this.$store.dispatch("addToChart", index);
        }
    },
    computed:{
        ...mapGetters({
            foodList : 'getProduct'
        })
    },
    created(){
         this.$store.dispatch('getDataProduct');
    }
}
</script>
<style>

.sold{
    text-decoration: line-through;
    color: rgb(97, 97, 97) !important;
}

</style>