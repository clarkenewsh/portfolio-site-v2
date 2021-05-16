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
  font-size: 18px;
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
  line-height: 1.9;
}

body {
  color: #444;
}

/* Mobile first css grid styles */
.grid {
  display: grid;
  grid-template-columns: 3.5% 1fr 3.5%;
  grid-row-gap: 1rem;
  margin: 0 auto;
}

main {
  grid-column: 2;
}

header, main, footer {
  grid-column: 2;
}

a {
  font-weight: 500;
}

button {
  padding: 10px 15px;
  border-radius: 0.375rem;
  font-weight: 700;
  margin: 10px 0px;
  background: #00c58e;
  border: none;
  color:#fff;
  transition: all 0.2s ease;
}

button a {
  color: #fff;
}

button:hover {
  transform: translateY(4px);
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

 h3, h4, h5, h6 {
  color: #000;
  padding: 15px 0px;
  font-weight: 700;
}

@media only screen and (min-width: 768px) {
  html {
    margin: 0;
  }
  .grid {
    grid-template-columns: 3.5% 1fr 3.5%;
    grid-gap: 20px;
  }

  h1 {
    font-size: 320%;
  }

   h2 {
  font-size: 220%;
  }
  /* h3 {
  font-size: 135%;
  } */
}

@media only screen and (min-width: 1024px) {
  html {
    font-size: 120%;
  }
  .grid {
    grid-template-columns: 5% 1fr 5%;
  }
   h2 {
    font-size: 260%;
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
