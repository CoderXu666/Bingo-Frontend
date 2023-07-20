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
    <span @click="clickAvatar"><el-avatar class="header-avatar" :size="50" :src="avatarUrl"></el-avatar></span>
    <!--   右目录   -->
    <div class="icon-div">
      <el-badge :value="2">
        <svg class="iconfont">
          <use xlink:href="#icon-biaoqiankuozhan_xiaoxi-152"></use>
        </svg>
        <div class="icon-font">通知</div>
      </el-badge>
    </div>

    <router-link key="expand" :to="{path: '/chat', query: {id: this.userId}}">
      <div class="icon-div">
        <el-badge :value="1">
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
      width="30%"
      center
    >
      <div style="height: 250px;display: flex; justify-content: center;">
        <div style="width: 300px">
          <div>
            <span style="margin-right: 4%">账号：</span>
            <el-input style="display: inline-block;width: 220px" v-model="accountId"></el-input>
          </div>
          <div style="margin-top: 5%">
            <span style="margin-right: 4%">密码：</span>
            <el-input style="display: inline-block;width: 220px" v-model="password"></el-input>
          </div>
          <div style="margin-top: 5%;display: flex;align-items: center;">
            <span>验证码：</span>
            <el-input style="display: inline-block;width: 130px;margin-right: 1%" v-model="captchaContent"></el-input>
            <el-image :src="captchaUrl" @click="captcha()" style="border-radius: 4px"></el-image>
          </div>
          <div style="display: flex; justify-content: center;">
            <div>还未注册？点击注册</div>
            <el-button type="primary" size="medium">登 录</el-button>
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
      logoUrl: require('@/assets/logo/logo.png'),
      avatarUrl: require('@/assets/avatar/null.png'),
      userId: '',
      accountId: '',
      password: '',

      captchaContent: '',
      captchaUrl: '',
      apiCaptchaUrl: 'http://localhost:10000/user/captcha',

      loginDialog: false
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
      if (this.userId === '') {
        this.loginDialog = true
      }
    },

    /**
     * 生成验证码
     */
    captcha() {
      this.captchaUrl = this.apiCaptchaUrl + '?' + Math.random()
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
</style>
