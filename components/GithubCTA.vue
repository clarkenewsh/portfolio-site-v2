<template>
  <button>
    <a href="https://github.com/clarkenewsh">GitHub</a>
  </button>
</template>

<script>
export default {
  name: 'GithubCTA',
  data () {
    return {
    }
  },
  methods: {
    function () {
    }
  }
}
</script>

<style scoped>

button {
  padding: 10px 15px;
  border-radius: 0.375rem;
  font-weight: 700;
  margin: 10px;
  background: #ccd8d9;
  border: none;
  transition: all 0.2s ease;
}

button a {
  color: #000;
  font-weight: 700;
  text-decoration: none;
}

button:hover {
  transform: translateY(4px);
}
</style>
