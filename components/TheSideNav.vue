<template>
    <div class="sidenav-container">

        <div v-if="isSidebar" class="backdrop" @click="hideSidebar"></div>

        <transition name="slide-side">
            <div v-if="isSidebar" class="sidenav">
                <span @click="hideSidebar">&#128473;</span>
                <app-links></app-links>
            </div>
        </transition>


    </div>
</template>

<script>

    import AppLinks from '~/components/AppLinks'

    export default {

        components: { AppLinks },

        methods: {
            hideSidebar() {
                this.$store.dispatch('nav/toggleSidebar')
            }
        },

        computed: {

            isSidebar() {
                return this.$store.getters['nav/toggleSidebar']
            }

        }

    }

</script>


<style scoped>

    .sidenav-container {
        height: 100%;
        width: 100%;
    }

    .sidenav {
        height: 100%;
        width: 300px;
        background-color: #d6d6d6;
        z-index: 10000;
        position: fixed;
        top: 0;
        left: 0;
        box-sizing: border-box;
        padding: 30px;
    }

    .sidenav span {
        position: absolute;
        right: 20px;
        top: 20px;
    }

    .backdrop {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1000;
        position: fixed;
        top: 0;
        left: 0;
    }

    .slide-side-enter-active,
    .slide-side-leave-active {
        transition: all 0.3s ease-out;
    }
    .slide-side-enter,
    .slide-side-leave-to {
        transform: translateX(-100%);
    }

</style>
