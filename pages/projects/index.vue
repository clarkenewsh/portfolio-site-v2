<template>
  <section>
    <h1>Project Case Studies</h1>
    <p>A repository of some of my recent project work with links to the case study's, live sites and GitHub repos.</p>
    <div id="howIWork">
      <h2>How I work</h2>
      <img src="~/assets/workflow.png" alt="My worflow illutration">
    </div>
    <div>
      <figure>
        <h3>Usability Testing Audit - Total Swimming </h3>
        <h6>Univeristy Project</h6>
        <p>A usability testing review and analysis conducted on Total Swimmings current webiste using variouse methods of data analysis, usability testing, acccessbility and performace testing.</p>
        <NuxtLink to="/projects/">
          <button class="alt-btn">
            Case study coming soon
          </button>
        </NuxtLink>
        <a href="">
          <button class="alt-btn">View site</button>
        </a>
      </figure>
      <figure>
        <h3>UX Case Study - Virtual Learning Environment</h3>
        <h6>Univeristy Project</h6>
        <p>A user research and UX Design project and case study on Blackboard, an E-Learning Environment </p>
        <NuxtLink to="/projects/">
          <button class="alt-btn">
            Case study coming soon
          </button>
        </NuxtLink>
        <a href="https://doggiewalks-site.netlify.app/">
          <button class="alt-btn">View site</button></a>
      </figure>
      <figure>
        <h3>Doggie Walks</h3>
        <h6>Univeristy Project</h6>
        <p>A real life client brief to design and develop a static website for a local dog-walking service</p>
        <NuxtLink to="/projects/casestudy1">
          <button class="alt-btn">
            Read case study
          </button>
        </NuxtLink>
        <a href="https://doggiewalks-site.netlify.app/">
          <button class="alt-btn">View site</button></a>
      </figure>
      <figure>
        <h3>E-Learning Platform</h3>
        <h6>Univeristy Project - Dissertation</h6>
        <p>A VLE for Undergraduate students to learn about dissertations, final year projects and to formulate their own project ideas.</p>
        <NuxtLink to="/projects/">
          <button class="alt-btn">
            Case study coming soon
          </button>
        </NuxtLink>
        <a href="">
          <button class="alt-btn">View site</button>
        </a>
      </figure>
      <figure>
        <h3>Test Automation for Accessbility</h3>
        <h6>Passion Project - Live Project</h6>
        <p>Test Automation Framework to test website Accessibility to WCAG 2.1</p>
        <NuxtLink to="/projects/">
          <button class="alt-btn">
            Case study coming soon
          </button>
        </NuxtLink>
        <a href="">
          <button class="alt-btn">View site</button>
        </a>
      </figure>
      <figure>
        <h3>User Research Case Study </h3>
        <h6>Passion Project - Live Project</h6>
        <p>A live User Reserach Project and case studies focusing on a current social issue</p>
        <NuxtLink to="/projects/">
          <button class="alt-btn">
            Case study coming soon
          </button>
        </NuxtLink>
        <a href="">
          <button class="alt-btn">View site</button>
        </a>
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'Projects'
      // projects: [
      //   {
      //     id: 1,
      //     title: 'Doggie Walks',
      //     detail: 'A real life client brief to design and devlop a statis website for a local dog walking business',
      //     link: 'https://github.com/clarkenewsh/doggie-walks-site',
      //     thumbnail: '',
      //     path: '/projects/casestudy1'
      //   },
      //   {
      //     id: 2,
      //     title: 'Responsive Website UI Tester Tool',
      //     detail: 'A real life client brief to create a esponsive Website UI Tester Tool',
      //     link: 'https://github.com/clarkenewsh/Uni-Tap',
      //     thumbnail: '',
      //     path: '/projects/casestudy2'
      //   }

      // ]
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
  margin: 50px auto;
  text-align: center;
}

section div {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

a {
  margin: 25px;
  /* font-weight: 500; */
}

a:hover{
  color: #00c58e;
}

figure {
  margin: 30px 0px;
  border: 1px solid #E5E5E5;
  padding: 30px;
  text-align: center;
  border-radius: 0.375rem;
}

figure:hover{
  border: none;
  box-shadow: 0 10px 40px rgb(0 0 0 / 20%);
  transition: all 0.4s ease;
}

h6 {
  text-transform: uppercase;
  font-weight: 500;
  padding-top: 0;
  color: #75928E;
}

#howIWork {
  margin: 150px 0px;
}

#howIWork img {
  max-width: 100%;
  height: auto;
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

  figure {
    width: 70%;
}

}

</style>
