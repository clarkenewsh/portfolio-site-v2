<template>
  <section>
    <h1>Projects</h1>
    <p>A repository of some of my recent project work with links to the live site and GitHub repo. Also check out my development workflow below.</p>
    <div id="workflow">
      <div>
        <h2>My Development Workflow</h2>
        <p>My workflow is much more than just the development. Identifying your goals, understanding your user base to create the best product to solve their goals is how I like to do things.</p>
      </div>
      <div>
        <ul>
          <li>
            <h3>Reserach &#x26; Dicovery</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi mollitia molestias omnis? Inventore praesentium quia doloremque soluta debitis veritatis sint, maiores accusamus explicabo, quae quod, molestias enim esse amet dolor?</p>
          </li>
          <li>
            <h3>Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam cumque, dicta cupiditate debitis ad iure corrupti minus earum, harum culpa iste dolorem, itaque doloremque voluptates officiis aspernatur assumenda quae placeat!</p>
          </li>
          <li>
            <h3>Develop</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, facilis veritatis totam voluptas voluptatum, harum eos pariatur impedit rem maxime repellendus exercitationem ipsum ipsa itaque dignissimos, obcaecati non. Autem, saepe.</p>
          </li>
          <li>
            <h3>Testing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cumque excepturi veritatis illum similique modi totam molestias recusandae, aut ratione necessitatibus natus, facere dolorum corrupti. Quibusdam dolor voluptatem similique molestias!</p>
          </li>
          <li>
            <h3>Deploy &#x26; Monitor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum maiores dignissimos dolore! Maiores quia molestias dolorum, unde nulla iste alias debitis a accusamus neque adipisci perferendis provident assumenda odit corrupti!</p>
          </li>
        </ul>
      </div>
    </div>
    <h2>Case Studies</h2>
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

#workflow {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-column: 1/-1;
  list-style: none;
}

#workflow ul {
  list-style: none;
  padding: 0;
}

#workflow h2:nth-of-type(1) {
  border-bottom: 1px solid rgba(150, 150, 150, 0.5);
  padding-bottom: 15px;
}

#workflow div:first-of-type {
  grid-column: 1;
  border-right: 1px solid rgba(150, 150, 150, 0.5);
  padding-right: 15px;
}

#workflow div:nth-of-type(2){
  grid-column: 2;
  padding: 15px;
}

</style>
