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
    type: 'infocus',
    optionType: [
      'infocus',
      'mostactive',
      'gainers',
      'losers',
      'iexvolume',
      'iexpercent',
    ],
    saved: [],
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
    RESET_APP(state) {
      state.initialized = false;
      state.companies = [];
      state.portfolio = [];
      state.day = 0;
      state.funds = 0;
      state.alert = null;
    },
    SET_TYPE(state, type) {
      state.type = type;
    },
    SAVE_STATE(state) {
      const { saved, ...actualState } = state;
      actualState.date = Date.now();
      state.saved.push(actualState);
    },
    LOAD_STATE(state, index) {
      const {
        initialized,
        companies,
        portfolio,
        day,
        funds,
        alert,
      } = state.saved[index];

      state.initialized = initialized;
      state.companies = [...companies];
      state.portfolio = [...portfolio];
      state.day = day;
      state.funds = funds;
      state.alert = alert;
    },
    DELETE_SAVED_STATE(state, index) {
      state.saved.splice(index, 1);
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
    async loadCompanies({ commit, state }) {
      const companyList = await axios
        .get(`https://api.iextrading.com/1.0/stock/market/list/${state.type}`);

      if (companyList.data.length === 0) {
        return false;
      }

      const companies = companyList.data.map(d => ({
        name: d.companyName,
        symbol: d.symbol,
        logo: `https://storage.googleapis.com/iex/api/logos/${d.symbol}.png`,
      }));
      return commit('SET_COMPANIES', companies);
    },

    async loadPrices({ commit, state }) {
      if (state.companies.length === 0) {
        return false;
      }

      const promisePrices = state.companies.reduce((t, d) => {
        const request = axios.get(`https://api.iextrading.com/1.0/stock/${d.symbol}/chart/1m`);
        t.push(request);
        return t;
      }, []);

      const prices = await Promise.all(promisePrices);

      const updatedCompanies = state.companies.map((d, i) => {
        const { data } = prices[i];
        d.prices = data.map(p => Number(p.close).toFixed(2));
        return d;
      });

      commit('SET_COMPANIES', updatedCompanies);
      return commit('START_APP');
    },
  },
});
