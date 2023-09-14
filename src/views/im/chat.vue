<template>
  <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh;">
    <video src="@/assets/video/background.mp4" autoplay muted loop
           style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; object-fit: cover;"/>
    <div style="background-color: #292A2D;width: 80%;margin: auto;border-radius: 20px;opacity: 0.86">
      <el-row :gutter="14">
        <!--  左侧列 -->
        <el-col :span="1" style="margin-top: 26px;height: 600px;">
          <!--  头像 -->
          <el-avatar style="margin-left: 20px;margin-bottom: 10px" shape="circle" :size="56"
                     :src="loginUserInfo.avatarUrl"/>
          <!--  其他按钮 -->
          <el-avatar style="margin-left: 20px;margin-top: 10px" shape="circle" :size="45"
                     :src="loginUserInfo.avatarUrl"/>
          <el-avatar style="margin-left: 20px;margin-top: 10px" shape="circle" :size="45"
                     :src="loginUserInfo.avatarUrl"/>
        </el-col>

        <!--  好友列表 -->
        <el-col :span="5" style="margin-top: 26px;margin-left: 3%">
          <div class="friend-item"
               v-for="item in userShowList"
               style="background-color: #323335;margin-top: 5px;margin-bottom: 5px;border-radius: 10px"
               @mouseover="hoverEffect($event, true)"
               @mouseout="hoverEffect($event, false)"
               @click="clickFriend(item.uid, item.avatarUrl, item.nickName)"
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
          <div v-if="curChatInfo.uid !== ''">
            <!--  上边栏  -->
            <div style="height: 60px; display: flex; align-items: center;padding-left: 1%;">
              <el-avatar :size="46" :src="curChatInfo.avatarUrl" shape="square"
                         style="margin-right: 1%;cursor:pointer;"/>
              <div style="font-size: 17px;color: antiquewhite">{{ curChatInfo.nickName }}</div>
            </div>

            <!--  聊天内容展示  -->
            <div id="chat-content-show" style="height: 460px;border-radius: 10px;">
              <div v-for="item in chatRecordList[curChatInfo.uid]">
                <!--  接收信息  -->
                <div v-if="item.uid !== loginUserInfo.uid"
                     style="width: 90%;display: flex;align-items: center;margin-left: 1%;margin-top: 1%;">
                  <span style="margin-right: 6px">
                    <el-avatar :src=curChatInfo.avatarUrl shape="square" style="cursor:pointer"/>
                  </span>
                  <!--  文字消息  -->
                  <div style="background-color: #34A8FF;border-radius: 10px;">
                    <div style="padding: 15px;font-size: 14px;word-break: break-all;">
                      {{ item.chatContent }}
                    </div>
                  </div>
                  <!--  图片消息  -->
                  <!--  语音消息  -->
                  <!--  文件消息  -->
                  <!--  礼物消息  -->
                </div>
                <!--  主动发送  -->
                <div v-if="item.uid === loginUserInfo.uid"
                     style="float: right;width: 80%;margin-right: 1%;margin-top:1%;display: flex; align-items: center;justify-content: flex-end">
                  <div
                    style="margin-left: 1.6%;background-color: mediumspringgreen;border-radius: 10px;display: inline-block;">
                    <div style="padding: 15px;font-size: 14px;word-break: break-all">
                      {{ item.chatContent }}
                    </div>
                  </div>
                  <span style="margin-left: 6px">
                    <el-avatar :src=loginUserInfo.avatarUrl shape="square" style="cursor:pointer;"/>
                  </span>
                </div>
              </div>
            </div>
            <!--  内容输入Container  -->
            <div id="chat-input-container">
              <!-- 语音消息 -->
              <svg style="width: 2em;height: 2em;margin-right: 1%;cursor:pointer;">
                <use xlink:href="#icon-yuyin"></use>
              </svg>
              <!-- 输入框 -->
              <span style="width: 70%">
                <el-input id="chat-input-id" placeholder="请开始你的表演......" v-model="content"
                          type="text"/>
              </span>
              <!-- emoji -->
              <svg style="width: 1.8em;height: 1.8em;margin-left: 0.6%;cursor:pointer;">
                <use xlink:href="#icon-emoji"></use>
              </svg>
              <!-- 礼物 -->
              <svg style="width: 1.8em;height: 1.8em;margin-left: 0.6%;cursor:pointer;">
                <use xlink:href="#icon-liwu"></use>
              </svg>
              <!-- 视频 -->
              <svg style="width: 1.9em;height: 1.9em;margin-left: 0.6%;cursor:pointer;">
                <use xlink:href="#icon-shipin"></use>
              </svg>
              <!-- 文件 -->
              <svg style="width: 1.8em;height: 1.8em;margin-left: 0.6%;cursor:pointer;">
                <use xlink:href="#icon-wenjianjia"></use>
              </svg>
              <!-- 发送 -->
              <svg style="width: 1.8em;height: 1.8em;margin-left: 0.6%;cursor:pointer;" @click="this.sendMessage">
                <use xlink:href="#icon-fasong"></use>
              </svg>
            </div>
          </div>
        </el-col>

        <!--  用户信息、功能框架 -->
        <el-col :span="4" style="margin-top: 30px" v-if="curChatInfo.uid != ''">
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
import headerApi from '@/api/header'
import {Picker} from 'emoji-mart-vue'
import 'emoji-mart-vue/css/emoji-mart.css'

export default {
  components: {
    Picker
  },

  data() {
    return {
      // 登录用户
      loginUserInfo: null,

      // 选中用户
      curChatInfo: {
        uid: '',
        avatarUrl: '',
        nickName: ''
      },

      // 聊天会话列表
      userShowList: null,
      // 好友聊天记录信息
      chatRecordList: null,

      // vue-smart-emoji国际化
      i18n: {
        categories: {
          people: ''
        }
      },

      // 输入框消息内容、类型
      content: '',
      type: '0',

      // 接收聊天消息体
      receiveRecord: {
        uid: '',
        goalId: '',
        chatContent: '',
        type: '',
        createTime: ''
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

    // 查询登录用户信息
    this.getLoginUserInfo(token)

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
      if (window.WebSocket) {
        const socket = new WebSocket('ws://localhost:10086/')

        // 1.建立WebSocket连接
        socket.onopen = () => {
          socket.send(this.getUrlId())
        }

        // 2.监听WebSocket Server发送消息
        socket.onmessage = res => {
          // json-bigint第三方库
          const jsonBigInt = require('json-bigint')
          const content = new jsonBigInt({storeAsString: true}).parse(res.data)
          const chatRecord = {
            uid: content.uid,
            goalId: content.goalId,
            type: content.type,
            chatContent: content.chatContent
          }

          // 页面上插入元素
          this.chatRecordList[chatRecord.uid].push(chatRecord)

          // 聊天框滚动到最底部
          this.rollBottom()
        }

        // 3.WebSocket连接异常
        socket.onerror = () => {
          this.$message.error('连接聊天服务器出现异常信息')
        }
      } else {
        this.$message.error('当前浏览器不支持聊天功能，请更换浏览器!')
      }
    },

    /**
     * 解析Token，查询用户信息
     */
    getLoginUserInfo(token) {
      headerApi.resolveToken(token)
        .then(res => {
          this.loginUserInfo = res.data.data
        })
        .catch(e => {
          this.$message.error('用户身份信息异常，请重新登录~')
        })
    },

    /**
     * 查询好友列表信息
     */
    getChatList() {
      chatApi.chatList()
        .then(res => {
          this.userShowList = res.data.data['chatShow']
          this.chatRecordList = res.data.data['chatRecord']
        })
        .catch(e => {
          console.log(e)
        })
    },

    /**
     * 获取url的?后第一个参数id
     */
    getUrlId() {
      const url = window.location.href
      const p = url.split('?')[1]
      const params = new URLSearchParams(p)
      return params.get('id')
    },

    /**
     * 选中emoji到输入框
     */
    addEmoji(e) {
      this.content += e.native
    },

    /**
     * 聊天页面滚动到底部
     */
    rollBottom() {
      const chatContentShow = document.getElementById('chat-content-show')
      setTimeout(() => {
        chatContentShow.scrollTop = chatContentShow.scrollHeight
      }, 0)
    },

    /**
     * 发送消息给指定用户
     */
    sendMessage() {
      // 登陆用户主动发送消息（这里手动初始化，否则会用对象引用，一个很烦人的Bug）
      const chatRecord = {
        uid: this.loginUserInfo.uid,
        goalId: this.curChatInfo.uid,
        type: this.type,
        chatContent: this.content
      }

      // 调用服务端接口，发送消息
      chatApi.sendChatRecord(chatRecord)
        .then(res => {
          this.chatRecordList[this.curChatInfo.uid].push(chatRecord)
          this.content = null
          this.rollBottom()
        })
    },

    /**
     * 点击好友
     */
    clickFriend(uid, avatarUrl, nickName) {
      this.curChatInfo.uid = uid
      this.curChatInfo.avatarUrl = avatarUrl
      this.curChatInfo.nickName = nickName
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

