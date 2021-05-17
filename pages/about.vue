<template>
  <section>
    <h1>A little about me</h1>
    <p>Hey, I'm Clarke Newsham, an aspiring developer and software tester from the North West, UK. I'm super passionate about technology and how we can embrace it to develop great things for humanity. Curiosity and futuristic thinking are what keeps me ambitious to design and develop web apps accessible to all, using the skills and techniques I have learned over the last 4 years. I love to stay creative and up to date with emerging tech and development techniques by getting my hands dirty building side projects and University studies.</p>
    <img src="~/assets/about-hero.jpg">
    <h2>My Univeristy journey</h2>
    <p>Talk about my uni course, waht i excelled in and projects i worked on highlighting successess</p>
    <h2>My next steps</h2>
    <p>I am passionate about building a career in software testing and currently seeking out new opportunities where I further develop my technical and test knowledge and flourish as a software tester. I have practical experience of all things testing using TDD and BDD methods of testing on all of my projects, creating test strategies, test automation design and developing test cases using cypress.io. I have gained knowledge and competence in translating product requirements into user stories, creating test strategies, writing test cases and defining acceptance criteria. I am continually looking to enhance my testing skills and have recently been working with a modern test suite, Cypress.io to write automated end-to-end tests cases.</p>
    <!-- <h3>Continual Learning</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur neque, voluptates id sit praesentium libero quam impedit, temporibus, enim vero ab saepe molestiae inventore numquam odio. Recusandae inventore hic eligendi!</p>
    <h3>What I am working on as we speak</h3>
    <p>Coding live on twitch
    </p> -->
    <p>Specialising in all things automation testing</p>
    <div class="cv-cta">
      <h5>Check out my cv to learn more about me</h5>
      <a href="https://www.dropbox.com/s/p6x4euktmza4gd8/Clarke_Newsham_Resume.pdf?dl=0">
        <button>View my cv</button>
      </a>
    </div>
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
    text-align: center;
}

p:nth-of-type(1) {
  grid-column: 1/2;
  margin: 0 auto;
  padding-bottom: 30px;
}
p:nth-of-type(2) {
  margin: 0 auto;
  padding-bottom: 30px;
  grid-column: 1/-1;

}

h2 {
  grid-column: 1/-1;
}

.cv-cta {
  grid-column: 1/-1;
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
  grid-column: 2/-1;

  /* width: 550px; */
  margin: 0 auto;
  border-radius: 0.375rem;
  /* justify-self: stretch; */
}

@media only screen and (min-width: 1024px) {
    /* section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 50px;
    } */
 }
</style>
