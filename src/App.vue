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
      LoadmoreContentStatus: false,
      loadButton: true
    }
  },
  methods: {
    loadMore() {
      this.loadPoint += 20
      this.callCards()
      this.LoadmoreContentStatus = true
    },
    callCards() {
      axios.get(this.store.apiCards, {
        params: {
          archetype: store.searchKey
        }
      })
        .then((response) => {
          this.loadPageStatus = true
          this.store.cards = response.data.data;
          this.store.lengthSearch = this.store.cards.length
          if (this.store.cards.length >= this.loadPoint) {
            this.store.cards.length = this.loadPoint
            this.loadButton = true
          } else {
            this.loadButton = false
          }
          this.loadPageStatus = false
          this.LoadmoreContentStatus = false
        })
        .catch((error) => {
          console.log(error)
          this.store.characters = []
          this.store.charactersFound = 0
          this.loadPageStatus = false
          this.loadButton = false
        }
        )
    },
    callArchetipe() {
      axios.get(this.store.apiArchetipe)
        .then((response) => {
          this.store.archetipe = response.data
          console.log(this.store.archetipe)
        })
    }
  },
  created() {
    this.callCards()
    this.callArchetipe()
  }
}
</script>

<!-- HTML -->
<template>
  <AppHeader />
  <div v-if="loadPageStatus === false">
    <AppMain @search="callCards()" />
    <div @click="loadMore()" v-if="LoadmoreContentStatus === false" v-show="loadButton">
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
