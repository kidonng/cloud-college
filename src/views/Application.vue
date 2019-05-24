<template>
  <div>
    <button @click="get_time">发送</button>
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: null
  }),
  sockets: {
    connect() {
      console.log('连接成功')
    },
    message(data) {
      this.message += data.message
    }
  },
  methods: {
    get_time() {
      this.$socket.emit('get_time', { ss: 'nmsl' })
      this.$socket.emit('message', { user_id: 1, message: '12' })
    }
  },
  mounted() {
    this.$socket.emit('join_room', { token: this.$store.state.token })
  }
}
</script>

<style scoped lang="stylus">
el-dialog
  background aqua
</style>
