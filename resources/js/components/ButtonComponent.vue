<template>
    <button class="btn" @click="funClick()">{{text}}</button>
</template>
<script>
export default {
    emits:['emits-click'],
    props:{
        text:{
            type: String,
            default: ""
        }
    },
    methods:{
        funClick(){
            this.$emit('emits-click');
        }
    }
}
</script>
<style scoped>
.btn{
    border-radius: 0;
}
</style>