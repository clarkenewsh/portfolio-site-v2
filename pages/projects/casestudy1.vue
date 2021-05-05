<template>
  <section>
    <div>
      <h1>Doggie Walks Overview</h1>
      <p>A live client brief designed and devloped for a local Dog walking company</p>
    </div>
    <div>
      <div id="workflow">
        <div>
          <h2>The process and my workflow</h2>
          <p>My workflow is much more than just the development. Identifying your goals, understanding your user base to create the best product to solve their goals is how I like to do things.</p>
        </div>
        <div>
          <ul>
            <li>
              <h3>Reserach &#x26; Dicovery</h3>
              <p>Before I start a project I like to find out about your user base a conduct user disocovery to understand them</p>
            </li>
            <li>
              <h3>Design</h3>
              <p>Before I start a project I like to find out about your user base a conduct user disocovery to understand them</p>
            </li>
            <li>
              <h3>Develop</h3>
              <p>Before I start a project I like to find out about your user base a conduct user disocovery to understand them</p>
            </li>
            <li>
              <h3>Testing</h3>
              <p>Before I start a project I like to find out about your user base a conduct user disocovery to understand them</p>
            </li>
            <li>
              <h3>Deploy &#x26; Monitor</h3>
              <p>Before I start a project I like to find out about your user base a conduct user disocovery to understand them</p>
            </li>
          </ul>
        </div>
        <h2>The solution</h2>
      </div>
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
  grid-template-columns: 1fr;
  grid-gap: 15px;

}

section div:first-of-type {
  padding: 15px;
}

section div:nth-of-type(2) {
  grid-column: 2;
}

@media only screen and (min-width: 1024px) {
    section {
      display: grid;
      grid-template-columns: .5fr 2fr;
      grid-gap: 20px;
    }

    section div:first-of-type {
      border-right: 1px solid rgba(150, 150, 150, 0.5);
      padding: 15px;
    }

    section div h1 {
      border-bottom: 1px solid rgba(150, 150, 150, 0.5);
    }

 }

</style>
