<template>
  <vk-card @touchstart='handleTouch' :class='{active}' class='st-float'>
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
  data: () => ({
    active: false,
  }),
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

    handleTouch() {
      this.active = !this.active;
    },
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

  @media screen and (max-width: 426px) {
    .st-float {
      bottom: 10%;
      left: -33%;
      transition: all .20s ease-in-out;
    }
    .st-float.active {
      left: 0%;
    }
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
