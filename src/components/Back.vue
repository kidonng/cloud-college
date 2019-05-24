<template>
  <div class="back">
    <a @click="$router.back()">
      <img
        src="https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/-7b528d57caf8638b.png"
      />
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
.back
  grid-area 1 / 16 / 2 / 20
  margin-top 25px
  height 30px

a
  text-decoration none
  color #000000
</style>
