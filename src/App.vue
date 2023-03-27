<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO COMPONENTI 
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
// IMPORTIAMO AXIOS 
import axios from 'axios';
// IMPORTIAMO LO STORE 
import { store } from './store';

export default {
  name: 'App',
  // DICHIARIAMO I COMPONENTI 
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  created() {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then((response) => {
        console.log(response.data.data)
        this.store.cards = response.data.data;
      })
  }
}
</script>

<!-- HTML -->
<template>
  <AppHeader />
  <AppMain />
</template>

<!-- CSS  -->
<style lang="scss"></style>
