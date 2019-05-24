<template>
  <div id="contain">
    <back></back>
    <div class="user">
      <dialogs></dialogs>
      <div class="login" style="margin-bottom: 50px">-个人信息-</div>
      <div class="form">
        <div class="container2">
          <div class="group">
            <input required type="text" v-model="username" />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="label">昵称</label>
          </div>
          <div class="room-choose">
            <span>性别</span>
            <span>
              <el-radio label="1" v-model="radio">
                <span></span>
              </el-radio>
              男生
            </span>
            <span>
              <el-radio label="0" v-model="radio">
                <span></span>
              </el-radio>
              女生
            </span>
          </div>
          <div class="group">
            <input required type="text" v-model="birthday" />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="label">生日</label>
          </div>
          <div class="group">
            <input required type="text" v-model="individuality" />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="label">个性签名</label>
          </div>
        </div>

        <div class="edit" @click="save">保存</div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import Back from '../components/Back.vue'
import Dialogs from '../components/Dialogs.vue'

export default {
  data: () => ({
    radio: '1',
    username: null,
    birthday: null,
    individuality: null
  }),
  components: {
    Back,
    Dialogs
  },
  methods: {
    save() {
      ;(async () => {
        try {
          const data = await this.api
            .put('user/current', {
              headers: { Authorization: localStorage.accessToken },
              json: {
                username: this.username,
                birthday: this.birthday,
                individuality: this.individuality,
                gender: this.radio
              }
            })
            .json()

          if (data.status === 1) {
            this.$router.push('/enter')
          }
        } catch (e) {
          this.$store.commit('message', e)
          this.$store.commit('changeDialog', true)
        }
      })()
    }
  },
  mounted() {
    ;(async () => {
      try {
        const data = await this.api('user/current', {
          headers: { Authorization: localStorage.accessToken }
        }).json()

        this.$store.state.username = data.data.user.username
      } catch (e) {
        console.log(e)
      }
    })()
  }
}
</script>

<style lang="stylus" scoped>
@import '../user.styl'

.login
  margin-left 30px

.room-choose
  display flex
  justify-content space-between
  margin-top 18px
  margin-left 5px
  margin-bottom 16px
</style>
