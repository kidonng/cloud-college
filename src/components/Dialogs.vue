<template>
  <div>
    <el-dialog
      :visible.sync="this.$store.state.dialogVisible"
      title="提示"
      width="80%"
      :before-close="handleClose"
    >
      <span>{{ this.$store.state.message }}</span>
      <span class="dialog-footer" slot="footer">
        <el-button @click="handleClose" type="primary">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  methods: {
    handleClose() {
      this.$store.commit('changeDialog', false)
    }
  }
}
</script>
