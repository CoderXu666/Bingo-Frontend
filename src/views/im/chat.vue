<template>
  <div style="margin-left: 100px">
    <div id="content" style="width: 500px; height: 500px; border: 1px solid black"></div>
    <el-input v-model="inputMessage" placeholder="请输入内容"></el-input>
    <el-button @click="sendMessage(inputMessage)">发送</el-button>
  </div>
</template>

<script>
import chatApi from '@/api/chat'

export default {
  data() {
    return {
      inputMessage: '',
      userId: 'xuzhibin'
    }
  },

  /**
   * 查询好友列表
   */
  created() {

  },

  /**
   * 初始化WebSocket聊天室
   * 与Netty服务器建立WebSocket实时通讯连接
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
         * 建立连接瞬间，将userId传递过去，Netty进行客户端数据保存
         */
        socket.onopen = () => {
          socket.send(JSON.stringify({userId: this.userId}))
        }

        /**
         * 接收服务端消息
         */
        socket.onmessage = (msg) => {
          document.getElementById('content').append(msg.data)
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
      // 封装发送的用户数据
      var message = {
        msg: this.inputMessage,
        userId: this.userId
      }
      chatApi.sendMessage(message).then(res => {
        this.inputMessage = ''
      })
    }
  }
}
</script>

<style>

</style>
