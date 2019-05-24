<template>
  <div id="contain">
    <!-- <div v-if="show_letter" class="letter">
      <img
        ref="letter1"
        @click="
          $refs.letter1.classList.add('hide')
          $refs.letter2.classList.remove('hide')
        "
        @transitionend="$refs.letter1.classList.add('hide2')"
        src="../assets/icons/letter/envelope_closed.png"
      />

      <div ref="letter2" class="hide">
        <img src="../assets/icons/letter/envelope_open.png" />
        <div
          @click="
            $refs.letter1.classList.add('hide')
            $refs.letter2.classList.remove('hide')
          "
          class="button"
        >
          确认收到
        </div>
      </div>

      <img ref="letter3" class="hide" src="../assets/icons/letter/letter.jpg" />
    </div> -->

    <div class="icon search">
      <img
        @click="alert('我会说这个功能还在咕吗!')"
        src="../assets/icons/general/search.png"
      />
    </div>
    <div class="icon">
      <img
        @click="alert('我会说这个功能还在咕吗!')"
        src="../assets/icons/general/user.png"
      />
    </div>
    <router-link class="enter" :to="to">进入</router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    number: null,
    show_letter: false,
    to: '/create'
  }),
  methods: {
    alert(msg) {
      alert(msg)
    },
    make() {
      ;(async () => {
        try {
          const data = await this.api
            .post('room/data', {
              headers: { Authorization: this.$store.state.token },
              json: {
                room_name: this.room_name,
                room_size: this.room_size,
                room_password: this.room_password
              }
            })
            .json()

          this.$store.state.message = data.message
          this.$store.commit('changeDialog', true)
          if (data.status === 1) {
            this.$router.push('/')
          }
        } catch (e) {
          console.log(e)
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

        if (!data.data.user.joined_room) this.show_letter = true
        if (data.data.roommates.length)
          this.to = `/room/${data.data.room.room_id}`
      } catch (e) {
        console.log(e)
      }
    })()
  }
}
</script>

<style scoped lang="stylus">
#contain
  background url('../assets/bgs/enter.jpg')
  background-size 100% 100%
  width 100%
  height 100%
  background-repeat no-repeat
  position fixed

.icon
  position relative
  left 1.5rem
  top 6rem

  &, & img
    max-width 55px

.search
  margin-bottom 2rem

.enter
  color #ffffff
  position relative
  top 15rem
  padding 8px 50px
  background rgb(73, 177, 227)
  font-size 22px
  border 3px solid rgb(68, 108, 165)
  border-radius 100px
  letter-spacing 1.5px
</style>
