<template>
  <div>
    <!--  1.导航栏  -->
    <el-header class="header-cls">
      <!--   logo   -->
      <el-image class="header-logo" src="" :fit="fit"></el-image>
      <!--   左目录   -->
      <el-menu
        class="header-left-menu"
        mode="horizontal"
        background-color="transparent">
        <el-menu-item index="1" class="header-left-menu-font">
          社区广场
        </el-menu-item>
        <el-menu-item index="2" class="header-left-menu-font">狂欢派对</el-menu-item>
        <el-menu-item index="3" class="header-left-menu-font">好物商城</el-menu-item>
        <el-menu-item index="4" class="header-left-menu-font">关于作者</el-menu-item>
      </el-menu>
      <!--   头像   -->
      <el-avatar class="header-avatar" :size="50" :src="avatarUrl"></el-avatar>
      <!--   右目录   -->
      <div class="icon-div">
        <el-badge class="item" :value="2">
          <svg class="iconfont">
            <use xlink:href="#icon-biaoqiankuozhan_xiaoxi-152"></use>
          </svg>
          <div class="icon-font">通知</div>
        </el-badge>
      </div>
      <div class="icon-div">
        <el-badge class="item" :value="1">
          <svg class="iconfont">
            <use xlink:href="#icon-biaoqianA01_wode-55"></use>
          </svg>
          <div class="icon-font">好友</div>
        </el-badge>
      </div>
      <div class="icon-div">
        <svg class="iconfont">
          <use xlink:href="#icon-biaoqianA01_zhuanqu-53"></use>
        </svg>
        <div class="icon-font">会员</div>
      </div>
      <div class="icon-div">
        <svg class="iconfont">
          <use xlink:href="#icon-biaoqiankuozhan_xiangmu-292"></use>
        </svg>
        <div class="icon-font">作品</div>
      </div>
    </el-header>

    <!-- 2.聊天框 -->
    <div style="background-color: #292A2D">
      <div style="width: 78%;height: 760px;margin: auto;background-color: antiquewhite">
        <el-row :gutter="1">
          <!--  好友列表 -->
          <el-col :span="6">
            <div style="height: 756px">
              <!--  上边栏 -->
              <div style="background-color: red;height: 60px">
                <input style="background-color: antiquewhite">
              </div>
              <!--  好友列表  -->
              <div class="friend-item"
                   v-for="item in userList"
                   :key="item.userId"
                   @mouseover="hoverEffect($event, true)"
                   @mouseout="hoverEffect($event, false)"
                   @click="clickFriend(item.userId, item.nickName)"
              >
                <el-avatar style="float: left;" shape="square" :size="63" :src="item.avatarUrl"></el-avatar>
                <div
                  style="float: left;margin-left: 2%;margin-top:3.5%;font-size: 17px;font-family: 'Arial Rounded MT Bold'">
                  {{ item.nickName }}
                </div>
                <div style="float: right;margin-top: 3.5%;margin-right: 3.5%;color: #999999">11:02</div>
                <div style="padding-top: 40px;margin-left: 22.6%;font-size: 13px;color: #999999;">
                  {{ item.nickName }}：{{ item.lastContent }}
                </div>
              </div>
            </div>
          </el-col>
          <!--  聊天内容  -->
          <el-col :span="18">
            <div class="grid-content bg-purple" style="height: 760px">
              <!--  top  -->
              <div
                style="height: 60px; display: flex; align-items: center; justify-content: center">
                <span style="display: inline-block; vertical-align: middle;">{{ currentUserName }}</span>
              </div>
              <!--  mid  -->
              <div style="height: 460px;background-color: white"></div>
              <!--  内容输入框  -->
              <div style="height: 240px;background-color: white">
                <!-- 表情包 -->
                <div style="border: 1px solid red;">
                  <span style="margin-left: 2%">emoji</span>
                  <span style="margin-left: 2%">表情包</span>
                  <span style="margin-left: 2%">语音</span>
                  <span style="margin-left: 2%">视频</span>
                </div>
                <!-- 输入框 -->
                <div id="chat-input-id" v-model="chatContent" :contenteditable=contenteditable @input="limitText"></div>
                <el-button class="send-btn" size="small" @click="sendMessage()">发送</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import chatApi from '@/api/chat'

export default {
  data() {
    return {
      inputMessage: '',
      contenteditable: true,
      userId: 'xuzhibin',
      currentUserName: '',
      chatContent: '',
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
          avatarUrl: require('@/assets/avatar/dan.jpg'),
          nickName: '王老师',
          lastContent: '老徐，记得请我喝咖啡'
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

  /**
   * 查询好友列表
   */
  created() {

  },

  /**
   * 初始化WebSocket服务器：与Netty服务器建立WebSocket实时通讯连接
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
      var message = {
        msg: this.inputMessage,
        userId: this.userId
      }
      chatApi.sendMessage(message)
        .then(res => {
          this.inputMessage = ''
        })
    },

    /**
     * 限制输入框字数
     */
    limitText() {
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
    clickFriend(userId, nickName) {
      this.currentUserName = nickName
      this.userId = userId
    }
  }
}
</script>

<style>
.header-logo {
  float: left;
  width: 150px;
  cursor: pointer;
  height: 68px;
  margin-left: -1.4%;
}

.header-left-menu {
  width: 29.5%;
  float: left;
  margin-top: 6px;
  border-bottom: none !important;
}

.header-left-menu-font {
  color: antiquewhite !important;
  margin-left: 2%;
  font-size: 17px
}

.header-avatar {
  float: right;
  cursor: pointer;
  margin-top: 0.6%;
  margin-right: 5%;
  transition: transform 0.2s, margin-top 0.2s;
}

.header-avatar:hover {
  transform: scale(1.4) translateY(5px);
}

.header-cls {
  height: 68px !important;
  background-color: #303133;
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

.icon-div {
  float: right;
  margin-right: 3.0%;
  margin-top: 0.85%;
  cursor: pointer;
}

.icon-div:hover {
  animation: jump 1s;
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

.icon-font {
  color: antiquewhite;
  font-size: 12px
}

.iconfont {
  width: 1.7em;
  height: 1.7em;
}

.chat-footer el-input {
  flex: 1;
  margin-right: 10px;
}

.friend-item {
  height: 66px;
  cursor: pointer;
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
  padding: 1.2%;
}

.send-btn {
  float: right;
  margin-right: 2%;
}
</style>
