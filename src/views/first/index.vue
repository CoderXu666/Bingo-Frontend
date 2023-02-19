<template>
  <el-container>
    <!--  上边栏  -->
    <el-header class="header-cls">
      <div>
        <!--   头像   -->
        <el-avatar class="avatar-cls" :size="50" :src="avatarUrl"></el-avatar>
        <!--   icon   -->
        <div class="icon-cls-list">
          <el-col :span="4">
            <i class="el-icon-headset"></i>
            <div class="div-icon-font">
              BJM
            </div>
          </el-col>

          <el-col :span="4">
            <i class="el-icon-collection"></i>
            <div class="div-icon-font">
              作品
            </div>
          </el-col>

          <el-col :span="4">
            <i class="el-icon-coin"></i>
            <div class="div-icon-font">
              充值
            </div>
          </el-col>

          <el-col :span="4">
            <i class="el-icon-medal"></i>
            <div class="div-icon-font">
              会员
            </div>
          </el-col>

          <el-col :span="4">
            <i class="el-icon-bell"></i>
            <div class="div-icon-font">
              通鸡
            </div>
          </el-col>
        </div>
      </div>
    </el-header>

    <!--   主体   -->
    <div class="main-cls" style="background-color: pink">
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
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      avatarUrl: 'https://img.99danji.com/uploadfile/2022/0804/20220804024449599.png'
    }
  }
}
</script>


<style>
/*上边栏*/
.header-cls {
  /*background-image: url("../../assets/ikun_pic/1676790800558.png");*/
  height: 80px;
  background-color: lavenderblush;
}

/*头像样式*/
.avatar-cls {
  margin-top: 5px;
  float: right;
  margin-right: 70px;
}

/*gif图片整张平铺到首页div中*/
.main-cls {
  background-image: url("../../assets/ikun_pic/index.gif");
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
i {
  padding-left: 50px;
}

/*icon下文字*/
.div-icon-font {
  margin-left: 51px;
  width: 40px;
  margin-top: -1px;
  font-size: 10px
}
</style>
