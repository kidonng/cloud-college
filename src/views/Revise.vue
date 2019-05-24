<template>
  <div id="contain">
    <img
      src="https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/%E4%BF%AE%E6%94%B9%E5%AF%86%E7%A0%81.png"
      class="img"
    />
    <div class="user">
      <dialogs></dialogs>
      <div class="revise">修改密码</div>
      <div class="name">
        <input placeholder=" 旧密码" type="password" v-model="old_password" />
        <input placeholder=" 新密码" type="password" v-model="new_password" />
        <input
          placeholder=" 确认新密码"
          type="password"
          v-model="new_password2"
        />
      </div>
      <div @click="revise" class="reviseButton">保存</div>
    </div>
  </div>
</template>

<script>
import Dialogs from '../components/Dialogs.vue'

export default {
  data: () => ({
    old_password: null,
    new_password: null,
    new_password2: null
  }),
  components: { Dialogs },
  methods: {
    revise() {
      ;(async () => {
        try {
          const data = this.api
            .put('user/password', {
              json: {
                old_password: this.old_password,
                new_password: this.new_password,
                new_password: this.new_password2
              }
            })
            .json()

          this.$store.state.message = data.message
          this.$store.state.dialogVisible = true
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
  background url('https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/%E4%BF%A1%E6%81%AF.jpg')
  background-size 100% 100%
  width 100%
  height 100%
  background-repeat no-repeat
  position absolute
  display grid
  grid-template-columns repeat(20, 5%)
  grid-template-rows repeat(20, 5%)
  justify-items center
  justify-content center

.user
  margin-top 0.8rem
  grid-area 8 / 4 / 19 / 18
  background #ffffff
  border-radius 50px
  box-shadow inset 0px 0px 0px 1px rgba(0, 0, 0, 0.075), 0px 2px 8px rgba(102, 175, 233, 0.8)

.revise
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

.reviseButton
  color #ffffff
  font-size 22px
  margin auto
  margin-top 70px
  margin-bottom 2rem
  width 95px
  padding 7px
  border 3px solid rgb(116, 128, 163)
  grid-area 17 / 2 / 18 / 10
  background rgb(73, 177, 227)
  border-radius 100px

.reviseButton:active
  transform translateY(4px)

.img
  width 220px
  height 206px
  grid-area 1 / 6 / 8 / 16
  margin-bottom 20px
  margin-top 30px
</style>
