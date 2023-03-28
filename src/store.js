import { reactive } from "vue";

export const store = reactive({
    cards: [],
    archetipe: [],
    lengthSearch: 0,
    apiCards: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    apiArchetipe: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    searchKey: ''
})