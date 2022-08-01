<!-- Please remove this file from your project -->
<template>
  <div class="main">
    hello world from client!

    <div class="from-server">
      {{text}}
    </div>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  props: {
    text: {
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  color: $test-css;

  .from-server {
    color: black;
  }
}
</style>
