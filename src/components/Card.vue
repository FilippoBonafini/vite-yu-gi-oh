<script>
export default {
    name: 'Card',
    props: {
        img: String,
        name: String,
        type: {
            default: 'Generic',
            type: String
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="image">
            <img :src="img" :alt="name">
        </div>
        <div class="title">{{ name }}</div>
        <div class="type">{{ type }}</div>
    </div>
</template>


<style lang="scss" scoped>
* {
    text-align: center;
}
</style>