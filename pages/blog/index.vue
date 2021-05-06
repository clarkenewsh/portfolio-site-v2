<template>
  <section>
    <h1>Blog coming soon...</h1>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'Blog'
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
  min-height: 90vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
