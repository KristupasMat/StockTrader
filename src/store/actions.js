import Vue from 'vue';

export const loadData = ({commit}) => {
    Vue.http.get('stocks.json')
        .then( response => response.json())
        .then(data => {
        if (data){
            const funds = data.funds;
            const stockPortfolio = data.stockPortfolio;
            const stocks = data.stocks;
            
            const portfolio = {
                funds,
                stockPortfolio
            }
            commit('SET_STOCKS', stocks);
            commit('SET_PORTFOLIO', portfolio)
        }
    })
}