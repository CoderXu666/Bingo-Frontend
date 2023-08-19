<template>
  <!--  1.导航栏  -->
  <el-header class="header-cls">
    <!--   Logo   -->
    <el-image class="header-logo" :src="logoUrl" @click="clickLogo()"/>
    <!--   左目录   -->
    <el-menu
      class="header-left-menu"
      mode="horizontal"
      background-color="transparent">
      <el-menu-item index="1" class="header-left-menu-font">Github</el-menu-item>
      <el-menu-item index="2" class="header-left-menu-font">加入我们</el-menu-item>
      <el-menu-item index="3" class="header-left-menu-font">关于我</el-menu-item>
    </el-menu>
    <!--   头像   -->
    <span @click="clickAvatar">
      <el-avatar class="header-avatar" :size="50" :src="userInfo.avatarUrl"/>
    </span>
    <!--   右目录   -->
    <div class="icon-div">
      <el-badge :value="noticeCount">
        <svg class="iconfont">
          <use xlink:href="#icon-biaoqiankuozhan_xiaoxi-152"></use>
        </svg>
        <div class="icon-font">通知</div>
      </el-badge>
    </div>
    <router-link key="expand" :to="{path: '/chat', query: {id: userInfo.userId}}">
      <div class="icon-div">
        <el-badge :value="chatCount">
          <svg class="iconfont">
            <use xlink:href="#icon-biaoqianA01_wode-55"></use>
          </svg>
          <div class="icon-font">好友</div>
        </el-badge>
      </div>
    </router-link>
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
      <div class="icon-font">发布</div>
    </div>

    <!-- 登录框 -->
    <el-dialog
      title="登录"
      :visible.sync="loginDialog"
      style="opacity: 92%;"
      width="30%"
      center
    >
      <h2 style="text-align: center;color: antiquewhite;margin-top: -3%">登录账号</h2>
      <div style="height: 250px;display: flex; justify-content: center;">
        <div style="width: 300px">
          <div>
            <span style="margin-right: 4%;color: antiquewhite">账号：</span>
            <el-input style="display: inline-block;width: 220px" v-model="loginFormData.accountId"/>
          </div>
          <div style="margin-top: 5%">
            <span style="margin-right: 4%;color: antiquewhite">密码：</span>
            <el-input style="display: inline-block;width: 220px" v-model="loginFormData.passWord"/>
          </div>
          <div style="margin-top: 5%;display: flex;align-items: center;">
            <span style="color: antiquewhite">验证码：</span>
            <el-input style="display: inline-block;width: 130px;margin-right: 1%" v-model="loginFormData.captcha"/>
            <el-image :src="captchaUrl" @click="captcha()" style="border-radius: 4px"/>
          </div>
          <div style="text-align: center;">
            <div style="color: antiquewhite;margin-top: 8%;font-size: 4px">
              <span>没有账号？</span>
              <span style="cursor: pointer;color: #409EFF"
                    @click="loginDialog = false;registerDialog = true;">点击注册</span>
            </div>
            <el-button type="primary" size="medium" style="margin-top: 6%" @click="login">登 录</el-button>
          </div>
        </div>
      </div>
    </el-dialog>

    <!-- 注册 -->
    <el-dialog
      title="注册账号"
      :visible.sync="registerDialog"
      style="opacity: 94%"
      width="30%"
      center
    >
      <div style="height: 450px">
        <h2 style="text-align: center;color: antiquewhite;margin-top: -3%">注册账号</h2>
        <div style="height: 250px;display: flex; justify-content: center;">
          <div style="width: 300px">
            <!--  上传头像 -->
            <!--            <div>-->
            <!--              <span style="margin-right: 4%;color: antiquewhite">头像：</span>-->
            <!--              <el-upload-->
            <!--                class="avatar-uploader"-->
            <!--                action="http://localhost:10000/user/upload_avatar"-->
            <!--                :show-file-list="false"-->
            <!--                :on-success="handleAvatarSuccess"-->
            <!--                :before-upload="beforeAvatarUpload">-->
            <!--                <img v-if="imageUrl" :src="imageUrl" class="avatar">-->
            <!--                <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
            <!--              </el-upload>-->
            <!--            </div>-->
            <div>
              <span style="margin-right: 4%;color: antiquewhite">账号：</span>
              <el-input style="display: inline-block;width: 220px" v-model="registerFormData.accountId"/>
            </div>
            <div style="margin-top: 5%">
              <span style="margin-right: 4%;color: antiquewhite">密码：</span>
              <el-input style="display: inline-block;width: 220px" v-model="registerFormData.passWord" show-password/>
            </div>
            <div style="margin-top: 5%">
              <span style="margin-right: 4%;color: antiquewhite">昵称：</span>
              <el-input style="display: inline-block;width: 220px" v-model="registerFormData.nickName"/>
            </div>
            <div style="margin-top: 5%">
              <span style="margin-right: 4%;color: antiquewhite">邮件：</span>
              <el-input style="display: inline-block;width: 220px" v-model="registerFormData.email"/>
            </div>
            <div style="margin-top: 5%">
              <span style="margin-right: 4%;color: antiquewhite">性别：</span>
              <el-select v-model="registerFormData.gender" placeholder="请选择">
                <el-option
                  v-for="item in genderList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  <span style="float: left">{{ item.label }}</span>
                </el-option>
              </el-select>
            </div>
            <div style="margin-top: 5%;display: flex;align-items: center;">
              <span style="color: antiquewhite">验证码：</span>
              <el-input style="display: inline-block;width: 130px;margin-right: 1%" v-model="registerFormData.captcha"/>

              <div
                @click="sendEmail()"
                v-bind:class="{ active: isActive }"
                class="verifyPhone-button"
              >
                <span v-show="isActive" style="font-size: 13px;cursor: pointer">
                  获取验证码
                </span>
                <span v-show="!isActive">{{ count }}s</span>
              </div>

            </div>
            <div style="text-align: center">
              <div style="color: antiquewhite;margin-top: 8%;font-size: 4px">
                <span>已有账号？</span>
                <span style="cursor: pointer;color: #409EFF"
                      @click="registerDialog = false;loginDialog = true;">点击登录</span>
              </div>
              <el-button type="primary" size="medium" style="margin-top: 6%" @click="register">注 册</el-button>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </el-header>
</template>

<script>
import headerApi from '@/api/header'

export default {
  data() {
    return {
      // 注册表单输入信息
      registerFormData: {
        accountId: '',
        passWord: '',
        nickName: '',
        gender: '1',
        email: ''
      },

      // 登录表单输入
      loginFormData: {
        accountId: '',
        passWord: '',
        captcha: ''
      },

      // 登录后用户信息
      userInfo: {
        avatarUrl: require('@/assets/avatar/null.png'),
        userId: '',
        nickName: '',
        accountId: '',
        passWord: '',
        gender: ''
      },

      // 好友消息数、通知数量
      chatCount: '',
      noticeCount: '',

      // 发送邮件按钮
      isActive: true,
      count: 0,
      timer: null,

      logoUrl: require('@/assets/logo/logo.png'),
      captchaUrl: '',
      loginDialog: false,
      registerDialog: false,

      // 头像上传
      imageUrl: '',
      dialogVisible: false,

      // 性别
      genderList: [
        {
          value: '1',
          label: '男'
        },
        {
          value: '2',
          label: '女'
        },
        {
          value: '3',
          label: '通吃'
        }
      ]
    }
  },

  /**
   * 生命周期函数
   */
  created() {
    this.captcha()
    this.resolveToken(localStorage.getItem('bingo_token'))
  },

  methods: {
    /**
     * 点击Logo
     */
    clickLogo() {
      this.$router.push('/')
    },

    /**
     * 点击头像
     */
    clickAvatar() {
      // 如果没有登录，弹出登录框
      if (this.userInfo.userId === '') {
        this.loginDialog = true
      }
    },

    /**
     * 注册
     */
    register() {
      headerApi.register(this.registerFormData)
        .then(res => {
          this.$message.success('注册成功')
        })
        .catch(e => {
          this.$message.error('注册失败')
        })
    },

    /**
     * 登录功能
     * 1.登录成功后，将token信息保存到客户端的localStorage（使用Cookie也可以）
     * 2.以后每次客户端发起请求，都会从localStorage中获取token信息，解析成用户信息
     */
    login() {
      headerApi.login()
        .then(res => {
          localStorage.setItem('bingo_token', res.data.data)
          this.$message.success('登陆成功')
        })
        .catch(e => {
          this.$message.error('登录异常')
        })
    },

    /**
     * 解析Token
     */
    resolveToken(token) {
      if (token === '' || token === null) {
        return
      }
      headerApi.resolveToken(token)
        .then(res => {
          this.userInfo = res.data.data
        })
        .catch(e => {
          this.$message.error('解析Token功能异常:' + e)
        })
    },

    /**
     * 退出登录
     */
    logout() {
      localStorage.removeItem('bingo_token')
      window.location.href('/')
    },

    /**
     * 生成验证码
     */
    captcha() {
      this.captchaUrl = 'http://localhost:10000/user/customer/captcha' + '?' + Math.random()
    },

    /**
     * 头像相关
     */
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },

    /**
     * 头像上传回调函数
     */
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },

    /**
     * 发送邮件验证码
     */
    sendEmail() {
      headerApi.sendEmail(this.registerFormData.email)
        .then(res => {
          if (!this.timer) {
            this.count = 60
            this.isActive = false
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= 60) {
                this.count--
              } else {
                this.isActive = true
                clearInterval(this.timer)
                this.timer = null
              }
            }, 1000)
          }
          this.$message.success('已发送验证码至您的邮箱，请查收')
        })
        .catch(e => {
          this.$message.error('验证码发送失败')
        })
    }
  }
}
</script>

<style scoped>
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

.icon-div {
  float: right;
  margin-right: 3.0%;
  margin-top: 0.85%;
  cursor: pointer;
}

.icon-div:hover {
  animation: jump 1s;
}

.icon-font {
  color: antiquewhite !important;
  font-size: 12px;
}

.iconfont {
  width: 1.7em;
  height: 1.7em;
}

.header-left-menu-font {
  color: antiquewhite !important;
  margin-left: 2%;
  font-size: 15px
}

::v-deep .el-dialog {
  background-color: #303133;
  border-radius: 10px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.verifyPhone-button {
  border: .0625rem solid #ccc;
  background: #f7f7f7;
  color: #999;
  border-radius: .3125rem;
  width: 5rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
}

.active {
  border: .0625rem solid #3980ea;
  background: #fff;
  color: #3980ea;
}
</style>
