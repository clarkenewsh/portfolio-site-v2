<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <Logo id="logo" />
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
    <div id="navbarNavAltMarkup" class="flex-end collapse navbar-collapse">
      <div class="navbar-nav">
        <!-- <NuxtLink to="/about">
          About
        </NuxtLink> -->
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

.navbar-expand-lg .navbar-collapse {
  justify-content: flex-end !important;
  align-items: center;
}
nav a:nth-of-type(0){
  padding:0;
}
nav a  {
  color: #000;
  align-self: center;
  padding: 15px;
  font-weight: 500;
  font-size: 120%;
}

nav a:hover {
  color: #75928e;
}
</style>
