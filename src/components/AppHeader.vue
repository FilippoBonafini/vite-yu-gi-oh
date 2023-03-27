<script>
export default {
    name: 'Header',
}
</script>

<template>
    <header>
        <div class="container">
            <div class="logo"><img src="public/logo.png" alt=""></div>
            <h1>Card Founder</h1>
        </div>
    </header>
</template>


<style lang="scss" scoped>
header {
    background-color: white;
    padding: 10px 0;

    .container {
        max-width: 1500px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
    }

    .logo {
        height: 70px;

        img {
            height: 100%;
            object-fit: contain;
        }
    }

    h1 {
        font-size: 50px;
        text-transform: uppercase;
    }
}
</style>