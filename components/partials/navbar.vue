<template>
  <nav :class="navClass">
    <nuxt-link to="/">
      Home
    </nuxt-link>
    <nuxt-link to="/portfolio">
      Portfolio
    </nuxt-link>
    <nuxt-link to="/about">
      About/Resume
    </nuxt-link>
    <nuxt-link to="/blog">
      Blog
    </nuxt-link>
    <a href="mailto:abdul@jatto.com" target="_blank" class="contact-action">
      Email Me
    </a>
  </nav>
</template>

<script>
export default {
  props: {
    navClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" src="./navbar.scss" scoped />
