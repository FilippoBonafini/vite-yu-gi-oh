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
            <option value="">Select Archetipe</option>
            <option v-for="archetipe in store.archetipe">{{ archetipe.archetype_name }}</option>
        </datalist>
    </div>
</template>


<style lang="scss" scoped>
.filter {
    width: 300px;
    padding: 30px 0;

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
}
</style>