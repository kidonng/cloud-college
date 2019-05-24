<template>
  <div id="contain">
    <img
      src="https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/%E7%99%BB%E5%BD%95.png"
      class="img"
    />
    <div class="user">
      <Dialogs></Dialogs>
      <div class="login">登录</div>
      <div class="name">
        <input maxlength="12" placeholder="用户名/邮箱" v-model="username" />
        <input placeholder="密码" type="password" v-model="password" />
      </div>
      <div class="forget">
        <router-link to="/forget" style="color: #5f93ba">忘记密码?</router-link>
      </div>
      <div class="registered">
        <router-link to="/register" style="color: #5f93ba"
          >立即注册!</router-link
        >
      </div>
      <div @click="login" class="loginButton">登录</div>
    </div>
  </div>
</template>

<script>
import Dialogs from '../components/Dialogs'

export default {
  data: () => ({
    username: null,
    password: null,
    dialogV: false
  }),
  components: {
    Dialogs
  },
  methods: {
    login() {
      ;(async () => {
        try {
          const data = await this.api
            .post('user/token', {
              json: {
                username: this.username,
                password: this.password
              }
            })
            .json()

          if (data.status !== 0) {
            this.$store.commit('get_token', data.token)
            ;(async () => {
              try {
                const data = await this.api('user/current', {
                  headers: { Authorization: localStorage.accessToken }
                }).json()
                if (
                  data.data.user.birthday === null ||
                  data.data.user.birthday === undefined
                ) {
                  this.$router.push('/init')
                } else {
                  this.$store.state.username = data.data.user.username
                  this.$router.push('/enter')
                  // 创建/加入
                }
              } catch (e) {
                console.log(e)
              }
            })()
          } else {
            this.$store.state.message = data.message
            this.$store.state.dialogVisible = true
          }
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

.forget
  font-size 16px
  margin-left 125px
  margin-top 21px
  color #5f93ba

.registered
  font-size 16px
  margin-left 120px
  margin-top 10px
  margin-bottom 70px
  color #5f93ba

.loginButton
  color #ffffff
  font-size 22px
  margin auto
  margin-bottom 2rem
  width 95px
  padding 7px
  border 3px solid rgb(116 128 163)
  grid-area 17 / 2 / 18 / 10
  background rgb(73, 177, 227)
  border-radius 100px

.loginButton:active
  transform translateY(4px)

.img
  width 220px
  height 206px
  grid-area 1 / 6 / 8 / 16
  margin-bottom 20px
  margin-top 10px
</style>
