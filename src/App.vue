<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO COMPONENTI 
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',
  // DICHIARIAMO I COMPONENTI 
  components: {
    AppHeader,
    AppMain
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
