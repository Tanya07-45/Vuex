import { createApp } from 'vue';
import{ createStore} from 'vuex';//well create a vuex store which store our application state
import App from './App.vue';
//you can have only one store but you can have multiple state
const store = createStore({
 state(){ //bit like data in a component
     return{ //this is the state of our application so thi object hold the application wide data
 counter:0
     };
 },
 mutations:{
     increment(state){ 
        // setTimeout(function(){
            state.counter =state.counter + 1;//so now if we have to change our logic we'll simply change here
        // },2000)//this will work but this is a wrong pracice. so you have a better concept for working with asynchronous code which is "Actions"
       
     },
     increase(state,payload){//payload (name is upto you)can be anything string,number,object
       // this.$store.commit('increment');
        state.counter = state.counter + payload.value ; //want to increase by avalue which can be difened when this mutation is commited.
    
     }
 },
 action:{
     increment(context){
        setTimeout(function(){
      context.commit('increment' );
     },2000);
     },
     increase(context, payload){
         context.commit('increase' , payload);
     }
 },
 getters:{//every getter is a method right now.
     finalCounter(state){
      return state.counter * 2;//so we have to change a logic only in one place.
     },
     normalizedCounter(_ ,getters){ // i replace state with _
      // const finalCounter = state.counter * 2;
      const finalCounter = getters.finalCounter;
      if(finalCounter < 0){
           return 0;    
       }
       if(finalCounter > 100){
        return 100;
         }
         return finalCounter;
     }
 }
});
const app = createApp(App);
app.use(store);
app.mount('#app');
