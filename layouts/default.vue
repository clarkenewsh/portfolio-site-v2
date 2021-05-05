<template>
  <div class="grid">
    <header>
      <NavBar />
    </header>
    <main>
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    NavBar,
    TheFooter
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  /* margin: 0; */
  line-height: 1.8;

}

body {
  color: #444;
}

/* Mobile first css grid styles */
.grid {
  display: grid;
  grid-template-columns: 3% 1fr 3%;
  grid-row-gap: 3rem;
  margin: 0 auto;
}

main {
  grid-column: 2;
}

header, main, footer {
  grid-column: 2;
}

/*
put all heading variations and heading scaling here  */
h1 {
  color: #000;
  padding: 15px 0px;
  font-weight: 700;
}

h2 {
  color: #000;
  font-weight: 700;
}

 h3, h4 {
  color: #000;
  padding: 15px 0px;
  font-weight: 500;
}

/* @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&display=swap');

p {
  font-family: 'Roboto Mono', monospace;
} */

@media only screen and (min-width: 768px) {
  html {
    margin: 0;
  }
  .grid {
    grid-template-columns: 3% 1fr 3%;
    grid-gap: 20px;
  }

  h1 {
    font-size: 290%;
  }

  h2 {
  font-size: 230%;
  }
}

@media only screen and (min-width: 1024px) {
  html {
    font-size: 140%;
  }
  .grid {
    grid-template-columns: 5% 1fr 5%;
  }
  h2 {
    font-size: 250%;
  }

  main{
    padding: 40px 0px;
  }
 }

@media only screen and (min-width: 1400px) {
  .grid {
    grid-template-columns: 7% 1fr 7%;
    grid-gap: 20px;
    margin: 0;
  }
}
</style>
