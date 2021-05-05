<template>
  <section>
    <h1>Projects</h1>
    <p>A repository of some of my recent project work with links to the live site and GitHub repo. Also check out my development workflow below.</p>
    <h2>Case Studies</h2>
    <figure
      v-for="project in projects"
      :key="project.id"
      :title="project.title"
      class=""
    >
      <h3>{{ project.title }}</h3>
      <p>{{ project.detail }}</p>
      <NuxtLink to="/projects/casestudy1">
        View case study
      </NuxtLink>
    </figure>
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
          title: 'Doggie Walks',
          detail: 'A real life client brief to design and devlop a statis website for a local dog walking business',
          link: 'https://github.com/clarkenewsh/doggie-walks-site',
          thumbnail: '',
          path: '/projects/casestudy1'
        },
        {
          id: 2,
          title: 'Responsive Website UI Tester Tool',
          detail: 'A real life client brief to create a esponsive Website UI Tester Tool',
          link: 'https://github.com/clarkenewsh/Uni-Tap',
          thumbnail: '',
          path: '/projects/casestudy2'
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

#workflow {
  grid-template-columns: 1fr;
  grid-column: 1/-1;
  list-style: none;
}

#workflow ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
}

#workflow h2:nth-of-type(1) {
  padding-bottom: 15px;
}

#workflow div:nth-of-type(2){
  grid-column: 2;
}

@media only screen and (min-width: 1024px) {
  #workflow ul {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
  }
}

</style>
