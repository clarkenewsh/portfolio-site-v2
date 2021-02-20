<template>
  <section>
    <h1>Get in touch</h1>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'Contact'
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
