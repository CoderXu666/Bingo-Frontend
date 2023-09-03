<template>
  <div
    style="background-color: #292A2D;width: 80%;height: 600px;margin: auto;margin-top: 4.5%;border-radius: 20px">
    <el-row :gutter="10">
      <!--  左侧列 -->
      <el-col :span="2" style="margin-top: 26px">
        <el-avatar style="margin-left: 16px" shape="circle" :size="55" :src="this.loginUserInfo.avatarUrl"/>
      </el-col>

      <!--  好友列表 -->
      <el-col :span="5" style="margin-top: 26px">
        <div class="friend-item"
             v-for="item in userList"
             style="background-color: #323335;margin-top: 5px;margin-bottom: 5px;border-radius: 8px"
             @mouseover="hoverEffect($event, true)"
             @mouseout="hoverEffect($event, false)"
             @click="clickFriend(item.userId, item.avatarUrl, item.nickName)"
        >
          <el-avatar style="float: left;" shape="square" :size="58" :src="item.avatarUrl"/>
          <div style="float: left;margin-left: 2%;margin-top:3.5%;font-size: 15px">
            {{ item.nickName }}
          </div>
          <span style="float: right;margin-top: 3.5%;margin-right: 3.5%;color: #999999;font-size: 13px">
            11:02
          </span>
          <div style="padding-top: 35px;margin-left: 19%;font-size: 13px;color: #999999">
            {{ item.nickName }}：1111
          </div>
        </div>
      </el-col>

      <!--  聊天框  -->
      <el-col :span="16" style="background-color: #323335;border-radius: 20px;margin-top: 30px">
        <div v-if="curChatInfo.userId != ''">
          <!--  上边栏  -->
          <div style="height: 60px; display: flex; align-items: center;padding-left: 1%;">
            <el-avatar :size="46" :src="curChatInfo.avatarUrl" shape="square"
                       style="margin-right: 1%;cursor:pointer;"/>
            <div style="font-size: 17px;color: antiquewhite">{{ curChatInfo.userName }}</div>
          </div>

          <!--  聊天内容展示  -->
          <div id="chat-content-show" style="height: 440px;border-radius: 6px;">
            <div v-for="item in chatContentList[curChatInfo.userId]">
              <!--  接收信息  -->
              <div v-if="item.userId !== loginUserInfo.userId"
                   style="width: 90%;display: flex;align-items: center;margin-left: 1%;margin-top: 1%;">
                <span style="margin-right: 6px">
                  <el-avatar :src=item.avatarUrl shape="square" style="cursor:pointer"/>
                </span>
                <div style="background-color: antiquewhite;border-radius: 10px;">
                  <div style="padding: 15px;font-size: 14px;word-break: break-all;">
                    {{ item.content }}
                  </div>
                </div>
              </div>
              <!--  主动发送  -->
              <div v-if="item.userId === loginUserInfo.userId"
                   style="float: right;width: 80%;margin-right: 1%;margin-top:1%;display: flex; align-items: center;justify-content: flex-end">
                <div
                  style="margin-left: 1.6%;background-color: mediumspringgreen;border-radius: 10px;display: inline-block;">
                  <div style="padding: 15px;font-size: 14px;word-break: break-all">
                    {{ item.content }}
                  </div>
                </div>
                <span style="margin-left: 6px">
                  <el-avatar :src=item.avatarUrl shape="square" style="cursor:pointer;"/>
                </span>
              </div>
            </div>
          </div>
          <!--  emoji  -->
          <Picker
            style="width: 320px;height: 250px"
            v-show=this.showEmojiFlag
            :showSearch="false"
            :showPreview="false"
            @select="addEmoji"
          />
          <!--  内容输入Container  -->
          <div id="chat-input-container">
            <!--  真正输入框  -->
            <el-input id="chat-input-id" @input="listenInput()" placeholder="开始您的交流！" v-model="chatMsg"/>
            <el-button @click="showEmoji()" size="mini" style="float: right">emoji展示</el-button>
          </div>

        </div>
      </el-col>

      <!--  预留区 -->
      <el-col :span="6" style="margin-top: 26px">

      </el-col>
    </el-row>
  </div>
</template>

<script>
import chatApi from '@/api/chat'
import {Picker} from 'emoji-mart-vue'
import 'emoji-mart-vue/css/emoji-mart.css'

export default {
  components: {
    Picker
  },

  data() {
    return {
      // 登录用户信息
      loginUserInfo: {
        userId: '3',
        avatarUrl: require('@/assets/avatar/avatar.jpg'),
        nickName: '徐志斌'
      },

      // 当前选中聊天用户
      curChatInfo: {
        userId: '',
        nickName: '',
        avatarUrl: ''
      },

      // 聊天好友列表
      userList: [
        {
          userId: '1',
          avatarUrl: require('@/assets/avatar/zhangruonan.png'),
          nickName: '章若楠'
        },
        {
          userId: '3',
          avatarUrl: require('@/assets/avatar/avatar.jpg'),
          nickName: '小徐'
        },
      ],

      // 聊天框消息
      chatMsg: '',

      // emoji展示标识
      showEmojiFlag: '',

      // 聊天信息
      chatContentList: {
        '1': [
          {
            userId: '1',
            avatarUrl: require('@/assets/avatar/zhangruonan.png'),
            nickName: '章若楠',
            content: '哈哈哈哈哈，我真哈哈哈哈哈，我真的服了哈哈哈哈哈哈'
          },
          {
            userId: '1',
            avatarUrl: require('@/assets/avatar/zhangruonan.png'),
            nickName: '章若楠',
            content: '哈哈哈哈哈'
          },
          {
            userId: '3',
            avatarUrl: require('@/assets/avatar/avatar.jpg'),
            nickName: '徐志斌',
            content: '我真服了！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈，我真的我真服了！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈，我真的我真服了！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈，我真的我真服了！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈，我真的我真服了！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈，我真的我真服了！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈，我真的我真服了！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈，我真的我真服了！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈，我真的我真服了！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈，我真的我真服了！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈，我真的'
          }
        ],
        '3': [
          {
            userId: '1',
            avatarUrl: require('@/assets/avatar/zhangruonan.png'),
            nickName: '章若楠',
            content: '哈哈哈哈哈，我真的服了哈222222222了'
          },
          {
            userId: '1',
            avatarUrl: require('@/assets/avatar/zhangruonan.png'),
            nickName: '章若楠',
            content: '哈哈哈哈哈22222222222'
          },
          {
            userId: '1',
            avatarUrl: require('@/assets/avatar/zhangruonan.png'),
            nickName: '章若楠',
            content: '哈哈哈哈哈22222222222'
          },
          {
            userId: '3',
            avatarUrl: require('@/assets/avatar/avatar.jpg'),
            nickName: '徐志斌',
            content: '哈哈哈哈哈22222222222'
          }
        ]
      }
    }
  },

  created() {
    // 判断是否登录，未登录回到首页并提示
    const token = localStorage.getItem('bingo_token')
    if (!token) {
      this.$router.push('/')
      this.$message.warning('您还未登录呢，讨厌~')
    }

    // 查询好友列表、聊天记录
    this.getChatList()
  },

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
        // 当前用户Channel与Netty服务器建立连接
        const socket = new WebSocket('ws://localhost:10086/ws')

        // 建立WebSocket连接
        socket.onopen = () => {
          socket.send(this.userId)
        }

        // 监听接收服务端消息
        socket.onmessage = (msg) => {
          document.getElementById('content').append(msg.data)
        }

        // 发生异常
        socket.onerror = () => {
          this.$message.error('连接聊天服务器出现异常信息')
        }
      } else {
        this.$message.error('当前浏览器不支持聊天功能，请更换浏览器!')
      }
    },

    /**
     * 查询好友列表信息
     */
    getChatList() {
      const userId = this.getUrlIdParam()
      chatApi.chatList(userId)
        .then(res => {
          console.log(res)
        })
        .catch(e => {
          console.log(e)
        })
    },

    /**
     * 选中emoji到输入框
     */
    addEmoji(e) {
      this.chatMsg += e.native
    },

    /**
     * 展示emoji列表
     */
    showEmoji() {
      if (this.showEmojiFlag === true) {
        this.showEmojiFlag = false
      } else {
        this.showEmojiFlag = true
      }
    },

    /**
     * 获取url的?后第一个参数id
     */
    getUrlIdParam() {
      const url = window.location.href
      const p = url.split('?')[1]
      const params = new URLSearchParams(p)
      return params.get('id')
    },

    /**
     * 发送消息给指定用户
     */
    sendMessage() {
      // 登陆用户主动发送消息
      const loginUserInfo = this.loginUserInfo
      this.insertChatMessage(loginUserInfo.userId, loginUserInfo.avatarUrl, loginUserInfo.nickName, this.chatContent)

      // 封装消息信息
      const message = {
        msg: this.chatContent,
        userId: this.userId
      }

      // 聊天框滚动到最底部
      const chatContentShow = document.getElementById('chat-content-show')
      setTimeout(() => {
        chatContentShow.scrollTop = chatContentShow.scrollHeight
      }, 0)

      // 清空输入框，聚焦输入框
      const chatInput = document.getElementById('chat-input-id')
      chatInput.innerText = null
      chatInput.focus()

      // 调用服务端接口，发送消息
      // chatApi.sendMessage(message)
      //   .then(res => {
      //     this.chatContent = null
      //   })
    },

    /**
     * 点击好友
     */
    clickFriend(userId, avatarUrl, nickName) {
      this.curChatInfo.userId = userId
      this.curChatInfo.avatarUrl = avatarUrl
      this.curChatInfo.userName = nickName
    },

    /**
     * 鼠标聚焦置灰
     */
    hoverEffect(event, isHover) {
      if (isHover) {
        event.currentTarget.classList.add('hover')
      } else {
        event.currentTarget.classList.remove('hover')
      }
    },

    /**
     * 监听聊天输入框
     */
    listenInput() {
      this.chatContent = document.getElementById('chat-input-id').innerText
    },

    /**
     * 插入聊天信息
     */
    insertChatMessage(userId, avatarUrl, nickName, content) {
      const newMessage = {
        userId: userId,
        avatarUrl: avatarUrl,
        nickName: nickName,
        content: content
      }
      this.chatContentList[userId].push(newMessage)
    }
  }
}
</script>

<style>
.chat-footer el-input {
  flex: 1;
  margin-right: 10px;
}

.friend-item {
  color: antiquewhite;
  height: 58px;
  cursor: pointer;
  margin-top: 2px;
}

.friend-item:hover {
  background-color: #ccc;
}

#chat-input-container {
  align-items: center;
  width: 95%;
  border-radius: 10px;
  overflow: auto;
  font-size: 14px;
  padding: 1.2%;
  background-color: antiquewhite;
  display: inline-block;
  max-height: 40px;
}

#chat-input-id {
  border-radius: 20px;
  width: 80%;
  display: inline-block;
}

#chat-content-show {
  overflow: auto;
}
</style>

