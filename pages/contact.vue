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

@media only screen and (min-width: 1024px) {
    section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
 }

</style>
