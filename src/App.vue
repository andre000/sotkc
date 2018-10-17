<template>
  <div id="app">
    <st-navbar>
      <router-link tag='li' to='Portfolio'><a>Portfolio</a></router-link>
      <router-link tag='li' to='Stocks'><a>Stocks</a></router-link>

      <template slot='right'>
        <router-link tag='li' to='EndDay'><a>End Day</a></router-link>
        <vk-navbar-nav-item title="Save & Load"></vk-navbar-nav-item>
      </template>
    </st-navbar>

    <div class="uk-section">
      <transition name='route' mode='out-in' appear>
        <router-view/>
      </transition>
    </div>

    <st-float></st-float>

    <transition
      name='alert'
      appear>
      <div class="st-alert" v-if='alert'>
        <div :class='alert.class' uk-alert>
            <a class="uk-alert-close" uk-close></a>
            {{ alert.message }}
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import stNavbar from '@/components/template/Navbar.vue';
import stFloat from '@/components/template/Float.vue';
import { mapState } from 'vuex';

export default {
  components: {
    stNavbar,
    stFloat,
  },
  computed: mapState([
    'alert',
  ]),
};
</script>

<style>
  html {
    height: 100%;
  }
  body {
    background: linear-gradient(341deg, #0096f4, #28a5f5);
    background-size: 400% 400%;
    animation: background 30s ease infinite;
    min-height: 100%;

  }

  @keyframes background {
    0%{background-position:26% 0%}
    50%{background-position:75% 100%}
    100%{background-position:26% 0%}
  }

  .route-enter-active {
    animation: .2s ease-in route-in
  }
  .route-leave-active {
    animation: .2s ease-in route-out
  }

  .alert-enter-active {
    overflow: hidden;
    animation: .5s ease-in alert-in
  }
  .alert-leave-active {
    overflow: hidden;
    animation: .5s ease-out alert-out
  }

  @keyframes route-in {
    from {
      opacity: 0;
      transform: translateY(80px)
    } to {
      opacity: 1;
      transform: translateY(0px)
    }
  }
  @keyframes route-out {
    from {
      opacity: 1;
      transform: translateY(0px)
    } to {
      opacity: 0;
      transform: translateY(-80px)
    }
  }

  @keyframes alert-in {
    from {
      opacity: 0;
      top: -5vh;
    } to {
      top: 5vh;
      opacity: 1;
    }
  }
  @keyframes alert-out {
    from {
      opacity: 1;
      top: 5vh;
    } to {
      top: -5vh;
      opacity: 0;
    }
  }

  .uk-button-primary {
    background: #ffa500;
  }
  .uk-button-primary:focus, .uk-button-primary:hover {
    background-color: #cc8500;
    color: #fff;
  }
  .uk-button-secondary {
    background: #0096f4;
  }

  .st-alert {
    position: absolute;
    padding: 10px;
    font-size: 14px;
    right: 1vw;
    top: 5vh;
  }

  .st-alert div {
    padding: 15px;
  }
</style>
