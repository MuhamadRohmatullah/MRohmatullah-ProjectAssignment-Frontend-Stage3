<template>
    <div class="card">
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Jumlah</th>
                        <th>harga</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in chartItem" :key="index">
                        <td>{{item.name}}</td>
                        <td></td>
                        <td>{{item.price}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <button class="btn btn-primary" @click="goBack()">Back</button>
</template>
<script>
import {mapGetters} from "vuex";
export default {
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    },
    computed:{
        ...mapGetters({
            chartItem : "getChart"
        })
    }
}
</script>