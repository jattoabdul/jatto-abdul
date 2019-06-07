<template>
  <div class="page container blog">
    <nav-bar />
    <main>
      <h1 class="title">
        jatto-abdul blog
      </h1>
      <h2 class="subtitle">
        Abdulqahhar Aminujatto&#39;s web profile and portfolio
      </h2>
      <p>
        Work is in progress
      </p>
    </main>
  </div>
</template>

<script>
import NavBar from '~/components/partials/navbar.vue'

export default {
  head: {
    title: 'Abdulqahhar Aminujatto - Blog'
  },
  components: {
    NavBar
  }
}
</script>

<style lang="scss" src="./blog.scss" scoped />
