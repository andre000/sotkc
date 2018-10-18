<template>
  <div class="uk-container">
    <h1 class='uk-light'>End Day</h1>

    <transition name='route'>
      <vk-card v-if='initialized && !lastDay'>
        <p> Current day: {{ day }}</p>
        <vk-button @click='nextDay'>Go to the next day</vk-button>
      </vk-card>

      <st-results v-else-if="lastDay"></st-results>

      <vk-card v-else>
        <p> The app isn't loaded yet! </p>
        <p>
          Go to the <a href="#" @click.prevent='$router.push("/Stocks")'>Stock</a>
          page in order to start.
        </p>
      </vk-card>
    </transition>

  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import stResults from '@/components/companies/CompanyResults.vue';

export default {
  components: {
    stResults,
  },
  computed: {
    ...mapState([
      'initialized',
      'day',
      'companies',
    ]),
    ...mapGetters([
      'lastDay',
    ]),
  },
  methods: {
    nextDay() {
      this.INCREMENT_DAY();
    },
    ...mapMutations([
      'INCREMENT_DAY',
      'SET_ALERT',
    ]),
  },
};
</script>

<style>

</style>
