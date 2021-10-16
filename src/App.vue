<template>
  <base-container title="Vuex">
  <!--  $store this property point at the vuex store and state property points at the state managed by the store -->
  <the-counter></the-counter>
  <favourite-value></favourite-value> 
  <button @click ="addOne">Add 10</button>
  <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from "./components/TheCounter.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavouriteValue from './components/FavouriteValue.vue';
export default {
 components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue
  },

  methods:{
    addOne(){//payload extra data can be passed
  // this.$store.commit('increase',{ value:10 });// we can also use dispatch
  this.$store.dispatch({
    type: 'increase',
    value:10
  });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>