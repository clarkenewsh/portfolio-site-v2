<template>
  <section>
    <h1>A little about me</h1>
    <p>Hey, I'm Clarke Newsham, aspiring devloper and software tester from the North West, UK. I'm super passionate about technology and how we can embrace it to develop great things for humanity. Curiosity and futuristic thinking are what keeps me ambitious to design and develop web apps accessible to all, using the skills and techniques I have learned over the last 4 years. I love to stay creative and up to date with emerging tech and development techniques by getting hands dirty building side projects and University studies. </p>
    <h3>A career in testing</h3>
    <p>I am passionate about building a career in software testing and currently seeking out new opportunities were I further develop and flourish as a software tester. I have practical experience of all things testing using TDD and BDD methods of testing on all of my projects, creating test strategies, test automation design and developing test cases using cypress.io. I have gained knowlege and competence in translating product requirements into user stories, creating test strategies, witing test cases and defining acceptance criteria. I am continally looking to enhance my technical and testing skills and have recently been working with modern test suite, Cypress.io to write automated end-to-end tests cases</p>
    <div>
      <h5>Check out my cv to find out a little more</h5>
      <NuxtLink to="https://www.dropbox.com/s/842mmuxygpygfwh/Clarke_Newsham_Resume.pdf?dl=0">
        <button>View my cv</button>
      </NuxtLink>
    </div>
    <img src="~/assets/about-hero.jpg">
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

h1 {
    grid-column: 1/-1;
}

p:nth-of-type(1) {
  grid-column: 1;
  margin: 0 auto;
  padding-bottom: 30px;
}
p:nth-of-type(2) {
  grid-column: 1;
  grid-row: auto;
  margin: 0 auto;
  padding-bottom: 30px;
  /* grid-row:2; */
}

div {
  grid-column: 1/-1;
  grid-row: 5;
  text-align: center;
  border-radius: 0.375rem;
  align-items: flex-start;
  border: 1px solid #e5e5e5;
  padding: 20px 15px;
  margin-bottom: 30px;
  background-color: #2d3748;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23484846' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23484846'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
}

div h5 {
  color: #fff;
}

img {
  height: auto;
  max-width: 100%;
  grid-column: 2;
  /* width: 550px; */
  grid-row: 2;
  border-radius: 0.375rem;
  justify-self: stretch;
}

@media only screen and (min-width: 1024px) {
    section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }
 }
</style>
