<template>
  <section>
    <div>
      <h1>Responsive Website UI Tester Tool Overview</h1>
      <h4>The Client Brief</h4>
      <p>
        The clients brief tasked me to design then develop a small website in accordance to what the client has requested. The client I have provided you with is a company called doggie walks, this is a company which has many branches and provides one main service for animals
      </p>
    </div>
    <div><img src="~/assets/responsive-thumb.jpg"></div>
    <div>
      <div id="process">
        <h2>The Solution &#x26; my workflow</h2>
        <!-- <div>
          <h3>My Workflow</h3>
          <p>My workflow is much more than just the development. Identifying your problem and goals and creating a solution to best serve your user base </p>
        </div> -->
        <div>
          <ul>
            <li>
              <h3>Reserach &#x26; Dicovery</h3>
              <h4>Project Requirements and Brand Clarity</h4>
              <p>A customer requirememnts form was completed by Doggie Walk to help me to understand the brand, their problems and goals, and the vision they had for their site. Firstly undedtanding the goal of the site was most important and fomred a foundation to develop a site that provides the solution. </p>
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
      </div>
    </div>
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
  grid-template-columns: 1fr;
  grid-gap: 15px;
}

section div:nth-of-type(1) {
  grid-column: 1;
}
section div:nth-of-type(2) {
  grid-column: 2;
}
img {
  width: 500px;
  height: auto;
  max-width: 100%;
  border-radius: 0.375rem;
}
#process ul  {
  padding: 0;
}

#process ul li {
  list-style: none;
  padding: 0;
}

section div:first-of-type {
  padding: 15px;
}
/* section div:nth-of-type(2) {
  grid-column: 2;
} */

@media only screen and (min-width: 1024px) {
    section {
      display: grid;
      grid-gap: 20px;
    }

    section div:first-of-type {
      padding: 15px;
    }

    section div h1 {
    }

 }

</style>
