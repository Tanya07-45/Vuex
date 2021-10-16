<template>
    <h3>{{ counter }}</h3>
    <p> WE DO MORE...</p>
</template>
<script>
export default {
      computed:{
       counter(){
       return  this.$store.getters.normalizedCounter;
         }
  },
}
</script>