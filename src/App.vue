<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO COMPONENTI 
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Loading from './components/Loading.vue';
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
    Loading
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
    <div class="button" @click="loadMore()" v-if="LoadmoreContentStatus === false">
      <div>LOAD MORE</div>
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
<style lang="scss">
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  div {
    background-color: rgb(54, 54, 54);
    color: white;
    padding: 20px 30px;
    font-size: 34px;
    font-weight: bolder;
    border-radius: 50px;
    cursor: pointer;

    &:hover {
      background-color: rgb(31, 31, 31);
    }
  }
}
</style>
