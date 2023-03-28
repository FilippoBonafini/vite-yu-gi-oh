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
            <div class="info">
                <div>
                    <Filter @search="$emit('search')" />
                </div>

                <div>
                    <FoundedCard />
                </div>

            </div>
            <CardList />
        </div>
    </main>
</template>


<style lang="scss" scoped>
main {

    .container {
        max-width: 1500px;
        margin: auto;

        .info {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

    }
}
</style>