<template>
  <el-container>
    <!--  上边栏  -->
    <el-header class="header-cls">
      <div>
        <!--    LOGO    -->
        <el-image
          style="width: 150px; height: 60px;cursor: pointer"
          :src="logoUrl"
          :fit="fit"
        ></el-image>

        <!--    加入我们    -->
        <span>
          <el-link type="primary" class="join-us">如何成为【全民制作人】</el-link>
        </span>

        <!--   头像下拉框(已登录)   -->
        <el-dropdown style="float: right">
          <el-avatar class="avatar-cls" :size="50" :src="avatarUrl"></el-avatar>
          <el-dropdown-menu slot="dropdown" style="width: 240px;height: 300px;border-radius: 20px">
            <div style="margin-left: 22px;margin-right: 10px;margin-top: 20px">
              <el-row :gutter="24">
                <el-col :span="8">
                  <div class="grid-content" style="font-family: 'Arial Black'">3</div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content" style="font-family: 'Arial Black'">300W</div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content" style="font-family: 'Arial Black'">300W</div>
                </el-col>
              </el-row>
            </div>
            <div style="margin-left: 24px;margin-right: 10px;margin-top: -10px">
              <el-row :gutter="24">
                <el-col :span="8" class="parent">
                  <div class="grid-content-font bg-purple">粉丝</div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content-font bg-purple">关注</div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content-font bg-purple">获赞</div>
                </el-col>
              </el-row>
            </div>
            <div style="margin-top:30px">
              <el-dropdown-item class="dropdown-item" icon="el-icon-user">我的主页</el-dropdown-item>
              <el-dropdown-item class="dropdown-item" icon="el-icon-picture-outline">我的喜欢</el-dropdown-item>
              <el-dropdown-item class="dropdown-item" icon="el-icon-shopping-cart-2">我的订单</el-dropdown-item>
              <el-dropdown-item class="dropdown-item" icon="el-icon-error">退出鸡圈</el-dropdown-item>
            </div>
          </el-dropdown-menu>
        </el-dropdown>

        <!--        &lt;!&ndash;   头像下拉框(未登录)   &ndash;&gt;-->
        <!--        <el-dropdown style="float: right;">-->
        <!--          <el-avatar class="avatar-cls" :size="50" :src="avatarUrl"></el-avatar>-->
        <!--          <el-dropdown-menu slot="dropdown" style="width: 200px;height: 300px;border-radius: 20px">-->
        <!--            <div style="margin-top: 15px; margin-left: 23px">登陆后你可以：</div>-->
        <!--            <div style="margin-top: 22px">-->
        <!--              <el-dropdown-item icon="el-icon-user">与好友进行鸡情畅聊</el-dropdown-item>-->
        <!--              <el-dropdown-item icon="el-icon-picture-outline">制作你的专属表情包</el-dropdown-item>-->
        <!--              <el-dropdown-item icon="el-icon-shopping-cart-2">购买鸡哥原味背带裤</el-dropdown-item>-->
        <!--              <el-dropdown-item icon="el-icon-phone-outline">疯狂call打你的鸽鸽</el-dropdown-item>-->
        <!--            </div>-->
        <!--            <el-button type="primary" style="margin-top: 20px; margin-left: 45px">立即登录</el-button>-->
        <!--          </el-dropdown-menu>-->
        <!--        </el-dropdown>-->


        <!--   icon   -->
        <div class="icon-cls-list">
          <el-col :span="4">
            <i class="icon-cls el-icon-headset" @click="playMusic()"></i>
            <div class="div-icon-font">
              BJM
            </div>
          </el-col>

          <el-col :span="4">
            <i class="icon-cls el-icon-collection"></i>
            <div class="div-icon-font">
              作品
            </div>
          </el-col>

          <el-col :span="4">
            <i class="icon-cls el-icon-coin"></i>
            <div class="div-icon-font">
              充值
            </div>
          </el-col>

          <el-col :span="4">
            <i class="icon-cls el-icon-medal"></i>
            <div class="div-icon-font">
              会员
            </div>
          </el-col>

          <el-col :span="4">
            <i class="icon-cls el-icon-bell"></i>
            <div class="div-icon-font">
              通鸡
            </div>
          </el-col>
        </div>
      </div>
    </el-header>

    <!--   主体   -->
    <div class="main-cls">
      <el-main>
        <el-row :gutter="20">
          <!--    侧边目录    -->
          <el-col :span="2">
            <div style="margin-top: 290px; margin-bottom: 310px">
              <el-button class="btn_menu" round style="margin-bottom: 10px;margin-left: 10px">我的鸡友</el-button>
              <el-button class="btn_menu" round style="margin-bottom: 10px">荔枝社区</el-button>
              <el-button class="btn_menu" round style="margin-bottom: 10px">美坤秀秀</el-button>
              <el-button class="btn_menu" round style="margin-bottom: 10px">鸡瓜视频</el-button>
              <el-button class="btn_menu" round style="margin-bottom: 10px">鸡东商城</el-button>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </div>

    <!--  BJM  -->
    <audio controls="controls" hidden src="../../assets/bg_music/鸡你太美.mp3" ref="audio"></audio>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      avatarUrl: 'https://img.99danji.com/uploadfile/2022/0804/20220804024449599.png',
      logoUrl: 'https://xuzhibin-bucket.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87%E8%B5%84%E6%BA%90/logo.png',
      fit: 'fill'
    }
  },

  methods: {
    /**
     * 播放BJM音乐
     */
    playMusic() {
      this.$refs.audio.currentTime = 0
      this.$refs.audio.play()
      setTimeout(() => {
        this.$refs.audio.pause()
      }, 30000)
    }
  }
}
</script>


<style>
/*上边栏*/
.header-cls {
  height: 80px;
  background-color: #FDF3FDFF;
}

/*头像样式*/
.avatar-cls {
  margin-top: 5px;
  float: right;
  margin-right: 70px;
  cursor: pointer;
}

/*加入我们*/
.join-us {
  font-size: 16px;
  margin-bottom: 50px;
  margin-left: 70px;
}

/*gif图片整张平铺到首页div中*/
.main-cls {
  background-image: url("https://xuzhibin-bucket.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87%E8%B5%84%E6%BA%90/index.gif");
  background-size: 100% 100%;
}

/*图标div*/
.icon-cls-list {
  margin-top: 10px;
  float: right;
  margin-right: 30px;
  font-size: 30px;
}

/*icon*/
.icon-cls {
  padding-left: 50px;
  cursor: pointer;
}

/*icon下文字*/
.div-icon-font {
  margin-left: 52px;
  width: 40px;
  margin-top: -1px;
  font-size: 10px;
  cursor: pointer;
}

.dropdown-item {
  margin-left: 50px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  padding-top: 10px;
}

</style>
