<template>
  <section>
    <figure
      v-for="project in projects"
      :key="project.id"
      :title="project.title"
      class=""
    >
      <h3>{{ project.title }}</h3>
      <p>{{ project.detail }}</p>
      <a href=" {{ project.link }} " /><i class="fab fa-github" />
    </figure>
  </section>
</template>

<script>
export default {
  name: 'ProjectList',
  data () {
    return {
      // projects: [
      //   {
      //     id: 1,
      //     title: 'Doggie Walks',
      //     detail: 'A real life client brief to design and devlop a statis website for a local dog walking business',
      //     link: 'https://github.com/clarkenewsh/doggie-walks-site',
      //     thumbnail: ''
      //   },
      //   {
      //     id: 2,
      //     title: 'Responsive Website UI Tester Tool',
      //     detail: 'A real life client brief to create a esponsive Website UI Tester Tool',
      //     link: 'https://github.com/clarkenewsh/Uni-Tap',
      //     thumbnail: ''
      //   }

      // ]
    }
  }
}
</script>

<style scoped>

</style>
