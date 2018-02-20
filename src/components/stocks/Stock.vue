<template>
<div class="col-xs-12 col-sm-6 col-md-6">
    <div class="panel panel-success">
        <div class="panel-heading">
            <h3 class="panel-heading">
                {{stock.name}}
                <small>
                    (Price: {{stock.price}})
                </small>
            </h3>
        </div>
        <div class="panel-body">
            <div class="pull-left">
                <input type="number" class="form-control" placeholder="Quantity" v-model.number="quantity" :class="{danger: insufficientFunds }">
            </div>
            <div class="pull-right">
                <button class="btn btn-success" @click="buyStock" :disabled=" insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)">Buy</button>
            </div>
        </div>
    </div>
</div>   
</template>
<script>
export default {
    data(){
        return {
            quantity: 0
        }
    },
    props: [
        'stock'
    ],
    computed: {
      insufficientFunds(){
          return this.quantity * this.stock.price > this.$store.getters.funds;
      }  
    },
    methods: {
        buyStock(){
             const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            console.log(order);
            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
        }
    }
}
</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>