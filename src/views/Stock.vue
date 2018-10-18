<template>
  <div class="uk-container">
    <h1 class='uk-light'>Stocks</h1>

    <!-- TRANSITION W/ HOOKS -->
    <transition
      :css="false"
      name='stock-list'>
      <vk-card v-if='!initialized'>
        <vk-card-title>Start the App</vk-card-title>
        <p> In order to use this app we need to fetch the data from the companies. </p>
        <p>
          Please select a list of companies and click in the button below to start.
        </p>

        <select v-model='type' class="uk-select">
          <option v-for='(option, k) in optionType' :key='k'> {{ option }} </option>
        </select>
        <div style="margin-top: 20px">
          <vk-button @click='startApp' type='primary'> LOAD DATA </vk-button>
        </div>

      </vk-card>

      <div v-else>
        <vk-grid matched class="uk-child-width-1-5@m">
          <div v-for='(company, k) in companies' :key='company.symbol'>
            <st-company :style='{ opacity }' class='st-company' :index='k'></st-company>
          </div>
        </vk-grid>
      </div>
    </transition>

  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import stCompany from '@/components/companies/CompanyStock.vue';
import { TimelineLite, CSSPlugin, AttrPlugin } from 'gsap/all';

// eslint-disable-next-line
const plugins = [CSSPlugin, AttrPlugin];

export default {
  data: () => ({
    opacity: 0,
  }),
  components: {
    stCompany,
  },
  created() {
    if (this.initialized) {
      this.opacity = 1;
    }
  },
  computed: {
    type: {
      get() {
        return this.$store.state.type;
      },
      set(value) {
        this.SET_TYPE(value);
      },
    },
    ...mapState([
      'companies',
      'initialized',
      'optionType',
    ]),
  },
  methods: {
    async startApp() {
      await this.loadCompanies();
      this.SET_ALERT({
        class: 'uk-alert-success',
        message: 'Companies loaded! Fetching prices.',
      });

      await this.loadPrices();

      if (this.companies.length === 0) {
        this.SET_ALERT({
          class: 'uk-alert-warning',
          message: 'No results found. Please try another category',
        });
      } else {
        this.SET_ALERT({
          class: 'uk-alert-success',
          message: 'All done! Starting App.',
        });
        this.animateLoad();
      }
    },

    animateLoad() {
      const timeline = new TimelineLite();
      document.querySelectorAll('.st-company')
        .forEach(v => timeline.to(v, 0.3, { opacity: 1 }, '-=0.1'));
    },

    ...mapActions([
      'loadCompanies',
      'loadPrices',
      'loadLogos',
    ]),

    ...mapMutations([
      'SET_ALERT',
      'SET_TYPE',
    ]),
  },
};
</script>

<style scoped>
</style>
