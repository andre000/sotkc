<template>
  <div class='uk-container'>
    <h1 class='uk-light'>Portfolio</h1>

    <transition name='route' mode='out-in'>
      <transition-group v-if='initialized && portfolio.length > 0'
        class='uk-child-width-1-2@m uk-grid uk-grid-match uk-grid-stack'
        name="portfolio"
        tag="div">
        <div style='margin-top: 40px' v-for='(company, k) in portfolio' :key='company.symbol'>
          <st-portfolio :index='k'></st-portfolio>
        </div>
      </transition-group>

      <vk-card v-else-if='portfolio.length === 0 && initialized'>
        <p>Your portfolio is empty!</p>
        Go to the <a href="#" @click.prevent='$router.push("/Stocks")'>Stock</a>
        to buy a stock.
      </vk-card>

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
import { mapState } from 'vuex';
import stPortfolio from '@/components/companies/CompanyPortfolio.vue';

export default {
  components: {
    stPortfolio,
  },
  computed: mapState([
    'portfolio',
    'initialized',
  ]),
};
</script>

<style scoped>

  .portfolio-enter-active {
    animation: portfolio-in .5s ease-in;
  }

  .portfolio-leave-active {
    animation: portfolio-out .5s ease-out;
    overflow: hidden;
    white-space: pre;
  }

  @keyframes portfolio-in {
    from {
      opacity: 0;
      /* transform: translateX(-10vw); */
      /* width: 0px; */
    } to {
      opacity: 1;
      /* transform: translateX(0vw); */
    }
  }
  @keyframes portfolio-out {
    from {
      opacity: 1;
      /* transform: translateX(0vw); */
    } to {
      width: 0px;
      opacity: 0;
      /* position: absolute; */
      /* transform: translateX(-10vw); */
    }
  }

</style>

<style>
   .portfolio-leave-active * {
    overflow: hidden !important;
    white-space: pre !important;
    flex-wrap: nowrap;
  }
</style>
