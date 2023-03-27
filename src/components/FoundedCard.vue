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
    <span class="container">Cards Founded: {{ store.cards.length }}</span>
</template>


<style lang="scss" scoped></style>