import { createApp } from 'vue';
import{ createStore} from 'vuex';//well create a vuex store which store our application state
import App from './App.vue';
//you can have only one store but you can have multiple state
const store =createStore({
 state(){ //bit like data in a component
     return{ //this is the state of our application so thi object hold the application wide data
 counter:0
     };
 },
 mutations:{
     increment(state){ //takes an object where you can define methods
        //it automatically get the current state as an argument,this is guranteed by vuex.
        state.counter =state.counter + 1;//so now if we have to change our logic we'll simply change here
     }
 }
});
const app = createApp(App);
app.use(store);
app.mount('#app');
