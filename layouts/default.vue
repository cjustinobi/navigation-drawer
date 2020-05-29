<template>
    <div class="app-container">

        <TheHeader/>

        <TheSideNav/>

        <div class="app-content">
            <nuxt />
        </div>

        <TheFooter/>

    </div>
</template>

<script>

    import TheHeader from '~/components/TheHeader'
    import TheFooter from '~/components/TheFooter'
    import TheSideNav from '~/components/TheSideNav'

    export default {

        components: {
            TheHeader,
            TheSideNav,
            TheFooter
        },

        computed: {

            isSidebar() {
                return this.$store.getters['nav/toggleSidebar']
            }

        },

        watch: {
            '$route': function() {
                if (process.client && this.isSidebar && window.innerWidth < 768) {
                    this.$store.dispatch('nav/toggleSidebar')
                }
            },
        }

    }

</script>

<style>
    html, body{
        margin: 0;
        height: 100%;
        width: 100%;
    }
    .app-container{
        height: 100%;
        position: relative;
        display: grid;
        grid-template: auto 1fr auto / 1fr;
    }
    .app-content{
        min-height: 100vh;
        padding: 24px;
        display: grid;
        align-items: center;
        justify-items: center;
    }
</style>
