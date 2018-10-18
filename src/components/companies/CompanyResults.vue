<template>
  <vk-card>
    <vk-card-title>Results</vk-card-title>
    <p>
      In these {{ day }} days you ended with {{ funds | currency }} of the initial of 10.000
    </p>
    <p>
      That's is a {{ modifier }} of {{ percentage }}
    </p>
    <vk-button @click='reset'> Start Again </vk-button>
  </vk-card>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data: () => ({
    initial: 10000,
  }),
  computed: {
    ...mapState([
      'day',
      'funds',
    ]),
    modifier() {
      return this.funds < this.initial ? 'decrease' : 'increase';
    },
    percentage() {
      return `${Math.floor(((this.funds / this.initial) - 1) * 100)}%`;
    },
  },
  methods: {
    reset() {
      this.RESET_APP();
    },
    ...mapMutations([
      'RESET_APP',
    ]),
  },
};
</script>

<style>

</style>
