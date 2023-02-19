<template>
  <el-container>
    <!--  上边栏  -->
    <el-header class="header-cls">
      <div>
        <!--    LOGO    -->
        <el-image
          style="width: 120px; height: 60px;cursor: pointer"
          :src="logoUrl"
          :fit="fit"
        ></el-image>

        <!--    加入我们    -->
        <span>
          <el-link type="primary" class="join-us">如何成为【全民制作人】</el-link>
        </span>

        <!--   头像   -->
        <span>
          <el-avatar class="avatar-cls" :size="50" :src="avatarUrl">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-avatar>
        </span>

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


    <!--  头像下拉框  -->
    <!--    <div>-->
    <!--      <el-dropdown>-->
    <!--      <span class="el-dropdown-link">-->
    <!--        下拉菜单<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
    <!--      </span>-->
    <!--        <el-dropdown-menu slot="dropdown">-->
    <!--          <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>-->
    <!--          <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>-->
    <!--          <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>-->
    <!--          <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>-->
    <!--          <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>-->
    <!--        </el-dropdown-menu>-->
    <!--      </el-dropdown>-->
    <!--    </div>-->

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
  background-color: #fbf0fa;
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
  margin-left: 51px;
  width: 40px;
  margin-top: -1px;
  font-size: 10px;
  cursor: pointer;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 12px;
}
</style>
