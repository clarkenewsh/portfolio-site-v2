<template>
  <section>
    <h1>Projects</h1>
    <h2>My Workflow</h2>
    timeline of workflow here
    <ProjectList />
    Project card and project list componets impo
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'Projects',
      projects: [
        {
          id: 1,
          title: 'UniTap',
          detail: 'A water refill point locator for University campus in a affect to reduce single use plastics',
          link: 'https://github.com/clarkenewsh/Uni-Tap',
          thumbnail: ''
        }

      ]
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

</style>
