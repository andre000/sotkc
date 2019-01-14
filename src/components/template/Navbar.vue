<template>
  <div>
    <vk-navbar transparent class='uk-light'>
      <vk-navbar-nav slot="center-left" v-if="size > 426">
        <slot></slot>
      </vk-navbar-nav>

      <vk-navbar-logo @click='$router.push("/")'
        class='nav-logo'
        slot="center">sotkc.io
      </vk-navbar-logo>

      <vk-navbar-nav  v-if="size > 426" slot="center-right">
        <slot name='right'></slot>
      </vk-navbar-nav>

    </vk-navbar>

    <div class='responsive-menu' v-if='size <= 426'>
      <vk-navbar-nav slot="center-left">
          <slot></slot>
      </vk-navbar-nav>
      <vk-navbar-nav slot="center-right">
          <slot name='right'></slot>
      </vk-navbar-nav>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    size: null,
  }),

  created() {
    /* eslint-disable-next-line */
    this.size = screen.width;
    window.addEventListener('resize', () => {
      /* eslint-disable-next-line */
      this.size = screen.width;
    });
  },
};
</script>

<style scoped>
  .nav-logo {
    color: rgb(255, 165, 0);
    cursor: pointer;
  }

  .responsive-menu {
    display: flex;
    justify-content: space-around;
  }

</style>

<style>
  .responsive-menu a {
    height: 15px !important;
    color: #fff !important;
    text-align: center;
  }

  @media screen and (max-width: 376px){
    .responsive-menu a {
      padding: 10px !important
    }
  }

  @media screen and (max-width: 320px){
    .responsive-menu a {
      padding: 8px !important;
      font-size: 12px !important;
      height: 15px !important;
    }
  }
</style>
