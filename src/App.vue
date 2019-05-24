<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {}
}
</script>

<style lang="stylus">
#contain
  max-width 1024px
  max-height 1366px
  min-height 600px
  min-width 300px

.user
  max-width 420px
  max-height 500px
  margin auto

@font-face
  font-family have-more-boiled-water
  src url('./assets/misc/font.ttf')

#app, input
  font-family have-more-boiled-water

#app
  text-align center

a
  text-decoration none

#nav
  padding 30px

  a
    font-weight bold
    color #2c3e50

    &.router-link-exact-active
      color #42b983
</style>
