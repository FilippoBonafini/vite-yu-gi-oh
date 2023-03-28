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
        <div class="archetype">
            <label for="types">archetype:</label>
            <input list="typesList" name="types" id="types" v-model="store.searchKey">
        </div>

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
    align-items: center;


    .archetype {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        label {
            color: white;
            font-size: 23px;
        }
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

        font-size: 23px;
        background-color: white;
        margin-left: 30px;
        padding: 10px 20px;
        border-radius: 30px;
        font-weight: bolder;

        &:hover {
            cursor: pointer;
            user-select: none;
            background-color: rgb(225, 225, 225);
        }
    }
}
</style>