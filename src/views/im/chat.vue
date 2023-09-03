<template>
  <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh;">
    <video src="@/assets/video/background.mp4" autoplay muted loop
           style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; object-fit: cover;"/>
    <div style="background-color: #292A2D;width: 80%;margin: auto;border-radius: 20px;opacity: 0.86">
      <el-row :gutter="14">
        <!--  左侧列 -->
        <el-col :span="1" style="margin-top: 26px;height: 600px;">
          <div>
            <el-avatar style="margin-left: 20px" shape="circle" :size="55" :src="this.loginUserInfo.avatarUrl"/>
            <el-avatar style="margin-left: 20px" shape="circle" :size="55" :src="this.loginUserInfo.avatarUrl"/>
            <el-avatar style="margin-left: 20px" shape="circle" :size="55" :src="this.loginUserInfo.avatarUrl"/>
          </div>
          <div>
            <el-avatar style="margin-left: 20px" shape="circle" :size="55" :src="this.loginUserInfo.avatarUrl"/>
            <el-avatar style="margin-left: 20px" shape="circle" :size="55" :src="this.loginUserInfo.avatarUrl"/>
            <el-avatar style="margin-left: 20px" shape="circle" :size="55" :src="this.loginUserInfo.avatarUrl"/>
          </div>
        </el-col>

        <!--  好友列表 -->
        <el-col :span="5" style="margin-top: 26px;margin-left: 3%">
          <div class="friend-item"
               v-for="item in userList"
               style="background-color: #323335;margin-top: 5px;margin-bottom: 5px;border-radius: 10px"
               @mouseover="hoverEffect($event, true)"
               @mouseout="hoverEffect($event, false)"
               @click="clickFriend(item.userId, item.avatarUrl, item.nickName)"
          >
            <el-avatar style="float: left;" shape="square" :size="55" :src="item.avatarUrl"/>
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
        <el-col :span="13" style="background-color: #323335;border-radius: 10px;margin-top: 30px">
          <div v-if="curChatInfo.userId != ''">
            <!--  上边栏  -->
            <div style="height: 60px; display: flex; align-items: center;padding-left: 1%;">
              <el-avatar :size="46" :src="curChatInfo.avatarUrl" shape="square"
                         style="margin-right: 1%;cursor:pointer;"/>
              <div style="font-size: 17px;color: antiquewhite">{{ curChatInfo.userName }}</div>
            </div>

            <!--  聊天内容展示  -->
            <div id="chat-content-show" style="height: 460px;border-radius: 10px;">
              <div v-for="item in chatContentList[curChatInfo.userId]">
                <!--  接收信息  -->
                <div v-if="item.userId !== loginUserInfo.userId"
                     style="width: 90%;display: flex;align-items: center;margin-left: 1%;margin-top: 1%;">
                <span style="margin-right: 6px">
                  <el-avatar :src=item.avatarUrl shape="square" style="cursor:pointer"/>
                </span>
                  <div style="background-color: #34A8FF;border-radius: 10px;">
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
            <!--  内容输入Container  -->
            <div id="chat-input-container">
              <!-- 语音消息 -->
              <svg style="width: 2em;height: 2em;margin-right: 1%;cursor:pointer;">
                <use xlink:href="#icon-biaoqianA01_wode-55"></use>
              </svg>
              <!-- 输入框 -->
              <span style="width: 70%">
                <el-input id="chat-input-id" placeholder="请开始你的表演......" v-model="chatMsg" type="text"/>
              </span>
              <!-- emoji -->
              <svg style="width: 2em;height: 2em;margin-left: 1%;cursor:pointer;">
                <use xlink:href="#icon-biaoqianA01_wode-55"></use>
              </svg>
              <!-- 语音、视频 -->
              <svg style="width: 2em;height: 2em;;cursor:pointer;">
                <use xlink:href="#icon-biaoqianA01_wode-55"></use>
              </svg>
              <!-- 礼物打赏 -->
              <svg style="width: 2em;height: 2em;;cursor:pointer;">
                <use xlink:href="#icon-biaoqianA01_wode-55"></use>
              </svg>
              <!-- 文件 -->
              <svg style="width: 2em;height: 2em;;cursor:pointer;">
                <use xlink:href="#icon-biaoqianA01_wode-55"></use>
              </svg>
              <!-- 发送 -->
              <svg style="width: 2em;height: 2em;;cursor:pointer;">
                <use xlink:href="#icon-biaoqianA01_wode-55"></use>
              </svg>
            </div>
          </div>
        </el-col>

        <!--  用户信息、功能框架 -->
        <el-col :span="4" style="margin-top: 30px" v-if="curChatInfo.userId != ''">
          <!--  用户信息、群聊列表  -->
          <div style="height: 340px;background-color: #323335;border-radius: 10px">
            用户信息
          </div>
          <!--  Emoji  -->
          <Picker
            style="width: 100%;height: 216px;background-color: #323335;margin-top: 10px;"
            :include="['people']"
            :showSearch="false"
            :showPreview="false"
            :showCategories="false"
            @select="addEmoji"
            :i18n="i18n"
          />
        </el-col>
      </el-row>
    </div>
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

      // vue-smart-emoji国际化
      i18n: {
        categories: {
          people: '',
        }
      },

      // 聊天框消息
      chatMsg: '',

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
        // TODO 这里要处理一大堆逻辑，发送消息发给谁
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
      chatApi.chatList()
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
  height: 55px;
  cursor: pointer;
  margin-top: 2px;
}

.friend-item:hover {
  background-color: #ccc;
}

#chat-input-container {
  width: 99%;
  border-radius: 10px;
  overflow: auto;
  padding: 0.6%;
  max-height: 40px;
  display: flex;
  align-items: center;
}

#chat-input-id {
  border-radius: 20px;
  font-size: 14px;
  background-color: #323335;
  color: white;
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 40px;
  resize: vertical;
}

#chat-content-show {
  overflow: auto;
}
</style>

