<template>
  <div>
    <!--  1.导航栏  -->
    <headerComponent></headerComponent>

    <!-- 2.聊天框 -->
    <div style="background-color: #292A2D">
      <div style="width: 78%;height: 760px;margin: auto;">
        <el-row :gutter="1">
          <!--  2.1 好友列表 -->
          <el-col :span="6" style="background-color: antiquewhite">
            <div style="height: 756px">
              <!--  上边栏 -->
              <div style="height: 60px;">
                <input style="background-color: antiquewhite">
              </div>
              <!--  好友列表  -->
              <div class="friend-item"
                   v-for="item in userList"
                   :key="item.userId"
                   @mouseover="hoverEffect($event, true)"
                   @mouseout="hoverEffect($event, false)"
                   @click="clickFriend(item.userId, item.avatarUrl, item.nickName)"
              >
                <el-avatar style="float: left;" shape="square" :size="50" :src="item.avatarUrl"/>
                <div style="float: left;margin-left: 2%;margin-top:3.5%;font-size: 15px">
                  {{ item.nickName }}
                </div>
                <span style="float: right;margin-top: 3.5%;margin-right: 3.5%;color: #999999;font-size: 13px">
                  11:02
                </span>
                <div style="padding-top: 35px;margin-left: 19%;font-size: 13px;color: #999999;">
                  {{ item.nickName }}：1111
                </div>
              </div>
            </div>
          </el-col>

          <!--  2.2 聊天内容  -->
          <el-col :span="18" style="background-color: white">
            <div style="height: 760px">

              <!-- 选中用户 -->
              <div v-if="currentChatInfo.avatarUrl != ''">
                <!--  上边栏  -->
                <div
                  style="height: 60px; display: flex; align-items: center;padding-left: 1%;background-color: antiquewhite">
                  <el-avatar :size="46" :src="currentChatInfo.avatarUrl" shape="square" style="margin-right: 1%;cursor:pointer;"/>
                  <div style="font-size: 17px;">{{ currentChatInfo.userName }}</div>
                  <!--  语音、视频、详情ICON  -->
                </div>

                <!--  聊天窗口  -->
                <div id="chat-content-show" style="height: 460px;background-color: white;border-radius: 6px">
                  <div style="margin: 10px;display: flex; align-items: center;" v-for="item in chatContentList[this.currentChatInfo.userId]">
                    <el-avatar :src=item.avatarUrl shape="square" style="cursor:pointer"></el-avatar>
                    <div style="width: 600px">
                      <div v-if="item.userId == userInfo.userId" style="margin-left: 1.6%;background-color: antiquewhite;border-radius: 10px;display: inline-block;">
                        <div style="padding: 15px;font-size: 14px;word-break: break-all;">
                          {{ item.content }}
                        </div>
                      </div>
                      <div style="margin-left: 1.6%;background-color: antiquewhite;border-radius: 10px;display: inline-block;">
                        <div style="padding: 15px;font-size: 14px;word-break: break-all;">
                          {{ item.content }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--  内容输入  -->
                <div style="height: 240px;background-color: white">
                  <div style="border: 1px solid red">
                    <span style="margin-left: 2%">emoji</span>
                    <span style="margin-left: 2%">表情包</span>
                    <span style="margin-left: 2%">语音</span>
                    <span style="margin-left: 2%">视频</span>
                  </div>
                  <div id="chat-input-id" contenteditable="true" @input="listenInput()"/>
                  <el-button class="send-btn" size="small" @click="sendMessage()">发送</el-button>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/header'
import chatApi from '@/api/chat'

export default {
  components: {
    HeaderComponent
  },

  data() {
    return {
      // 登录用户信息
      userInfo: {
        userId: '',
        avatarUrl: require('@/assets/avatar/avatar.jpg')
      },

      // 当前选中聊天用户
      currentChatInfo: {
        userId: '3',
        nickName: '',
        avatarUrl: ''
      },

      // 好友列表 + 聊天记录
      userList: [
        {
          userId: '1',
          avatarUrl: require('@/assets/avatar/wen.jpg'),
          nickName: '小温'
        }
      ],

      // 聊天信息
      chatContentList: {
        '1': [
          {
            userId: '1',
            avatarUrl: require('@/assets/avatar/wen.jpg'),
            nickName: '小温',
            content: '哈哈哈哈哈，我真的服了哈哈哈哈哈，我真的服了哈哈哈哈哈，我真的服了哈哈哈哈哈，我真的服了哈哈哈哈哈，我真的服了'
          },
          {
            userId: '1',
            avatarUrl: require('@/assets/avatar/wen.jpg'),
            nickName: '小温',
            content: '哈哈哈哈哈'
          },
          {
            userId: '1',
            avatarUrl: require('@/assets/avatar/wen.jpg'),
            nickName: '小温',
            content: '哈哈哈哈哈'
          },
        ],
        '2': [
          {
            userId: '2',
            avatarUrl: require('@/assets/avatar/wen.jpg'),
            nickName: '小温',
            content: '哈哈哈哈哈，我真的服了哈222222222了'
          },
          {
            userId: '2',
            avatarUrl: require('@/assets/avatar/wen.jpg'),
            nickName: '小温',
            content: '哈哈哈哈哈22222222222'
          },
          {
            userId: '2',
            avatarUrl: require('@/assets/avatar/wen.jpg'),
            nickName: '小温',
            content: '哈哈哈哈哈22222222222'
          }
        ]
      }
    }
  },

  created() {

  },

  mounted() {
    // this.initWebSocket()
  },

  methods: {
    /**
     * 初始化WebSocket通信
     */
    initWebSocket() {
      // 判断当前浏览器是否支持WebSocket(老版本浏览器不支持)
      if (window.WebSocket) {
        // 当前用户Channel与Netty服务器建立连接
        const socket = new WebSocket('ws://localhost:9099/ws')

        // 建立连接瞬间，Netty服务器进行连接
        socket.onopen = () => {
          socket.send(JSON.stringify({userId: this.userId}))
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
     * 发送消息给指定用户
     */
    sendMessage() {
      // 1.登陆用户主动发送消息


      // 2.封装消息信息
      var message = {
        msg: this.chatContent,
        userId: this.userId
      }

      // 3.调用服务端接口，发送消息
      chatApi.sendMessage(message)
        .then(res => {
          this.chatContent = ''
        })
    },

    /**
     * 点击好友
     */
    clickFriend(userId, avatarUrl, nickName) {
      console.log(userId + avatarUrl + nickName)
      this.currentChatInfo.userId = userId
      this.currentChatInfo.avatarUrl = avatarUrl
      this.currentChatInfo.userName = nickName
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
  }
}
</script>

<style>
.search-cls video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.chat-footer el-input {
  flex: 1;
  margin-right: 10px;
}

.friend-item {
  height: 52px;
  cursor: pointer;
  margin-top: 2px;
}

.friend-item:hover {
  background-color: #ccc;
}

#chat-input-id {
  height: 180px;
  width: 100%;
  overflow: auto;
  font-size: 17px;
  padding: 1.4%;
}

.send-btn {
  float: right;
  margin-right: 2%;
}

#chat-content-show {
  overflow: auto;
}
</style>
