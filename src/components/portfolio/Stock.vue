<template>
    <div class="col-sm-6 col-md-6">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-heading">
                    {{stock.name}}
                    <small>
                        (Price: {{stock.price}} | Quantity: {{stock.quantity}})
                    </small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" class="form-control" placeholder="Quantity" v-model.number="quantity">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" @click="sellStock" :disabled=" notEnoughStocks || quantity <= 0 || !Number.isInteger(quantity)"> {{ notEnoughStocks ? 'Not Enough Shares' : 'Sell' }} </button>
                </div>
            </div>
        </div>
    </div>   
</template>
<script>
    import { mapActions } from 'vuex'
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
            notEnoughStocks() {
                return this.stock.quantity < this.quantity;
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'   
            }),
            sellStock(){
            const order = {
            stockId: this.stock.id,
            stockPrice: this.stock.price,
            quantity: this.quantity
        };
        this.placeSellOrder(order);
    }
    }
    }
</script>