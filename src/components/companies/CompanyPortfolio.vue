<template>
  <vk-card>

    <div slot="header">
      <vk-grid gutter="small" class="uk-flex-middle">
        <div class="uk-width-auto">
          <img width="40" height="40" :src="selectedCompany.logo">
        </div>
        <div class="uk-width-expand">
          <vk-card-title class='elipsed'>{{ selectedCompany.name }}</vk-card-title>
        </div>
      </vk-grid>
    </div>

    <vk-grid class='uk-child-width-1-2@m'>
      <div>
        <span> Quantity: {{ portfolio[index].quantity }} </span><br>
        <span> Current Price: {{ selectedCompany.prices[day] | currency }} </span>
      </div>
      <div>
        <stCompanyHistory :company='selectedCompany'></stCompanyHistory>
      </div>
    </vk-grid>

    <div uk-form-custom="target: true">
      <input v-model="value"
        :class='{"uk-form-danger": !valid}'
        min=0
        :max="max"
        class="uk-input"
        type="number">
      <p v-if='errorMsg' style='font-size:12px; margin: 0px' class='uk-text-danger'>
        {{ errorMsg }}
      </p>
    </div>

    <div class='st-footer' slot="footer">
      <button @click='sellStock' class="uk-button uk-button-default">Sell</button>
      <span v-if='cost > 0'> {{ cost | currency }} </span>
    </div>
  </vk-card>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import stCompanyHistory from '@/components/companies/CompanyHistory.vue';

export default {
  components: {
    stCompanyHistory,
  },
  data: () => ({
    value: null,
    valid: true,
    errorMsg: null,
  }),
  props: ['index'],
  computed: {
    selectedCompany() {
      return this.companies.find(d => d.symbol === this.portfolio[this.index].symbol);
    },
    cost() {
      if (this.value === null) {
        return 0;
      }
      const port = this.portfolio[this.index];
      const key = this.companies.findIndex(d => d.symbol === port.symbol);
      return this.value * this.companies[key].prices[this.day];
    },
    max() {
      const port = this.portfolio[this.index];
      return port.quantity;
    },
    ...mapState([
      'day',
      'funds',
      'companies',
      'portfolio',
    ]),
  },
  methods: {
    sellStock() {
      if (!this.value) {
        this.errorMsg = 'Value can\'t be empty';
        this.valid = false;
        this.$refs['input-value'].focus();
        return false;
      }

      if (this.value <= 0) {
        this.errorMsg = 'Invalid quantity';
        this.valid = false;
        this.$refs['input-value'].focus();
        return false;
      }

      const portfolio = this.portfolio[this.index];

      if (this.value > portfolio.quantity) {
        this.errorMsg = 'You don\'t have this many stocks';
        this.valid = false;
        this.$refs['input-value'].focus();
        return false;
      }

      this.SELL_STOCK({
        symbol: portfolio.symbol,
        quantity: this.value,
      });

      this.valid = true;
      this.errorMsg = '';
      this.value = null;
      return true;
    },
    ...mapMutations([
      'SELL_STOCK',
    ]),
  },
};
</script>

<style scoped>
  .st-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
