<template>
  <section>
    <div id="headline">
      <h1>
        Hello, Im Clarke
      </h1>
      <p>I am a final year BSc Web Design and Development Undergraduate. Passionate about solving real-world problems through the realm of UX Design and Web Development </p>
    </div>
    <img src="~/assets/download.png">
    <div id="about-me">
      <h2>A little about me</h2>
      <div class="split-block">
        <p>Hey, I'm Clarke Newsham, aspiring Web Developer and Software Tester from the North West, UK. I'm super passionate about tech and how we can embrace it to develop great things for humanity.</p>
        <p>Curiosity and futuristic thinking are what keeps me ambitious to design and develop web apps accessible to all, using the skills and techniques I have learned over the last 4 years. I love to stay creative and up to date with emerging tech and development techniques by getting hands dirty building side projects and University studies.</p>
      </div>
    </div>
    <div id="workflow">
      <div>
        <h2>My Worflow and how I work</h2>
        <p>My workflow is much more than just the development. Identifying your goals, understanding your user base to create the best product to solve their goals is how I like to do things.</p>
      </div>
      <div>
        <ul>
          <li>
            <h3>Reserach &#x26; Dicovery</h3>
          </li>
          <li class="highlight">
            <h3>Design</h3>
          </li>
          <li><h3>Develop</h3></li>
          <li><h3>Testing</h3></li>
          <li><h3>Deploy &#x26; Monitor</h3></li>
        </ul>
      </div>
    </div>
    <div id="my-work">
      <h2>Projects</h2>
      <div>
        <figure>
          <h3>Project Title</h3>
          <p>Project Description</p>
          <a href="">Link</a>
        </figure>
        <figure>
          <h3>Project Title</h3>
          <p>Project Description</p>
          <a href="">Link</a>
        </figure>
        <figure>
          <h3>Project Title</h3>
          <p>Project Description</p>
          <a href="">Link</a>
        </figure>
        <figure>
          <h3>Project Title</h3>
          <p>Project Description</p>
          <a href="">Link</a>
        </figure>
      </div>

      <NuxtLink to="/projects">
        <button>View projects</button>
      </NuxtLink>
    </div>
    <div id="hobbies">
      <h2>Things I love to do</h2>
      <p>As much as I love to solve problems with code, I like to play too. I am a huge NFL and Motosport fan, enjoy exploring the great outdoors and Space travel.</p>
      <ul />
    </div>
    <div id="contact-cta">
      <p>Tell me about your project and we can provide the solution</p>
      <ContactCTA />
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'Home Page'
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

button {
  padding: 10px 15px;
  border-radius: 0.375rem;
  font-weight: 500;
  margin: 10px;
  background: #75928e;
  border: none;
  color: #fff;
  transition: all 0.2s ease;
}

button a {
  color: #fff;
}

button:hover {
  transform: translateY(4px);
}

#headline {
  grid-column: 1/2;
}

#headline h1 {
  color: #75928e;
  font-weight: 500;
}

#headline p {
  font-size: 110%;
  align-self: center;
  color: #75928e;
}

img:first-of-type {
  grid-column: 2/-1;
  height: auto;
  align-self: center;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 120px;
  border-bottom-left-radius: 120px;
  border: none;
  max-width: 100%;
  background : linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6));
}

.highlight {
  font-weight: bold;
  font-size: inherit;
  border-bottom: 5px solid #A9B6CC;
  color: #1D5270;
}

#about-me {
  grid-column: 1/-1;
  margin: 50px 0px;
}

#about-me ul {
  display: flex;
  list-style: none;
  padding: 0;
}

#about-me li {
  flex: 1;
}

.split-block {
  display: grid;
  grid-template-columns: 1fr;
}

.split-block p {
  padding-top: 15px;
}

.split-block p:first-of-type {
 margin: 0 auto;
}

/* .split-block p:nth-of-type(2) {
} */

#workflow {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  padding: 15px;
}

#workflow div:nth-of-type(2){
  grid-column: 2;
  padding: 15px;
}

#my-work {
  margin: 50px 0px;
  grid-column: 1/-1;
}

#my-work h3 {
  color: #fff;
}

#my-work div {
  display: flex;
  flex-wrap: wrap;
  color: #fff;
}

#my-work div figure:nth-of-type(1) {
  background: linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('~assets/header-background2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

#my-work div figure:nth-of-type(2) {
  background: linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('~assets/header-background2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

#my-work div figure:nth-of-type(3) {
  background: linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('~assets/header-background2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

#my-work div figure:nth-of-type(4) {
  background: linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('~assets/header-background2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

#my-work figure {
  border-radius: 0.375rem;
  border: none;
  margin: 10px;
  padding: 10px 25px;
  flex: 25;
  height: auto;
}

#my-work button {
}
#hobbies {
  grid-column: 1/-1;
  background: #f2f2f2;
  min-height: 300px;
  margin: 50px 0px;
  padding: 30px;
  border-radius: 0.375rem;
  text-align: center;
}

#hobbies ul {
  display: flex;
  list-style: none;
}

#hobbies ul li {
  padding: 20px;
}

#hobbies p {
  text-align: center;
}

#hobbies svg {
  width: 100px;
  height: 100px;
}

#hobbies ul li:nth-of-type(odd) {
  padding: 60px;
}

#hobbies svg {
  padding-top: 20px;
}

#contact-cta {
  grid-column: 1/-1;
  background-color: #2d3748;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23484846' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23484846'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
  border-radius: 0.375rem;
  padding: 40px;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
}

/* MEDIA QUIRIES */
@media only screen and (min-width: 1024px) {
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  .split-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  #about-me,
  #workflow,
  #my-work,
  #hobbies,
  #contact-cta {
    margin: 70px 0px;
  }
 }

</style>
