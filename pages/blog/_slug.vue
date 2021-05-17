<template>
  <article>
    <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink
            :class="{ 'p-2': link.depth === 2, 'pb-3': link.depth === 3 }"
            :to="`#${link.id}`"
          >
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <img :src="article.img" :alt="article.alt">
    <!-- Fomat blog article data/time -->
    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
    <!-- Render Article content  -->
    <nuxt-content :document="article" />
    <!-- Show author for indovidual article -->
    <author :author="article.author" />
    <!-- Show previous and next blog post with associated data -->
    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
    // return { article }
  },

  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
<style>
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
</style>
