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
  color: #555;
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
  font-family: 'Playfair Display', serif;
  font-weight: 700;
}

h2, h3, h4 {
  font-family: 'Playfair Display', serif;
  color: #000;
  padding: 15px 0px;
  font-family: 'Playfair Display', serif;
  font-weight: 500;
}

@media only screen and (min-width: 768px) {
  * {
    font-size: 20px;
    margin: 0;
  }
  .grid {
    grid-template-columns: 5% 1fr 5%;
    grid-gap: 20px;
  }

  h1 {
    font-size: 270%;
  }

  h2 {
  font-size: 180%;
  font-weight: 700;
  }
}

@media only screen and (min-width: 1024px) {
  * {
    font-size: 22px;
  }
  .grid {
    grid-template-columns: 7% 1fr 7%;
  }
  h2 {
    font-size: 200%;
  }

  main{
    padding: 60px 0px;
  }
 }

@media only screen and (min-width: 1400px) {
  .grid {
    grid-template-columns: 12% 1fr 12%;
    grid-gap: 30px;
    margin: 0;
  }
}
</style>
