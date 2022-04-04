import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { initializeApp } from "firebase/app";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCt3sTbWmLKTINjjEsm0saTOyqHiB8tDVA",
    authDomain: "prueba-alfaweb-fdab1.firebaseapp.com",
    projectId: "prueba-alfaweb-fdab1",
    storageBucket: "prueba-alfaweb-fdab1.appspot.com",
    messagingSenderId: "1099198930628",
    appId: "1:1099198930628:web:0b502c1cd976b7b469f391"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')