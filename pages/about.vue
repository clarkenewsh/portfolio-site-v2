<template>
  <section>
    <h1>A little about me</h1>
    <p>Hey, I'm Clarke Newsham, aspiring Web Developer & Software Tester from the North West, UK. I'm super passionate about tech and how we can embrace it to develop great things for humanity.</p>

<p>Curiosity and futuristic thinking are what keeps me ambitious to design and develop web apps accessible to all, using the skills and techniques I have learned over the last 4 years. I love to stay creative and up to date with emerging tech and development techniques by getting hands dirty building side projects and University studies. Please view my resume and check out my projects below!</p>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'About'
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
