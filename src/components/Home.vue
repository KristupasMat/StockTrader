<template>
<div>
    <h1>Buy and Sell Stocks and view them in your Portfolio</h1>
    <h6>You can save and load it!</h6>
    <h6>Available funds: {{ funds | currency }}</h6>
</div>
</template>
<script>
export default {
    computed: {
        funds(){
            return this.$store.getters.funds;
        }
    }
}
</script>