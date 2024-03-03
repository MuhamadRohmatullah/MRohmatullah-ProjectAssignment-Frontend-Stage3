<template>
    
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
                <td>{{bill.nama}}</td>
              </tr>
              <tr>
                <td class="fw-bold pe-3">No Telpon</td>
                <td>{{bill.telepon}}</td>
              </tr>
              <tr>
                <td class="fw-bold pe-3">Alamat Pengiriman</td>
                <td>{{bill.alamat}}</td>
              </tr>
              <tr>
                <td class="fw-bold pe-3">Metode Pembayaran</td>
                <td>{{bill.metode}}</td>
              </tr>
            </table>
            </div>
            <div class="modal-footer">
                <buton class="btn btn-secondary" data-bs-dismiss="modal" text="Close"/>
                <buton class="btn btn-primary" text="proses" data-bs-toggle="modal" data-bs-target="#exampleModal2"/>
            </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">The End</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                 <h3 class="text-center">Terima Kasih Inosoft Bootcamp Batch 7</h3>
                 <p>Terima kasih sudah memberikan kesempatan untuk menambah ilmu dan pengalaman. terima kasih untuk para mentor yang sudah mengajarkan banyak hal.</p>
                 <p class="fw-bold">Muhamad Rohmatullah, peserta inosoft bootcamp Batch 7</p>
                 <p>Thank You</p>
            </div>
            <div class="modal-footer">
                <buton class="btn btn-secondary" data-bs-dismiss="modal" text="Close"/>
            </div>
            </div>
        </div>
    </div>

</template>
<script>

import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters({
        bill : 'getBillPay',
        total : 'getTotal'
    })
  }
}

</script>