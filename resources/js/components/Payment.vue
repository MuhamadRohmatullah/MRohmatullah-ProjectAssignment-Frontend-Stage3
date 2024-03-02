<template>

<div class="container">   
    <div class="card">
        <div class="card-body text-center">
            <div class="row">
                <div class="col text-start">
                    <h5>Total Bayar:</h5>
                </div>
                <div class="col text-end fw-bold">
                    {{ total }}
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
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" v-model="alamat"></textarea>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                   <select class="form-select form-select-lg mb-3 mt-2" aria-label="Large select example" v-model="metode">
                    <option selected>Metode Pembayaran</option>
                    <option value="Transfer Bank">Transfer Bank</option>
                    <option value="Bayar Di Tempat">Bayar Di Tempat</option>
                    <option value="Ewallet">Ewallet</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col text-end">
                    <div class="col">
                        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Bayar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Detail Pembayaran</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <table>
              <tr>
                <td class="fw-bold pe-3">Total Bayar</td>
                <td v-if="total != 0">{{total}}</td>
              </tr>
              <tr>
                <td class="fw-bold pe-3">Nama Penerima</td>
                <td>{{nama}}</td>
              </tr>
              <tr>
                <td class="fw-bold pe-3">No Telpon</td>
                <td>{{telepon}}</td>
              </tr>
              <tr>
                <td class="fw-bold pe-3">Alamat Pengiriman</td>
                <td>{{alamat}}</td>
              </tr>
              <tr>
                <td class="fw-bold pe-3">Metode Pembayaran</td>
                <td>{{metode}}</td>
              </tr>
            </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Proses</button>
            </div>
            </div>
        </div>
    </div>


    <button @click="goBack()" class="btn btn-primary">Back</button>
</div>

</template>
<script>
import { mapGetters } from 'vuex'

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
        }
   },
   computed:{
      ...mapGetters({
        total : "getTotal"
      })
   }
}
</script>