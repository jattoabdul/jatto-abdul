<template>
  <div>
    <nav-bar />
    <main>
      <h1 class="title">
        jatto-abdul portfolio
      </h1>
      <h2 class="subtitle">
        Abdulqahhar Aminujatto&#39;s web profile and portfolio
      </h2>
    </main>
  </div>
</template>

<script>
import NavBar from '~/components/partials/navbar.vue'

export default {
  head: {
    title: 'Abdulqahhar Aminujatto - Portfolio'
  },
  components: {
    NavBar
  }
}
</script>

<style lang="scss" src="./portfolio.scss" scoped />
