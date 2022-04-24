<script setup>
import home from './components/home.vue'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCO-1zlqihZNJAGUqfbezRKdAbx2xVRurA",
    authDomain: "if-lost-159f6.firebaseapp.com",
    projectId: "if-lost-159f6",
    storageBucket: "if-lost-159f6.appspot.com",
    messagingSenderId: "55254413607",
    appId: "1:55254413607:web:2b14450ddb1a97bdccb902"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

</script>

<template>
  <div class="major-container">
    <div class="t-container">
    </div>
    <div class="m-container">
      <home/>
    </div>
    <div class="b-container"></div>
  </div>
</template>
<style>
</style>
