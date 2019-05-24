<template>
  <div style="width: 1050px; margin: auto">
    <div id="contain">
      <back></back>
      <div class="user">
        <div class="login">房间创建表</div>
        <dialogs></dialogs>
        <form class="form">
          <div class="container">
            <div class="name">
              <span style="float:left; margin-left: 6px;">创建人</span>
              <span style="margin-left: 10px">{{ $store.state.username }}</span>
            </div>
          </div>
          <div class="room-choose">
            <div style="font-size: 19px; width: 90px; color: #9ecbd1">
              房间型号
            </div>
            <div class="room">
              双人间
              <el-radio
                v-model="radio"
                label="2"
                style="width: 30px; margin-left: 167px; color: #9ecbd1"
              >
                <span></span>
              </el-radio>
            </div>
            <div class="room">
              四人间
              <el-radio
                v-model="radio"
                label="4"
                style="width: 30px; margin-left: 167px; color: #9ecbd1"
              >
                <span></span>
              </el-radio>
            </div>
          </div>
          <div class="group">
            <input required type="text" v-model="room_name" />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="label">房间名称</label>
          </div>
          <div class="group">
            <input required type="text" v-model="room_password" />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="label">房间密匙</label>
          </div>
          <img
            src="../assets/icons/general/hammer.png"
            style="margin-bottom: 15px;margin-top: 15px"
          />
          <div class="build" @click="build">创建</div>
          <br />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Back from '../components/Back'
import Dialogs from '../components/Dialogs.vue'
import { setTimeout } from 'timers'

export default {
  data: () => ({
    radio: '2',
    room_name: null,
    room_password: null
  }),
  components: {
    Back,
    Dialogs
  },
  methods: {
    build() {
      ;(async () => {
        try {
          const data = await this.api
            .post('room/data', {
              headers: { Authorization: localStorage.accessToken },
              json: {
                room_name: this.room_name,
                room_size: this.radio,
                room_password: this.room_password
              }
            })
            .json()

          this.$store.state.message = data.message
          this.$store.state.dialogVisible = true
          const that = this
          setTimeout(() => {
            that.$router.push(`/room/${data.data.room_id}`)
          }, 1500)
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
  background url('../assets/bgs/enter.jpg')
  background-size 100% 100%
  width 100%
  height 100%
  background-repeat no-repeat
  position absolute
  display grid
  grid-template-columns repeat(20, 5%)
  grid-template-rows repeat(20, 5%)

.user
  margin-top 0.8rem
  width 21rem
  grid-area 3 / 2 / 19 / 20
  background #ffffff
  border-radius 35px
  box-shadow inset 0px 0px 0px 1px rgba(0, 0, 0, 0.075), 0px 2px 8px rgba(102, 175, 233, 0.8)

.login
  margin-top 20px
  font-size 25px
  color #5f93ba

*
  box-sizing border-box

.form
  width 260px
  margin auto

.group
  margin-top 10px
  position relative
  margin-bottom 15px

.group > input
  font-size 18px
  padding 5px 5px 5px 5px
  display block
  width 260px
  border none
  border-bottom 1px solid #ffde92

.group > input:focus
  outline none

.label
  color #9ecbd1
  font-size 19px
  font-weight normal
  position absolute
  pointer-events none
  left 5px
  top 1px
  transition 0.2s ease all

.group > input:focus ~ label, input:valid ~ label
  top -10px
  font-size 14px
  color #5264ae

.bar
  position relative
  display block
  width 260px

.bar:before, .bar:after
  content ''
  height 2px
  width 0
  bottom 1px
  position absolute
  background #ffde92
  transition 0.2s ease all

.bar:before
  left 50%

.bar:after
  right 50%

.group > input:focus ~ .bar:before, .group > input:focus ~ .bar:after
  width 50%

.highlight
  position absolute
  height 60%
  width 100px
  top 25%
  left 0
  pointer-events none
  opacity 0.5

.group > input:focus ~ .highlight
  animation inputHighlighter 0.3s ease

@keyframes inputHighlighter
  from
    background #ffde92

  to
    width 0px
    background transparent

.room
  width 280px
  color #9ecbde
  font-size 18px

.room-choose div
  margin-bottom 10px
  font-size 19px

.build
  color #ffffff
  margin auto
  padding 8px
  width 140px
  background rgb(73, 177, 227)
  font-size 22px
  border 3px solid rgb(68, 108, 165)
  border-radius 100px
  letter-spacing 1.5px

.container
  width 260px
  border-bottom 1px solid #ffde92
  margin-top 20px
  margin-bottom 15px

.name
  font-size 18px
  color #9ecbde
  width 260px
  margin-bottom 10px

input
  color #9ecbde
  font-size 16px
</style>
