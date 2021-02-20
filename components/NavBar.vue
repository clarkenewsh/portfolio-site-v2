<template>
  <nav>
    <Logo id="logo" />
    <NuxtLink to="/">
      Home
    </NuxtLink>
    <NuxtLink to="/about">
      About Me
    </NuxtLink>
    <NuxtLink to="/projects">
      My Projects
    </NuxtLink>
    <NuxtLink to="/blog">
      Blog
    </NuxtLink>
    <NuxtLink to="/contact">
      Contact
    </NuxtLink>
    <GithubCTA />
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content:flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 0;
  text-transform: capitalize;
  border: none;
  font-size: 110%;
}

nav a  {
  padding-right: 25px;
  display: block;
  color: #000;
}
</style>
