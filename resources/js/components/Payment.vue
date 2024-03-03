<template>

<div class="container"> 

    <div class="row">
        <div class="col-3 col-md-4 col-lg-4">
            <font-awesome-icon id="back" icon="fa-solid fa-arrow-left-long" size="2xl" title="go back" @click="goBack()"/>
        </div>
        <div class="col-7 col-md-8 col-lg-8 text-start">
            <h4>Informasi pembayaran</h4>
        </div>
    </div>
    
    <div class="card">
        <div class="card-body text-center">
            <div class="row">
                <div class="col text-start">
                    <h5>Total Bayar</h5>
                </div>
                <div class="col text-end fw-bold">
                    <span v-if="total > 1">{{ total }}</span>
                </div>
            </div>
            <div class="row">
                <div class="col text-start mb-2">
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nama penerima" v-model="nama">
                </div>
            </div>
            <div class="row">
                <div class="col text-start mb-2">
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="No Telpon" v-model="telepon">
                </div>
            </div>
            <div class="row">
                <div class="col">
                        <textarea class="form-control" placeholder="Alamat" id="floatingTextarea" v-model="alamat"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col text-start">
                   <label for="#bayar">Metode Pembayaran :</label>
                   <select v-model="metode" class="form-select form-select mb-3 mt-2" aria-label="Large select example" id="bayar">
                    <option value="Transfer Bank">Transfer Bank</option>
                    <option value="Bayar Di Tempat">Bayar Di Tempat</option>
                    <option value="Ewallet">Ewallet</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col text-end">
                    <div class="col">
                    <button @click="getPay()" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-success">
                           <font-awesome-icon icon="fa-solid fa-money-check" size="lg"/>
                           Bayar
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <banner/>

    <warning/>

</div>

</template>
<script>

import { mapGetters } from 'vuex';
export default {
   data(){
        return{
            nama: "",
            telepon :"",
            alamat: "",
            metode:""
        }
   },
   methods:{
        goBack(){
             this.$router.go(-1);
        },
        getPay(){
            let bill = {
                nama : this.nama,
                telepon : this.telepon,
                alamat : this.alamat,
                metode : this.metode
            }
            this.$store.dispatch('billPay', bill);
        }
   },
   computed:{
      ...mapGetters({
        total : "getTotal"
      })
   }
}

</script>
<style scoped>

.form-control, .form-select{
    border-radius: 0;
}

.btn{
    border-radius: 0;
}

</style>