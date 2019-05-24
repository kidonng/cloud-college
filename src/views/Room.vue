<template>
  <div
    id="bg"
    ref="bg"
    :class="{ two: room.room_size === 2, four: room.room_size === 4 }"
    v-if="room"
  >
    <div class="icons">
      <Back></Back>
      <div>
        <img
          @click="alert('我会说这个功能还在咕吗!')"
          src="../assets/icons/general/info.png"
        />
      </div>
      <div @click="$refs.bg.classList.toggle('light_off')">
        <img src="../assets/icons/general/light.png" />
      </div>
      <div>
        <img
          @click="$refs.music.paused ? $refs.music.play() : $refs.music.pause()"
          src="../assets/icons/general/music_on.png"
        />
        <audio
          ref="music"
          :src="require('../assets/misc/bgm.mp3')"
          loop
          preload
        ></audio>
      </div>
      <div>
        <img
          @click="alert('我会说这个功能还在咕吗!')"
          src="../assets/icons/general/user.png"
        />
      </div>
    </div>
    <img class="avatar" id="person" src="../assets/avatars/boy.png" />
  </div>
</template>

<script>
import Back from '../components/Back'
import Dialogs from '../components/Dialogs.vue'
import { setTimeout } from 'timers'

export default {
  data: () => ({
    room: null
  }),
  components: {
    Back,
    Dialogs
  },
  methods: {
    alert(msg) {
      alert(msg)
    }
  },
  mounted() {
    ;(async () => {
      try {
        const data = await this.api('user/current', {
          headers: { Authorization: localStorage.accessToken }
        }).json()

        this.room = data.data.room
      } catch (e) {
        console.log(e)
      }
    })()

    const that = this
    setTimeout(() => {
      document.querySelector('#bg').onclick = e => {
        document.querySelector('#person').style.top = `${e.pageY - 40}px`
        document.querySelector('#person').style.left = `${e.pageX - 40}px`
      }
    }, 200)
  }
}
</script>

<style lang="stylus" scoped>
#bg
  background-size 100% 100%
  width 100%
  height 100%
  background-repeat no-repeat
  position fixed

.avatar
  width 5rem
  background #fff
  border-radius 100%
  border 2px solid #9fbde1
  position absolute
  top 50%
  left 40%
  transition all 0.3s ease

.two
  background url('../assets/bgs/dorm_for_2_light_on.png')

  &.light_off
    background url('../assets/bgs/dorm_for_2_light_off.png')

.four
  background url('../assets/bgs/dorm_for_4_light_on.jpg')

  &.light_off
    background url('../assets/bgs/dorm_for_4_light_off.jpg')

.icons
  position relative
  left 18.5rem

  .back
    margin-bottom 1rem

  div
    width 44px

  img
    max-width 44px

  div
    margin-bottom 0.5rem
</style>
