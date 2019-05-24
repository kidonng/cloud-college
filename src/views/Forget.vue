<template>
  <div id="contain">
    <img class="forget" src="../assets/icons/pages/forget_password.png" />
    <div class="user">
      <dialogs></dialogs>
      <div class="login">忘记密码</div>
      <div class="name">
        <input placeholder="用户名" v-model="username" />
        <input placeholder="邮箱" type="password" v-model="email" />
      </div>
      <div @click="send" class="loginButton">发送验证</div>
    </div>
  </div>
</template>

<script>
import Dialogs from '../components/Dialogs.vue'

export default {
  data: () => ({
    username: null,
    email: null
  }),
  components: {
    Dialogs
  },
  methods: {
    send() {
      ;(async () => {
        try {
          const data = this.api
            .post('user/forget', {
              json: {
                username: this.username,
                email: this.email
              }
            })
            .json()

          this.$store.state.message = data.message
          this.$store.state.dialogVisible = true
          this.$store.state.token = `Bearer ${data.token}`
          if (data.status === 1) this.$router.push('/login')
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

.forget
  position relative
  left 70px

.user
  margin-top 0.8rem
  grid-area 8 / 4 / 19 / 18
  background #ffffff
  border-radius 50px
  box-shadow inset 0px 0px 0px 1px rgba(0, 0, 0, 0.075), 0px 2px 8px rgba(102, 175, 233, 0.8)
  padding-bottom 2rem

.login
  margin-top 20px
  font-size 25px
  color #5f93ba

.name input
  padding-left 1rem
  color rgb(174, 204, 208)
  font-size 16px
  width 190px
  height 22px
  margin-top 22px
  border-radius 100px
  border-shadow none
  border 2px solid #76aac0
  outline none
  box-shadow inset 0px 1px 1px rgba(0, 0, 0, 0.075), 0px 0px 8px rgba(102, 175, 233, 0.8)

.loginButton
  color #ffffff
  font-size 22px
  margin auto
  margin-top 133px
  width 95px
  padding 7px
  border 3px solid rgb(116, 128, 163)
  grid-area 17 / 2 / 18 / 10
  background rgb(73, 177, 227)
  border-radius 100px

.loginButton:active
  transform translateY(4px)
</style>
