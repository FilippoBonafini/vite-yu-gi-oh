<script>
import FoundedCard from './FoundedCard.vue';
import CardList from './CardList.vue';
export default {
    name: 'Main',
    components: {
        FoundedCard,
        CardList
    }
}
</script>

<template>
    <main>
        <FoundedCard />
        <CardList />
    </main>
</template>


<style lang="scss" scoped></style>