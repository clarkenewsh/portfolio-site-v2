<template>
  <NuxtLink to="/">
    <img src="~/assets/logo.png" alt="Clarke Newsham logo">
  </NuxtLink>
</template>

<style scoped>
  a {
    animation: 1s appear;
    font-weight: 700;
    margin-right: auto;
    text-decoration: none;
  }

  img {
    height: 78px;
    width: 78px;
    margin-left: -30px;
  }

  span {
    font-weight: 400;
    font-size: inherit;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
  }

</style>
