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
        <div class="container">
            <Filter />
            <FoundedCard />
            <CardList />
        </div>
    </main>
</template>


<style lang="scss" scoped>
main {
    background-color: rgb(232, 232, 232);

    .container {
        max-width: 1500px;
        margin: auto;
    }
}
</style>