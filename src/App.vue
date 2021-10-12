<template>
  <base-container title="Vuex">
  <!--  $store this property point at the vuex store and state property points at the state managed by the store -->
  <h3>{{ $store.state.counter }}</h3>
  <button>Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
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