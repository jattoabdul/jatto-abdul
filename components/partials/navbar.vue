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
    <a href="https://blog.jatto.tech" target="_blank" class="blog-action">
      Blog
    </a>
    <a href="mailto:abdul@jatto.tech" target="_blank" class="contact-action">
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
