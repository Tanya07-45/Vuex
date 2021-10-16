<template>
    <h3>{{ counter }}</h3>
</template>
<script>
export default {
      computed:{
       counter(){
       return  this.$store.getters.finalCounter;//we are duplicating logic here so we didnt talk directly to the state instead we use a concept called getters.
         }
  },
}
</script>