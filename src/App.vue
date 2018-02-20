<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
                <transition name="fade" mode="out-in">
                    <router-view></router-view> 
                </transition> 
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    export default {
        data(){
            return {

            }
        },
        components: {
            appHeader: Header
        },
        created(){
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style scoped>
    .fade-enter-active {
        animation: fadeUp 200ms ease-out forwards;
    }
    .fade-leave-active {
        animation: fadeDown 200ms ease-out forwards;
    }
    @keyframes fadeUp {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0px);
            opacity: 1;
        }
    }
    @keyframes fadeDown {
        from {
            transform: translateY(0px);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
