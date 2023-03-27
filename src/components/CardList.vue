<script>
import Card from './Card.vue';
import { store } from '../store';
export default {
    name: 'CardList',
    components: {
        Card
    },
    data() {
        return {
            store,

        }
    }
}
</script>

<template>
    <div class="cardList">
        <div class="cardElement" v-for="card in store.cards">
            <Card :img="card.card_images[0].image_url" :name="card.name" :type="card.type" />
        </div>

    </div>
</template>


<style lang="scss" scoped>
.cardList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .cardElement {
        padding-bottom: 40px;
        flex-basis: calc(100% / 4);
        margin: 0 auto;

        :deep(.card) {
            width: 350px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            height: 650px;
            background-color: rgb(198, 198, 198);
            border-radius: 20px;
            padding: 20px;
            box-shadow: 0px 0px 19px -1px #000000;

            img {
                width: 100%;
                padding-bottom: 20px;

            }

            .title {
                font-size: 25px;
                font-weight: bolder;
                color: rgb(47, 47, 47);
                flex-grow: 1;
            }

            .type {
                font-size: 20px;
                margin-top: auto;
            }
        }
    }
}
</style>