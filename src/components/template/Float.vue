<template>
  <vk-card class='st-float'>
    <ul class="uk-list">
      <li><b>Funds:</b> {{ funds | currency }}</li>
      <li><b>Day:</b> {{ day + 1 }}</li>
    </ul>
  </vk-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState([
    'funds',
    'day',
    'initialized',
  ]),
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
    margin: 0px;
  }
</style>
