<template>
    <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/services">Services</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/contact">Contact</nuxt-link></li>
    </ul>
</template>

<style scoped>

    .nav-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .nav-item {
        margin: 0 10px;
    }

    .nav-item a {
        text-decoration: none;
        color: #fefefe;
    }

    .nav-item a:hover,
    .nav-item a:active{
        color: #b4b4b4;
    }

    @media (max-width: 767px) {
        .nav-list {
            display: block;
        }
        .nav-item{
            margin-top: 16px;
            margin-bottom: 16px;
        }
    }

    @media (min-width: 768px) {
        .nav-list {
            display: flex;
        }
    }

</style>