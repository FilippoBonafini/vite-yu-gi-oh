<script>
import FoundedCard from './FoundedCard.vue';
import CardList from './CardList.vue';
import Filter from './Filter.vue';
export default {
    name: 'Main',
    components: {
        Filter,
        FoundedCard,
        CardList
    }
}
</script>

<template>
    <main>
        <Filter />
        <FoundedCard />
        <CardList />
    </main>
</template>


<style lang="scss" scoped></style>