<script>
import { store } from '../store';
export default {
    name: 'Filter',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="filter">
        <label for="types">Seleziona tipo</label>
        <input list="typesList" name="types" id="types" v-model="store.searchKey">
        <datalist id="typesList">
            <option v-for="archetipe in store.archetipe">{{ archetipe.archetype_name }}</option>
        </datalist>
        <div class="button" @click="$emit('search')">Search</div>
    </div>
</template>


<style lang="scss" scoped>
.filter {
    width: 300px;
    padding: 30px 0;
    display: flex;

    label {
        display: none;
    }

    input {
        width: 300px;
        height: 50px;
        font-size: 30px;
        text-align: center;
        border-radius: 30px;
        border: 1px solid grey;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: bolder;
        border-radius: 100px;
        margin-left: 20px;
        background-color: white;
        padding: 10px;

        &:hover {
            cursor: pointer;
            user-select: none;
            background-color: rgb(225, 225, 225);
        }
    }
}
</style>