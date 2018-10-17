<template>
  <div class="uk-container">
    <h1 class='uk-light'>End Day</h1>
    <vk-card v-if='initialized'>
      <p> Current day: {{ day }}</p>
      <vk-button @click='nextDay'>Go to the next day</vk-button>
    </vk-card>
    <vk-card v-else>
      <p> The app isn't loaded yet! </p>
      <p>
        Go to the <a href="#" @click.prevent='$router.push("/Stocks")'>Stock</a>
        page in order to start.
      </p>
    </vk-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState([
      'initialized',
      'day',
      'companies',
    ])
  },
  methods: {
    nextDay() {
      this.INCREMENT_DAY();
    },
    ...mapMutations([
      'INCREMENT_DAY',
      'SET_ALERT',
    ])
  }
};
</script>

<style>

</style>
