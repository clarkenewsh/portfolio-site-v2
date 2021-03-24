<template>
  <section>
    <h1>Hello Im Clarke.</h1>
    <p>I am a final year BSc Web Design and Development Undergraduate. Passionate about solving real-world problems through the realm of UX Design and Web Development</p>
    <img src="~/assets/download.png">
    <div id="about-me">
      <h2>A little about me</h2>
      <p>Curiosity and futuristic thinking are what keeps me ambitious to design and develop web apps accessible to all, using the skills and techniques I have learned over the last 4 years. I love to stay creative and up to date with emerging tech and development techniques by getting hands dirty building side projects and University studies. Please view my resume and check out my projects below!</p>
      <h2>What I do</h2>
      <ul>
        <li>User Research</li>
        <li>Design and Developemt</li>
        <li>Testing</li>
        <h2>The process behind my work</h2>
        <p>Developemtn vs testing workfloe here (expand more in each project of the full workflow with links to testing strategy</p>
      </ul>
    </div>
    <div id="my-work">
      <h2>Project overview here</h2>

      <button>More of my work</button>
    </div>
    <div id="my-interests">
      <h2>Things I love to do</h2>
    </div>
    <div id="">
      <h2>Tell me about your project and we can provide the solution.</h2>
      <button>Tell me more</button>
    </div>
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

@media only screen and (min-width: 1024px) {
    section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
 }

</style>
