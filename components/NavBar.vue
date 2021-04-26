<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#"><Logo id="logo" /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div id="navbarNavAltMarkup" class="collapse navbar-collapse flex-end">
      <div class="navbar-nav">
        <NuxtLink to="/about">
          About me
        </NuxtLink>
        <NuxtLink to="/projects">
          Portfolio
        </NuxtLink>
        <NuxtLink to="/blog">
          Blog
        </NuxtLink>
        <GithubCTA />
        <ContactCTA />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
nav {
  padding: 20px 0;
}

nav a  {
  padding-right: 25px;
  color: #000;
}
</style>
