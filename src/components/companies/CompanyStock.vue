<template>
  <vk-card class="uk-card-small" >

    <div slot="header">
      <vk-grid gutter="small" class="uk-flex-middle">
        <div class="uk-width-auto">
          <img width="40" height="40" :src="companies[index].logo">
        </div>
        <div class="uk-width-expand">
          <vk-card-title class='elipsed'>{{ companies[index].name }}</vk-card-title>
        </div>
      </vk-grid>
    </div>

    <div class='price'>
      <p style="display: inline;font-size: 14px;"> Current Price: {{ companies[index].prices[day] | currency }} </p>
      <stCompanyHistory class='reduced' :company='companies[index]'></stCompanyHistory>
    </div>

    <div uk-form-custom="target: true">
      <input v-model="value"
        :class='{"uk-form-danger": !valid}'
        min=0
        :max="max"
        ref="input-value"
        class="uk-input"
        type="number">
      <p v-if='errorMsg' style='font-size:12px; margin: 0px' class='uk-text-danger'>
        {{ errorMsg }}
      </p>
    </div>

    <div class='st-footer' slot="footer">
      <button @click='buyStock' class="uk-button uk-button-default">Buy</button>
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
    cost() {
      if (this.value === null) {
        return 0;
      }
      return this.value * this.companies[this.index].prices[this.day];
    },
    max() {
      return Math.floor(this.funds / this.companies[this.index].prices[this.day]);
    },
    ...mapState([
      'day',
      'funds',
      'companies',
    ]),
  },
  methods: {
    buyStock() {
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

      if (this.value * this.companies[this.index].prices[this.day] > this.funds) {
        this.errorMsg = 'You can\'t afford this many stocks';
        this.valid = false;
        this.$refs['input-value'].focus();
        return false;
      }

      const company = this.companies[this.index];
      this.BUY_STOCK({
        symbol: company.symbol,
        quantity: this.value,
        price: company.prices[this.day],
      });

      this.valid = true;
      this.errorMsg = '';
      this.value = null;
      return true;
    },
    ...mapMutations([
      'BUY_STOCK',
    ]),
  },
};
</script>

<style scoped>
  .elipsed {
    overflow: hidden;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .st-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .reduced {
    display: inline-flex;
    zoom: 0.5;
    opacity: 0.7;
  }
  .price {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
</style>
