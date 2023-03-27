<script>

export default {
    name: 'LoadMoreButton',

}
</script>

<template>
    <div class="button">
        <div>LOAD MORE</div>
    </div>
</template>


<style lang="scss" scoped>
.button {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        background-color: rgb(54, 54, 54);
        color: white;
        padding: 20px 30px;
        font-size: 34px;
        font-weight: bolder;
        border-radius: 50px;
        cursor: pointer;

        &:hover {
            background-color: rgb(31, 31, 31);
        }
    }
}
</style>