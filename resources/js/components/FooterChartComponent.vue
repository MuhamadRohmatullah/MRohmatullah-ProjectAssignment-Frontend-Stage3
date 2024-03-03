<template>
    <div class="fixed-bottom">
        <div class="card shadow-sm" id="footer">
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <h4>Total <span v-if="total != 0" class="fw-normal total"> {{total}}</span></h4>
                    </div>
                    <div class="col text-end">
                        <button class="btn btn-warning" @click="goToPayment()"><font-awesome-icon icon="fa-regular fa-square-check" size="xl" style="color: #0a0a0a;" /><span class="fw-bold"> Checkout</span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import {mapGetters} from 'vuex';
export default {
    methods:{
        goToPayment(){
           this.$router.push({name : "payment"});
        }
    },
    computed:{
        ...mapGetters({
           total : "getTotal"
        })
         
    }
}

</script>