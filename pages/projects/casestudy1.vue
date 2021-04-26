<template>
  <section>
    <div>
      <h1>Doggie Walks Overview</h1>
      <p>A live client brief designed and devloped for a local Dog walking company</p>
    </div>
    <div>
      <h2>The process and my workflow</h2>
      <p>timeline of workflow here seperating my dev workflow and my software tester workflow</p>
      <h2>The solution</h2>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'case study 1'
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
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 30px;

}

section div:first-of-type {
  border-right: 1px solid rgba(150, 150, 150, 0.5);
  grid-column: 1;
}

section div h1 {
  border-bottom: 1px solid rgba(150, 150, 150, 0.5);
  grid-column: 1;
}

section div:nth-of-type(2) {
  grid-column: 2;
}

@media only screen and (min-width: 1024px) {
    section {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 20px;
    }
 }

</style>
