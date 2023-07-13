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
                   @click="clickFriend(item.userId, item.nickName, item.avatarUrl)"
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
              <div v-if="avatarUrl == '' && avatarUrl == null" style="background-color: white"></div>

              <!-- 选中某个用户 -->
              <div v-if="avatarUrl != '' && avatarUrl != null">
                <!--  top  -->
                <div style="height: 60px; display: flex; align-items: center;padding-left: 1%">
                  <el-avatar :size="46" :src="avatarUrl" shape="square" style="margin-right: 1%;cursor:pointer;"/>
                  <span style="font-size: 17px;">{{ currentUserName }}</span>
                </div>
                <!--  聊天内容展示  -->
                <div id="chat-content-show" style="height: 460px;background-color: white"></div>
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
                  <div id="chat-input-id" :contenteditable=contenteditable @input="limitText"></div>
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
      userInfo: {
        userId: '',
        avatarUrl: '',
      },
      contenteditable: true,
      currentUserName: '',
      avatarUrl: '',
      chatContent: '',
      chatContentHTML: '',
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
      ]
    }
  },

  created() {

  },

  mounted() {
    /**
     * 初始化WebSocket服务器：与Netty服务器建立WebSocket实时通讯连接
     */
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
        var socket = new WebSocket('ws://localhost:9099/ws')

        /**
         * 建立连接瞬间，将userId传递过去，Netty进行客户端数据保存
         */
        socket.onopen = () => {
          socket.send(JSON.stringify({userId: this.userId}))
        }

        /**
         * 接收服务端消息（展示到页面上）
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
     * 发送消息给指定用户
     */
    sendMessage() {
      // var xzb = '<div style="color: red">11111</div>'
      var xzb = '<div class="chat-container">\n' +
        '  <el-avatar :src="avatarUrl" shape="square" style="margin-right: 10px"/>\n' +
        // '  <el-popover\n' +
        // '    ref="popover"\n' +
        // '    placement="right"\n' +
        // '    value=true\n' +
        // '    content="我是内容"\n' +
        // '  />\n' +
        '11111111111111111111' +
        '</div>'
      document.getElementById('chat-content-show').insertAdjacentHTML('beforeend', xzb);
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
     * 监听聊天输入框
     */
    limitText() {
      this.chatContent = document.getElementById('chat-input-id').innerText
      var maxLength = 10
      var chatInput = document.getElementById('chat-input-id')
      var text = chatInput.textContent
      if (text.length > maxLength) {
        event.preventDefault()
      }
    },

    /**
     * 点击好友
     */
    clickFriend(userId, nickName, avatarUrl) {
      this.currentUserName = nickName
      this.userId = userId
      this.avatarUrl = avatarUrl
      document.getElementById('chat-input-id').innerText = ''
    }
  }
}
</script>

<style>
.chat-container {
  display: flex;
  align-items: flex-start;
}

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

.grid-content {
  border-radius: 4px;
  min-height: 36px;
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
</style>
