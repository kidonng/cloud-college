<template>
  <div id="contain">
    <back></back>
    <div class="user">
      <div class="login">-房间信息-</div>
      <div class="form">
        <div class="container2" v-for="item in kind">
          <div class="name" v-if="item.name !== '室友 (入住天数)'">
            <span style="display: inline-block; float: left">{{
              item.name
            }}</span>
            <div style="float: left; margin-left: 10px">
              {{ item.content }}
            </div>
            <br />
          </div>
          <div class="name" v-else>
            <span style="display: inline-block; float: left"
              >室友 (入住天数)</span
            >
            <br />
            <div v-for="item of roommates">
              <div class="roommate" v-for="day of joinDay">
                {{ item }}({{ day }})
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
        </div>

        <div class="button">
          <div class="edit">退房</div>
          <div class="edit2">更改</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Back from '../components/Back'

export default {
  components: { Back },
  data: () => ({
    kind: [
      {
        name: '寝室名:',
        content: '我是你爸爸'
      },
      {
        name: '房间状态:',
        content: '已满'
      },
      {
        name: '室友(入住天数)',
        content: this.roommates
      },
      {
        name: '房间型号:',
        content: '四人房'
      },
      {
        name: '创建天数:',
        content: '99天'
      },
      {
        name: '房间密匙:',
        content: '1234'
      }
    ],
    roommates: ['我是你爷爷', '深海鱼biss', '孙桑', '卢本伟'],
    joinDay: null
  }),
  mounted() {
    ;(async () => {
      try {
        const data = await this.api('user/current', {
          headers: { Authorization: localStorage.accessToken }
        }).json()
        this.$store.state.username = data.data.user.username
        console.log(data.data.roommates)
        this.roommates = data.data.roommates.username
        this.joinDay = data.data.roommates.join_time
        this.kind[0].content = data.data.room.room_name
        this.kind[1].content = data.data.room.count
        this.kind[3].content = data.data.room.creat_time
        // this.kind[4].content = data.data.room.key
        // 没有数据
      } catch (e) {
        console.log(e)
      }
    })()
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

.user
  margin-top 0.8rem
  width 21rem
  grid-area 3 / 2 / 19 / 20
  background #ffffff
  border-radius 35px
  box-shadow inset 0px 0px 0px 1px rgba(0, 0, 0, 0.075), 0px 2px 8px rgba(102, 175, 233, 0.8)

.login
  width 212px
  margin-top 20px
  font-size 25px
  color #5f93ba

.form
  width 260px
  margin auto
  font-size 19px
  color #9ecbd1

.edit
  color #ffffff
  width 80px
  margin-top 35px
  margin-bottom 25px
  padding 6px
  background rgb(73, 177, 227)
  font-size 22px
  border 3px solid rgb(68, 108, 165)
  border-radius 100px
  letter-spacing 1.5px
  float left

.edit2
  color #ffffff
  width 80px
  margin-top 35px
  margin-bottom 25px
  padding 6px
  background rgb(73, 177, 227)
  font-size 22px
  border 3px solid rgb(68, 108, 165)
  border-radius 100px
  letter-spacing 1.5px
  float right

.container2
  width 260px
  margin-top 15px
  margin-bottom 15px

.name
  width 260px

  span
    margin-left 5px

.change
  font-size 15px
  color #ffffff
  float right
  width 50px
  padding 3px
  border-radius 50px
  background rgb(73, 177, 227)

.roommate
  float left
  margin-top 3px
  margin-left 45px
</style>
