<template>
  <div style="margin-left: 100px">
    <div style="width: 500px; height: 500px; border: 1px solid black"></div>
    <el-input v-model="inputMessage" placeholder="请输入内容"></el-input>
    <el-button @click="sendMessage(inputMessage)">发送</el-button>
  </div>
</template>

<script>
import chatApi from '@/api/chat'

export default {
  data() {
    return {
      inputMessage: ''
    }
  },

  created() {

  },

  /**
   * 初始化WebSocket聊天室
   */
  mounted() {
    this.initWebSocket()
  },

  methods: {
    /**
     * 初始化WebSocket通信
     */
    initWebSocket() {
      // 判断当前浏览器是否支持WebSocket(老版本浏览器不支持)
      if (window.WebSocket) {
        // 初始化WebSocket连接
        var socket = new WebSocket('ws://localhost:9099/ws')

        /**
         * 建立连接
         */
        socket.onopen = () => {
          console.log('聊天室连接成功...')
        }

        /**
         * 接收服务端消息
         */
        socket.onmessage = (msg) => {
          socket.send(
            JSON.stringify({
              // 连接成功将，用户ID传给服务端
              uid: '123456'
            })
          )
        }

        /**
         * 出现异常
         */
        socket.onerror = () => {
          this.$message.error('出现异常信息')
        }
      } else {
        this.$message.error('当前浏览器不支持聊天室功能，请更换浏览器')
      }
    },

    /**
     * 发送消息给指定用户
     */
    sendMessage() {
      // 数据先写死
      var message = {
        msg: '你好啊',
        userId: '123456'
      }
      chatApi.sendMessage(message).then(msg => {
        console.log('消息发送成功')
      })
    },
  }
}
</script>

<style>

</style>
