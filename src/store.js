/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    initialized: false,
    companies: [],
    portfolio: [],
    day: 0,
    funds: 0,
    alert: null,
  },
  mutations: {
    SET_COMPANIES(state, companies) {
      state.companies = companies;
    },
    START_APP(state) {
      state.initialized = true;
      state.funds = 10000;
    },
    SET_ALERT(state, alert) {
      state.alert = alert;
      setTimeout(() => {
        state.alert = null;
      }, 5000);
    },
    BUY_STOCK(state, order) {
      const key = state.portfolio.findIndex(d => d.symbol === order.symbol);
      if (key >= 0) {
        state.portfolio[key].quantity += parseInt(order.quantity, 10);
      } else {
        state.portfolio.push({
          symbol: order.symbol,
          quantity: parseInt(order.quantity, 10),
        });
      }
      state.funds -= order.price * order.quantity;
    },
    SELL_STOCK(state, order) {
      const key = state.portfolio.findIndex(d => d.symbol === order.symbol);
      const company = state.companies.find(d => d.symbol === order.symbol);

      state.portfolio[key].quantity -= parseInt(order.quantity, 10);
      state.funds += company.prices[state.day] * order.quantity;

      if (state.portfolio[key].quantity <= 0) {
        state.portfolio.splice(key, 1);
      }
    },
    INCREMENT_DAY(state) {
      if (!state.lastDay) {
        state.day += 1;
      }
    },
  },
  getters: {
    lastDay(state) {
      if (state.companies.length === 0) {
        return false;
      }
      if (!state.companies[0].prices) {
        return false;
      }
      return state.day + 1 === state.companies[0].prices.length;
    },
  },
  actions: {
    async loadCompanies({ commit }) {
      const companyList = await axios
        .get('https://api.iextrading.com/1.0/stock/market/list/infocus');

      const companies = companyList.data.map(d => ({
        name: d.companyName,
        symbol: d.symbol,
        logo: `https://storage.googleapis.com/iex/api/logos/${d.symbol}.png`,
      }));
      commit('SET_COMPANIES', companies);
    },

    async loadPrices({ commit, state }) {
      const promisePrices = state.companies.reduce((t, d) => {
        const request = axios.get(`https://api.iextrading.com/1.0/stock/${d.symbol}/chart/1m`);
        t.push(request);
        return t;
      }, []);

      const prices = await Promise.all(promisePrices);

      const updatedCompanies = state.companies.map((d, i) => {
        const { data } = prices[i];
        d.prices = data.map(p => p.close);
        return d;
      });

      commit('SET_COMPANIES', updatedCompanies);
      commit('START_APP');
    },
  },
});
