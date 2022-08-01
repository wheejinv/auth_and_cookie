<template>
  <Tutorial :text="text"/>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      text: 'hello default'
    }
  },
  async asyncData(context) {
    const text = await context.$axios.$get('/');

    return {
      text,
    }
  }
}
</script>
