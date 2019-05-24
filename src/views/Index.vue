<template>
  <div style="width: 1050px; margin: auto">
    <div id="contain">
      <img
        src="https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/%E5%BC%80%E5%A7%8B.png"
        class="img"
      />
      <router-link to="/login" class="login">登录</router-link>
      <router-link to="/register" class="register">注册</router-link>
      <router-link to="/forget" class="forget">忘记密码？</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
#contain
  background url('../assets/bgs/primary.svg')
  background-size 100% 100%
  width 100%
  height 100%
  background-repeat no-repeat
  position absolute
  display grid
  grid-template-columns repeat(10, 10%)
  grid-template-rows repeat(20, 5%)
  align-items center
  justify-items center

.login
  color #ffffff
  margin-top 1rem
  width 6.6rem
  padding 8px
  grid-area 13 / 4 / 14 / 8
  background rgb(73, 177, 227)
  font-size 22px
  border 3px solid rgb(68, 108, 165)
  border-radius 100px
  letter-spacing 1.5px

.register
  margin-top 10px
  color #ffffff
  width 6.6rem
  padding 8px
  grid-area 15 / 4 / 16 / 8
  background rgb(73, 177, 227)
  font-size 22px
  border 3px solid rgb(68, 108, 165)
  border-radius 100px
  letter-spacing 1.5px

.forget
  margin-top 40px
  color #5f93ba
  font-size 17px
  grid-area 16 / 4 / 17 / 8

a:active
  transform translateY(4px)

.img
  width 340px
  height 380px
  grid-area 2 / 4 / 12 / 8
</style>
