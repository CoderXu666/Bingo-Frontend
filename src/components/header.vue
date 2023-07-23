<template>
  <!--  1.导航栏  -->
  <el-header class="header-cls">
    <!--   Logo   -->
    <el-image class="header-logo" :src="logoUrl" @click="clickLogo()"></el-image>
    <!--   左目录   -->
    <el-menu
      class="header-left-menu"
      mode="horizontal"
      background-color="transparent">
      <el-menu-item index="1" class="header-left-menu-font">社区广场</el-menu-item>
      <el-menu-item index="2" class="header-left-menu-font">狂欢派对</el-menu-item>
      <el-menu-item index="3" class="header-left-menu-font">关于作者</el-menu-item>
    </el-menu>
    <!--   头像   -->
    <span @click="clickAvatar"><el-avatar class="header-avatar" :size="50" :src="userInfo.avatarUrl"></el-avatar></span>
    <!--   右目录   -->
    <div class="icon-div">
      <el-badge :value="2">
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
      style="opacity: 94%"
      width="30%"
      center
    >
      <h2 style="text-align: center;color: antiquewhite;margin-top: -2%">账号登录</h2>
      <div style="height: 250px;display: flex; justify-content: center;">
        <div style="width: 300px">
          <div>
            <span style="margin-right: 4%;color: antiquewhite">账号：</span>
            <el-input style="display: inline-block;width: 220px" v-model="userInfo.accountId"></el-input>
          </div>
          <div style="margin-top: 5%">
            <span style="margin-right: 4%;color: antiquewhite">密码：</span>
            <el-input style="display: inline-block;width: 220px" v-model="userInfo.password"></el-input>
          </div>
          <div style="margin-top: 5%;display: flex;align-items: center;">
            <span style="color: antiquewhite">验证码：</span>
            <el-input style="display: inline-block;width: 130px;margin-right: 1%" v-model="formData.captcha"></el-input>
            <el-image :src="captchaUrl" @click="captcha()" style="border-radius: 4px"></el-image>
          </div>
          <div style="text-align: center;">
            <div style="color: antiquewhite;margin-top: 8%;font-size: 4px">
              <span>没有账号？</span>
              <span @click="clickRegister">点击注册</span>
            </div>
            <el-button type="primary" size="medium" style="margin-top: 6%">登 录</el-button>
          </div>
        </div>
      </div>
    </el-dialog>

    <!-- 注册 -->
    <el-dialog
      title="登录"
      :visible.sync="registerDialog"
      style="opacity: 94%"
      width="30%"
      center
    >
      <h2 style="text-align: center;color: antiquewhite;margin-top: -2%">账号登录</h2>
      <div style="height: 250px;display: flex; justify-content: center;">
        <div style="width: 300px">
          <div>
            <span style="margin-right: 4%;color: antiquewhite">账号：</span>
            <el-input style="display: inline-block;width: 220px" v-model="userInfo.accountId"></el-input>
          </div>
          <div style="margin-top: 5%">
            <span style="margin-right: 4%;color: antiquewhite">密码：</span>
            <el-input style="display: inline-block;width: 220px" v-model="userInfo.password"></el-input>
          </div>
          <div style="margin-top: 5%;display: flex;align-items: center;">
            <span style="color: antiquewhite">验证码：</span>
            <el-input style="display: inline-block;width: 130px;margin-right: 1%" v-model="formData.captcha"></el-input>
            <el-image :src="captchaUrl" @click="captcha()" style="border-radius: 4px"></el-image>
          </div>
          <div style="text-align: center;">
            <div style="color: antiquewhite;margin-top: 8%;font-size: 4px">
              <span>已有账号？</span>
              <span @click="clickLogin()">点击登录</span>
            </div>
            <el-button type="primary" size="medium" style="margin-top: 6%">登 录</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      // 表单输入信息
      formData: {
        accountId: '',
        nickName: '',
        password: '',
        avatarUrl: '',
        captcha: ''
      },

      // 登录用户信息
      userInfo: {
        userId: '',
        nickName: '',
        accountId: '',
        password: '',
        avatarUrl: require('@/assets/avatar/null.png')
      },

      // 好友消息数、通知数量
      chatCount: '',
      noticeCount: '',

      logoUrl: require('@/assets/logo/logo.png'),
      captchaUrl: '',
      loginDialog: false,
      registerDialog: false
    }
  },

  /**
   * 生命周期函数
   */
  created() {
    this.captcha()
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
     * 生成验证码
     */
    captcha() {
      this.captchaUrl = 'http://localhost:10000/user/captcha' + '?' + Math.random()
    },

    /**
     * 跳转注册页
     */
    clickRegister() {

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
}
</style>
