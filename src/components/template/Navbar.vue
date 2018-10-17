<template>
  <vk-navbar transparent class='uk-light'>
    <vk-navbar-nav slot="center-left">
      <slot></slot>
    </vk-navbar-nav>

    <vk-navbar-logo @click='$router.push("/")'
      class='nav-logo'
      slot="center">sotkc.io
    </vk-navbar-logo>

    <vk-navbar-nav slot="center-right">
      <slot name='right'></slot>
    </vk-navbar-nav>

  </vk-navbar>
</template>

<script>
export default {

};
</script>

<style scoped>
  .nav-logo {
    color: rgb(255, 165, 0);
    cursor: pointer;
  }
</style>
