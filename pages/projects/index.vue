<template>
  <section>
    <h1>Projects</h1>
    <figure
      v-for="project in projects"
      :key="project.id"
      :title="project.title"
      class=""
    >
      <h2>{{ project.title }}</h2>
      <p>{{ project.detail }}</p>
      <!-- <a href=" {{ project.link }} " /><i class="fab fa-github" /> -->
    </figure>
    Project card and project list componets impo
    <NuxtLink to="/projects/casestudy1">
      View case study
    </NuxtLink>
    </div>
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
          title: 'Doggie Walks',
          detail: 'A real life client brief to design and devlop a statis website for a local dog walking business',
          link: 'https://github.com/clarkenewsh/doggie-walks-site',
          thumbnail: ''
        },
        {
          id: 2,
          title: 'Responsive Website UI Tester Tool',
          detail: 'A real life client brief to create a esponsive Website UI Tester Tool',
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
  margin: 0 auto;
}

figure {
  margin: 0 auto;
}

</style>
