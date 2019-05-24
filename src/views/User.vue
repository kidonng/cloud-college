<template>
  <div id="contain">
    <back></back>
    <div class="user" v-if="edit === true">
      <dialogs></dialogs>
      <div class="login">-我-</div>
      <div class="head-portrait"></div>
      <div class="form">
        <div class="container">
          <div class="name">
            <span style="display: inline-block; float: left">昵称</span>
            <div style="float: left;margin-left: 10px">{{ username }}</div>
            <br />
          </div>
        </div>
        <div class="room-choose">
          <div
            style="font-size: 19px; width: 53px; color: #9ecbd1; float: left"
          >
            性别
          </div>
          <span style="font-size: 19px; color: #9ecbd1">
            男生
            <el-radio
              label="1"
              style="width: 30px; color: #9ecbd1"
              v-model="radio"
            >
              <span></span>
            </el-radio>
          </span>
          <span style="font-size: 19px; color: #9ecbd1">
            女生
            <el-radio
              label="2"
              style="width: 30px; color: #9ecbd1"
              v-model="radio"
            >
              <span></span>
            </el-radio>
          </span>
        </div>

        <div class="container2" v-for="item in kind">
          <div class="name">
            <span style="display: inline-block; float: left">{{
              item.name
            }}</span>
            <div
              v-if="item.name === '邮箱'"
              style="float: left; margin-left: 10px; font-size: 15px"
            >
              {{ item.value }}
            </div>
            <div
              v-else-if="item.name === '个性签名'"
              style="float: left; margin-left: 10px; font-size: 16px"
            >
              {{ item.value }}
            </div>
            <div v-else style="float: left; margin-left: 10px">
              {{ item.value }}
            </div>
            <div class="change" v-if="item.name === '密码'" @click="change">
              更改
            </div>
            <br />
          </div>
        </div>

        <div class="edit" @click="change">编辑</div>
        <br />
      </div>
    </div>

    <div class="user" v-else>
      <dialogs></dialogs>
      <div class="login" style="margin-bottom: 50px">-我-</div>
      <div class="form">
        <div class="room-choose">
          <div
            style="font-size: 19px; width: 53px; color: #9ecbd1; float: left"
          >
            性别
          </div>
          <span style="font-size: 19px; color: #9ecbd1">
            男生
            <el-radio
              label="1"
              style="width: 30px; color: #9ecbd1"
              v-model="radio"
            >
              <span></span>
            </el-radio>
          </span>
          <span style="font-size: 19px; color: #9ecbd1">
            女生
            <el-radio
              label="0"
              style="width: 30px; color: #9ecbd1"
              v-model="radio"
            >
              <span></span>
            </el-radio>
          </span>
        </div>

        <div class="container2">
          <div class="group">
            <input required type="text" v-model="username" />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="label">用户名</label>
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
    edit: true,
    userList: null,
    roomId: null,
    radio: '',
    // 后端没有返回数据,
    email: null,
    //没有数据
    kind: [
      {
        name: '我的房间号',
        value: '没有数据'
      },
      {
        name: '邮箱',
        value: null
      },
      {
        name: '生日',
        value: '没有数据'
      },
      {
        name: '个性签名',
        value: '没有数据'
      },
      {
        name: '密码:',
        value: '***********'
      }
    ],
    username: this.$store.state.username,
    birthday: '2',
    individuality: '3'
  }),
  components: {
    Back,
    Dialogs
  },
  methods: {
    change() {
      this.edit = !this.edit
      ;(async () => {
        try {
          const data = await this.api('user/current').json()

          console.log(data)
        } catch (e) {
          console.log(e)
        }
      })()
    },
    save() {
      this.edit = !this.edit
      ;(async () => {
        try {
          const data = await this.api
            .put('user/current', {
              headers: { Authorization: localStorage.accessToken },
              json: {
                username: this.username,
                birthday: this.birthday,
                individuality: this.individuality
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
  },
  mounted() {
    ;(async () => {
      try {
        const data = await this.api('user/current', {
          headers: { Authorization: localStorage.accessToken }
        }).json()

        this.$store.state.username = data.data.user.username
        // this.kind[0] = data.data.room.room_id
        //没有数据
        this.kind[1].value = data.data.user.email
      } catch (e) {
        console.log(e)
      }
    })()
  }
}
</script>

<style lang="stylus" scoped>
@import '../user.styl'
</style>
