<template>
  <section class="animate__animated animate__bounceInLeft animate__slow">
    <h1>Blog coming soon...</h1>
    <!-- <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img :src="article.img">
          <div>
            <h2>{{ article.title }}</h2>
            <p>by {{ article.author.name }}</p>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul> -->
  </section>
</template>

<script>

export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}

</script>

<style scoped>
section {
  grid-column: 2;
  min-height: 90vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
