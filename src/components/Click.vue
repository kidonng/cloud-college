<template>
  <div id="container">
    <div class="bed" @click="bed1"></div>
    <!--    v-if语句限制点击者-->
    <div
      class="bed_choose"
      :style="{ display: bed_style }"
      @click="bed_style = 'none'"
    >
      <span>睡觉</span>
      <span>冥想</span>
      <span>玩手机</span>
    </div>

    <div class="bed2" @click="bed2"></div>
    <div
      class="bed2_choose"
      :style="{ display: bed2_style }"
      @click="bed2_style = 'none'"
    >
      <span>睡觉</span>
      <span>冥想</span>
      <span>玩手机</span>
    </div>

    <div class="chair" @click="chair"></div>
    <div class="chair2" @click="chair"></div>
    <div class="book" @click="book"></div>
    <div class="chat">
      <input placeholder="请输入文字" /><button>发送</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    bed_style: 'none',
    bed2_style: 'none'
  }),
  methods: {
    bed1() {
      this.bed_style = this.bed_style === 'none' ? 'block' : 'none'
    },
    bed2() {
      this.bed2_style = this.bed2_style === 'none' ? 'block' : 'none'
    },
    chair() {
      alert('chair')
    },
    book() {
      alert('book')
    }
  }
}
</script>

<style lang="stylus">
input
  width 15rem
  height 1.8rem
  border-radius 10px
  border-shadow none
  border 3px solid orange

#container
  width 100%
  height 100%
  display grid
  grid-template-columns repeat(10, 10%)
  grid-template-rows repeat(20, 5%)

.bed
  grid-area 6 / 7 / 11 / 10

.bed2
  grid-area 14 / 8 / 19 / 10

.chair
  grid-area 11 / 4 / 12 / 5

.chair2
  grid-area 15 / 3 / 16 / 4

.book
  grid-area 5 / 1 / 9 / 3

.bed_choose
  grid-area 6 / 4 / 7 / 8
  background #f3f4f5
  border 1px solid #000000
  border-radius 10px
  margin auto

  span
    display inline-block
    width 3rem
    padding-top 10px
    padding-bottom 10px

.bed2_choose
  grid-area 17 / 4 / 19 / 8
  background #f3f4f5
  border 1px solid #000000
  border-radius 10px
  margin auto

  span
    display inline-block
    width 3rem
    padding-top 10px
    padding-bottom 10px

.chat
  grid-area 19 / 2 / 21 / 12
</style>
