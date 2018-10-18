<template>
  <vk-card class='st-float'>
    <ul class="uk-list">
      <li><b>Funds:</b> {{ funds | currency }}</li>
      <li><b>Day:</b> {{ day }}</li>
    </ul>
    <div>
      <vk-button :disabled='!initialized' @click='next' type='secondary'>
        {{ !lastDay ? "Next Day" : "See Results" }}
      </vk-button>
    </div>
  </vk-card>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState([
      'funds',
      'day',
      'initialized',
    ]),
    ...mapGetters([
      'lastDay',
    ]),
  },
  methods: {
    next() {
      if (this.lastDay) {
        this.$router.push('/EndDay');
      } else {
        this.INCREMENT_DAY();
      }
    },
    ...mapMutations([
      'INCREMENT_DAY',
    ]),
  },
};
</script>

<style scoped>
  .st-float {
    position: fixed;
    padding: 0px;
    font-size: 12px;
    bottom: 5vh;
  }
  .st-float .uk-card-body {
    padding: 15px;
  }
  .uk-list li{
    margin: 0px 5px;
  }
  .uk-list {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }
  .uk-button {
    font-size: 11px;
    height: 30px;
    line-height: 0px;
    width: 100%;
  }
</style>
