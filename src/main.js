import { init } from './routers/index.js';

const configInitial = () => {
  init();
  const firebaseConfig = {

    apiKey: 'AIzaSyBQhtaC_rN3MsIJTc_tCLTeuJ0_UmnQ5QI',
    authDomain: 'red-social-27013.firebaseapp.com',
    databaseURL: 'https://red-social-27013.firebaseio.com',
    projectId: 'red-social-27013',
    storageBucket: 'red-social-27013.appspot.com',
    messagingSenderId: '319114136619',
    appId: '1:319114136619:web:69f2fba6c2cd9945c46e6e',
    measurementId: 'G-BFXHVK1WLS',
  };
  firebase.initializeApp(firebaseConfig);
};
window.addEventListener('load', configInitial);
