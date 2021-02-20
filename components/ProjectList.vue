<template>
  <section>
    <figure
      v-for="project in projects"
      :key="project.id"
      :title="project.title"
      class="feature-card"
    >
      <h3>{{ project.title }}</h3>
      <p>{{ project.detail }}</p>
      <a href="">'View on GitHub<i class="fab fa-github" /></a>
    </figure>
  </section>
</template>

<script>
export default {
  name: 'ProjectList',
  data () {
    return {
      projects: [
        {
          id: 1,
          title: 'UniTap',
          detail: 'A water refill point locator for University campus in a affect to reduce single use plastics',
          link: 'https://github.com/clarkenewsh/Uni-Tap',
          thumbnail: ''
        },
        {
          id: 2,
          title: 'Space X API Client',
          detail: 'A API Client to visualise cool SpaceX Data',
          link: 'https://github.com/clarkenewsh/Uni-Tap',
          thumbnail: ''
        }

      ]
    }
  }
}
</script>

<style scoped>

</style>
