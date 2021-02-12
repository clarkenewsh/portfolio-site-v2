<template>
  <section>
    <h1>Home Page</h1>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'Home Page'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>

<style scoped>
section {
  grid-column: 2;
}

</style>
