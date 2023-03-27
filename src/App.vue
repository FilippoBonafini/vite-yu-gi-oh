<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO COMPONENTI 
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Loading from './components/Loading.vue';
import LoadMoreButton from './components/LoadMoreButton.vue';
// IMPORTIAMO AXIOS 
import axios from 'axios';
// IMPORTIAMO LO STORE 
import { store } from './store';

export default {
  name: 'App',
  // DICHIARIAMO I COMPONENTI 
  components: {
    AppHeader,
    AppMain,
    Loading,
    LoadMoreButton
  },
  data() {
    return {
      store,
      loadPoint: 20,
      loadPageStatus: true,
      LoadmoreContentStatus: false
    }
  },
  methods: {
    loadMore() {
      this.loadPoint += 20
      this.call()
      this.LoadmoreContentStatus = true
    },
    call() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        .then((response) => {
          this.store.cards = response.data.data;
          this.store.lengthSearch = this.store.cards.length
          this.store.cards.length = this.loadPoint
          this.loadPageStatus = false
          this.LoadmoreContentStatus = false
        })
    }
  },
  created() {
    this.call()
  }
}
</script>

<!-- HTML -->
<template>
  <AppHeader />
  <div v-if="loadPageStatus === false">
    <AppMain />
    <div @click="loadMore()" v-if="LoadmoreContentStatus === false">
      <LoadMoreButton />
    </div>
    <div v-else>
      <Loading />
    </div>
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<!-- CSS  -->
<style lang="scss"></style>
