<template>
    <button @click="addOne">Add 1</button>
</template>
<script>
export default {
    methods:{
        addOne(){
           // this.$store.state.counter++;
           this.$store.commit('increment'); //it is abuilt in method which vuex give you on its store it takes the name of the mutation you want to perform
        }
    }
}
</script>