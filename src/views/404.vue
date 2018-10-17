<template>
  <div class="uk-container uk-text-center">
    <h1 class="uk-light code-error">404</h1>
    <p class='uk-text-lead uk-light'>
      The page that you're looking for doesn't exist!
    </p>
    <vk-button type='primary' @click='$router.go(-1)'> Go back </vk-button>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
  .code-error {
    font-size: 4em
  }
</style>
