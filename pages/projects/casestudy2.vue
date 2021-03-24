<template>
  <section>
    <h1>Case study title</h1>
    <h2>The problem</h2>
    <h2>The process / workflow</h2>
    timeline of workflow here seperating my dev workflow and my software tester workflow
    <h2>The solution</h2>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'case study 2'
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  methods: {
    function () {
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
