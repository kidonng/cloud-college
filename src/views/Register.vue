<template>
  <div id="contain">
    <img
      class="img"
      src="https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/%E6%B3%A8%E5%86%8C.png"
    />
    <div class="user">
      <Dialogs></Dialogs>
      <div class="register">注册</div>
      <div class="name">
        <input placeholder="用户名" v-model="username" />
        <input placeholder="邮箱" v-model="email" />
        <input placeholder="密码" type="password" v-model="password" />
        <input placeholder="确认密码" type="password" v-model="password2" />
      </div>
      <div @click="register" class="registerButton">注册</div>
      <div class="login">
        <router-link to="login" class="login">已有账号?立即登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Dialogs from '../components/Dialogs'

export default {
  data: () => ({
    username: null,
    email: null,
    password: null,
    password2: null
  }),
  components: {
    Dialogs
  },
  methods: {
    register() {
      ;(async () => {
        try {
          const data = await this.api
            .post('user/current', {
              json: {
                username: this.username,
                email: this.email,
                password: this.password,
                password2: this.password2
              }
            })
            .json()

          this.$store.state.message = data.message
          this.$store.state.dialogVisible = true
          this.$store.state.token = `Bearer ${data.token}`
          this.$router.push('/login')
        } catch (e) {
          console.log(e)
        }
      })()
    }
  }
}
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
  grid-template-columns repeat(20, 5%)
  grid-template-rows repeat(20, 5%)
  align-items center
  justify-items center

.user
  margin-top 0.8rem
  grid-area 8 / 4 / 19 / 18
  background #ffffff
  border-radius 50px
  box-shadow inset 0px 0px 0px 1px rgba(0, 0, 0, 0.075), 0px 2px 8px rgba(102, 175, 233, 0.8)

.register
  margin-top 20px
  font-size 25px
  color #5f93ba

.name input
  padding-left 1rem
  color rgb(174, 204, 208)
  font-size 16px
  width 190px
  height 22px
  margin-top 20px
  border-radius 100px
  border-shadow none
  border 2px solid #76aac0
  outline none
  box-shadow inset 0px 1px 1px rgba(0, 0, 0, 0.075), 0px 0px 8px rgba(102, 175, 233, 0.8)

.registerButton
  color #ffffff
  font-size 22px
  margin auto
  margin-top 32px
  width 95px
  padding 7px
  border 3px solid rgb(116, 128, 163)
  grid-area 18 / 2 / 19 / 10
  background rgb(73, 177, 227)
  border-radius 100px

.login
  font-size 16px
  color #5f93ba
  margin-top 10px
  margin-bottom 15px

.registerButton:active
  transform translateY(4px)

.img
  width 220px
  height 190px
  grid-area 1 / 6 / 8 / 16
  margin-bottom 10px
  margin-top 20px
</style>
