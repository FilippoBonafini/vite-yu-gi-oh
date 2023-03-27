<script>
import { store } from '../store';
export default {
    name: 'FoundedCards',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <span class="container">Cards Founded: {{ store.lengthSearch }}</span>
</template>


<style lang="scss" scoped>
span {
    font-size: 26px;
    color: white;
}
</style>