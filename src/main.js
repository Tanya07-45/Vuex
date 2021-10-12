import { createApp } from 'vue';
import{ createStore} from 'vuex';//well create a vuex store which store our application state
import App from './App.vue';
//you can have only one store but you can have multiple state
const store =createStore({
 state(){ //bit like data in a component
     return{ //this is the state of our application so thi object hold the application wide data
 counter:0
     };
 }
});
const app = createApp(App);
app.use(store);
app.mount('#app');
