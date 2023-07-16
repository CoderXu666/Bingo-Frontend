<template>
  <div>
    <!--  1.导航栏  -->
    <headerComponent></headerComponent>

    <!-- 2.聊天框 -->
    <div style="background-color: #292A2D">
      <div style="width: 78%;height: 760px;margin: auto;background-color: antiquewhite">
        <el-row :gutter="1">
          <!--  好友列表 -->
          <el-col :span="6">
            <div style="height: 756px">
              <!--  上边栏 -->
              <div style="height: 60px">
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
                <el-avatar style="float: left;" shape="square" :size="60" :src="item.avatarUrl"/>
                <div style="float: left;margin-left: 2%;margin-top:3.5%;font-size: 15px">
                  {{ item.nickName }}
                </div>
                <span style="float: right;margin-top: 3.5%;margin-right: 3.5%;color: #999999;font-size: 13px">
                  11:02
                </span>
                <div style="padding-top: 40px;margin-left: 21.5%;font-size: 13px;color: #999999;">
                  {{ item.nickName }}：{{ item.lastContent }}
                </div>
              </div>
            </div>
          </el-col>
          <!--  聊天内容  -->
          <el-col :span="18">
            <div style="height: 760px">
              <!-- 未选择任何用户 -->
              <div v-if="currentChatInfo.avatarUrl == '' && currentChatInfo.avatarUrl == null" style="background-color: white"></div>

              <!-- 选中某个用户 -->
              <div v-if="currentChatInfo.avatarUrl != '' && currentChatInfo.avatarUrl != null">
                <!--  top  -->
                <div style="height: 60px; display: flex; align-items: center;padding-left: 1%">
                  <el-avatar :size="46" :src="currentChatInfo.avatarUrl" shape="square" style="margin-right: 1%;cursor:pointer;"/>
                  <span style="font-size: 17px;">{{ currentChatInfo.currentUserName }}</span>
                </div>
                <!--  聊天内容展示  -->
                <div id="chat-content-show" style="height: 460px;background-color: white">
                  <div style="margin-left: 6px;padding-top: 6px;border: 1px solid red">
                    <el-tooltip class="item" :content="currentChatInfo.chatContent" placement="right">
                      <el-avatar :src=currentChatInfo.avatarUrl shape="square"></el-avatar>
                    </el-tooltip>
                  </div>
                </div>
                <!--  内容输入框  -->
                <div style="height: 240px;background-color: white">
                  <!-- 表情包 -->
                  <div style="border: 1px solid red">
                    <span style="margin-left: 2%">emoji</span>
                    <span style="margin-left: 2%">表情包</span>
                    <span style="margin-left: 2%">语音</span>
                    <span style="margin-left: 2%">视频</span>
                  </div>
                  <!-- 输入框 -->
                  <div id="chat-input-id" :contenteditable=contenteditable @input=""></div>
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
        avatarUrl: '',
        userName: '',
        chatContent: '许褚，去领30军棍，块！罢了！免了吧！不！不免；许褚，去领30军棍，块！罢了！免了吧免；许褚，去领30军棍，块！罢了！免了吧！不！不免',
      },

      // 好友列表
      userList: [
        {
          userId: '111111',
          avatarUrl: require('@/assets/avatar/wen.jpg'),
          nickName: '小温',
          lastContent: '徐志哈，别睡了，起来学习'
        },
        {
          userId: '22222',
          avatarUrl: require('@/assets/avatar/zhou.jpg'),
          nickName: '葵葵',
          lastContent: '路上全是腿,没开玩笑！'
        },
        {
          userId: '33333',
          avatarUrl: require('@/assets/avatar/liu.jpg'),
          nickName: '美羊羊',
          lastContent: '家人们，谁懂啊'
        },
        {
          userId: '4444',
          avatarUrl: require('@/assets/avatar/ru.jpg'),
          nickName: '艳茹',
          lastContent: '地震啦'
        }
      ],

      // 聊天消息列表
      chatMsgList: [

      ],

      contenteditable: true,
    }
  },

  created() {

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
        const socket = new WebSocket('ws://localhost:9099/ws')

        // 建立连接瞬间，Netty服务器进行连接
        socket.onopen = () => {
          socket.send(JSON.stringify({userId: this.userId}))
        }

        // 监听接收服务端消息（接收消息一定来自于左侧）
        socket.onmessage = (msg) => {
          document.getElementById('content').append(msg.data)
        }

        // 异常
        socket.onerror = () => {
          this.$message.error('出现异常信息')
        }
      } else {
        this.$message.error('当前浏览器不支持聊天功能，请更换浏览器!')
      }
    },

    /**
     * 发送消息给指定用户（主动发送是当前用户，一定在右侧）
     */
    sendMessage() {
      // 1.登陆者主动发送消息，消息展示到右侧

      // 2. 调用后台接口，发送消息给用户
      var message = {
        msg: this.chatContent,
        userId: this.userId
      }
      chatApi.sendMessage(message)
        .then(res => {
          this.chatContent = ''
        })
    },

    /**
     * 点击好友
     */
    clickFriend(userId, avatarUrl, nickName) {
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
  height: 60px;
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

.item {
  margin: 4px;
}
</style>
