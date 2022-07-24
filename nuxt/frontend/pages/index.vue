<template>
  <Tutorial :text="text"/>
</template>

<script>
import axios from 'axios';

export default {
  name: 'IndexPage',
  data() {
    return {
      text: 'hello default'
    }
  },
  async asyncData(context) {
    const {data} = await axios.get('http://localhost:3001/');

    return {
      text: data,
    }
  }
}
</script>
