<template>
  <div class='number-container' :class='status'>
    <vk-icon class='icon' :icon="icon"></vk-icon>
    <span class='number'>{{ difference | currency }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['company'],
  computed: {
    difference() {
      if (this.day === 0) {
        return 0;
      }
      const now = this.company.prices[this.day];
      const before = this.company.prices[this.day - 1];
      const diff = now - before;
      return diff;
    },
    icon() {
      if (this.day === 0) {
        return 'minus';
      }
      return !(this.difference < 0) ? 'chevron-up' : 'chevron-down';
    },
    status() {
      if (this.day === 0) {
        return 'neutral';
      }
      return !(this.difference < 0) ? 'up' : 'down';
    },
    ...mapState([
      'day',
    ]),
  },
};
</script>

<style scoped>
  .number {
    font-weight: bold;
    font-size: 32px;
  }
  .number-container {
    display: flex;
    justify-content: flex-end;
    align-content: center;
  }
  .icon {
    margin-top: 20px;
  }
  .up {
    color: #246d24;
  }
  .down {
    color: #ad1212;
  }
</style>
