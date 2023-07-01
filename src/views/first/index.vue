<template>
  <el-container>
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

    <!--  2.搜索板块  -->
    <div class="search-cls">
      <!--   背景视频   -->
      <video src='@/assets/video/background.mp4' autoplay muted loop></video>
      <div style="margin:11.5% auto;width: 50%">
        <!--    标题    -->
        <h1 class="search-big-title">
          Bingo：有趣的年轻人社交平台
        </h1>
        <div class="search-small-title">
          我是徐志斌，这是我个人开源项目 Bingo 社交平台，欢迎加入我们一起Coding
        </div>
        <!--    搜索框    -->
        <div style="margin-top: 40px;opacity: 0.7;">
          <el-input id="search-input" v-model=searchContent placeholder="搜索你想要知道的一切......">
            <el-select slot="prepend" v-model=searchType :placeholder=searchType style="width: 80px;">
              <el-option label="帖子" value="1"></el-option>
              <el-option label="话题" value="3"></el-option>
              <el-option label="视频" value="2"></el-option>
              <el-option label="商品" value="3"></el-option>
            </el-select>
            <el-button class="search-btn" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
    </div>

    <!--    3.两界之间    -->
    <div class="mid-one">
      111
    </div>
    <div class="mid-two">
      111
    </div>
    <div class="mid-three">
      111
    </div>

    <!--  4.帖子 & 话题 -->
    <el-main class="main-cls">
      <div style="margin: auto;width: 80%; border: 1px solid red;margin-top: 4%;">
        <!--    第一行    -->
        <el-col :span="20" class="left-content" style="border: 1px solid red">
          <span style="background-color: lightskyblue;height: 27px;display: inline-block;"></span>
          <span style="margin-right: 1%; color: lightskyblue">广场动态</span>
          <span style="margin-right: 1%; color: lightskyblue">换一批</span>
          <span style="margin-right: 1%; color: lightskyblue">查看更多</span>
        </el-col>
        <el-col :span="4" class="right-content" style="border: 1px solid red; color: lightskyblue;">
          <span style="background-color: lightskyblue;height: 27px;display: inline-block;"></span>
          <span style="display: inline-block;margin: auto">本周热门话题</span>
        </el-col>
        <!--    第二行    -->
        <el-col :span="20" class="left-content" style="border: 1px solid red">
          <template v-for="item in postList">
            <el-col :span="6" :key="item.id">
              <span class="post-cls">
                <div>
                  <el-avatar class="post-avatar" :size="50" :src="item.avatarUrl"></el-avatar>
                  <span class="post-name">{{ item.name }}</span>
                  <span class="post-date">{{ item.date }}</span>
                  <el-button type="primary" style="float: right;margin-right: 8%;margin-top: 2%;"
                             size="small">关注</el-button>
                </div>
                <div class="post-content">{{ item.content }}</div>
                <div class="post-picture">
                  <!--         使用的图片      -->
                  <div>
                    <el-image
                      style="height: 100px; width: 100px"
                      :src=item.picture
                      fit="fill">
                    </el-image>
                  </div>
                  <div style="">
                    <i class="el-icon-share"></i>
                    <i class="el-icon-share"></i>
                    <i class="el-icon-share"></i>
                  </div>
                </div>
              </span>
            </el-col>
          </template>
        </el-col>
        <el-col :span="4" class="right-content" style="border: 1px solid red">
          <div style="color: orange ">
            <div style="padding-top: 7%;margin-left: 5%">
              <div>1.最让你难忘事情</div>
              <br>
              <div>2.最想对年轻的你说什么</div>
              <br>
              <div>3.你最后悔的事情是什么</div>
              <br>
              <div>4.到底什么是友情</div>
              <br>
              <div>5.到底什么是友情</div>
              <br>
              <div>6.到底什么是友情</div>
              <br>
              <div>7.到底什么是友情</div>
              <br>
              <div>8.到底什么是友情</div>
              <br>
              <div>9.到底什么是友情</div>
              <br>
              <div>10.到底什么是友情</div>
              <br>
            </div>
          </div>
        </el-col>
      </div>
    </el-main>

    <!--  4.排队 -->
    <el-main class="main-cls" style="background-color: #304156">
      <el-row>
        <el-col :span="18" class="left-content">
          1111111111111111111
        </el-col>
        <el-col :span="6" class="right-content">
          11111111111111111111
        </el-col>
      </el-row>
    </el-main>

    <!--  5.底边栏  -->
    <el-footer style="background-color: #323335;height: 180px">
      <el-row>
        <el-col :span="12" class="left-content">
          <div style="border: 1px solid red;width: 70%;height: 180px">
            1111
          </div>
        </el-col>
        <el-col :span="12" class="right-content">
          <div style="border: 1px solid red">
            1111
          </div>
        </el-col>
      </el-row>
    </el-footer>

    <!--  5.Frames -->
  </el-container>
</template>

<script>

export default {

  data() {
    return {
      avatarUrl: require('@/assets/avatar/avatar.jpg'),
      fit: 'fill',
      searchType: '帖子',
      searchContent: '',

      postList: [
        {
          id: 1,
          name: '徐志斌',
          date: '3天前',
          content: '大家好，大连有没有同城好友啊！一起玩啊！大家好，大连有没有同城好友啊！一起玩啊！大家好',
          picture: [
            require('@/assets/avatar/liuhuaqiang.png')
          ],
          avatarUrl: require('@/assets/avatar/avatar.jpg')
        },
        {
          id: 2,
          name: '徐志斌',
          date: '3天前',
          content: '大家好，大连有没有同城好友啊！一起玩啊！',
          picture: [
            require('@/assets/avatar/zhangruonan.png')
          ],
          avatarUrl: require('@/assets/avatar/avatar.jpg')
        },
        {
          id: 3,
          name: '徐志斌',
          date: '3天前',
          content: '大家好，大连有没有同城好友啊！一起玩啊！',
          picture: [
            require('@/assets/avatar/jiabing.png')
          ],
          avatarUrl: require('@/assets/avatar/avatar.jpg')
        },
        {
          id: 4,
          name: '徐志斌',
          date: '3天前',
          content: '大家好，大连有没有同城好友啊！一起玩啊！',
          picture: [
            require('@/assets/avatar/zhangruonan.png')
          ],
          avatarUrl: require('@/assets/avatar/avatar.jpg')
        },
        {
          id: 5,
          name: '徐志斌',
          date: '3天前',
          content: '大家好，大连有没有同城好友啊！一起玩啊！',
          picture: [
            require('@/assets/avatar/gaoqiqiang.png')
          ],
          avatarUrl: require('@/assets/avatar/avatar.jpg')
        },
        {
          id: 6,
          name: '徐志斌',
          date: '3天前',
          content: '大家好，大连有没有同城好友啊！一起玩啊！',
          picture: [
            require('@/assets/avatar/zhangruonan.png')
          ],
          avatarUrl: require('@/assets/avatar/avatar.jpg')
        },
        {
          id: 7,
          name: '徐志斌',
          date: '3天前',
          content: '大家好，大连有没有同城好友啊！一起玩啊！',
          picture: [
            require('@/assets/avatar/jiabing.png')
          ],
          avatarUrl: require('@/assets/avatar/avatar.jpg')
        },
        {
          id: 8,
          name: '徐志斌',
          date: '3天前',
          content: '大家好，大连有没有同城好友啊！一起玩啊！',
          picture: [
            require('@/assets/avatar/gaoqiqiang.png')
          ],
          avatarUrl: require('@/assets/avatar/avatar.jpg')
        }
      ]
    }
  },

  methods: {}
}
</script>

<style>
/*上边栏Logo*/
.header-logo {
  float: left;
  width: 150px;
  cursor: pointer;
  height: 68px;
  margin-left: -1.4%;
}

/*上边栏-左侧-目录*/
.header-left-menu {
  width: 29.5%;
  float: left;
  margin-top: 6px;
  border-bottom: none !important;
}

/*上边栏-左侧-目录文字*/
.header-left-menu-font {
  color: #9FC6FF !important;
  margin-left: 2%;
  font-size: 17px
}

/*上边栏-头像*/
.header-avatar {
  float: right;
  cursor: pointer;
  margin-top: 0.6%;
  margin-right: 5%;
  transition: transform 0.2s, margin-top 0.2s;
}

.header-avatar:hover {
  transform: scale(1.4) translateY(5px); /* 鼠标悬停时图片放大1.1倍 */
}

/*搜索大标题*/
.search-big-title {
  color: whitesmoke;
  font-family: 'Arial Rounded MT Bold';
  padding-left: 21%
}

/*搜索小标题*/
.search-small-title {
  color: whitesmoke;
  font-family: Arial;
  padding-left: 10%;
  margin-top: 2.5%;
  font-size: 19px
}

/*搜索框*/
#search-input {
  height: 59px;
}

.header-cls {
  height: 68px !important;
  background-color: #303133;
}

.search-cls {
  height: 70vh;
  position: relative;
  overflow: hidden;
}

/*背景视频*/
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

/*中间-左侧*/
.mid-one {
  background-color: #323335;
  border-radius: 20px;
  height: 90px;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-210%, -50%);
  width: 280px;
}

/*中间-中间*/
.mid-two {
  background-color: #323335;
  border-radius: 20px;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 90px
}

/*中间-右侧*/
.mid-three {
  background-color: #323335;
  border-radius: 20px;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(110%, -50%);
  width: 280px;
  height: 90px
}

/*第二部分*/
.main-cls {
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: #292A2D;
  background-size: cover;
  background-repeat: no-repeat;
}

/*帖子*/
.post-cls {
  display: inline-block;
  margin-top: 4%;
}

/*帖子名*/
.post-name {
  position: absolute;
  margin-left: 1%;
  margin-top: 6px;
  color: antiquewhite;
}

/*帖子头像*/
.post-avatar {
  position: relative;
}

/*帖子文字内容*/
.post-content {
  color: antiquewhite;
  border: 1px solid red;
  margin-left: 50px;
  width: 76%;
  height: 80px;
  font-size: 14px;
  font-family: "Arial Rounded MT Bold";
}

/*帖子配图*/
.post-picture {
  border: 1px solid red;
  margin-left: 50px;
  width: 76%;
  height: 234px;
}

/*帖子日期*/
.post-date {
  position: absolute;
  margin-left: 1%;
  margin-top: 30px;
  color: antiquewhite;
  font-size: small;
}

/*包含整个icon的div*/
.icon-div {
  float: right;
  margin-right: 3.0%;
  margin-top: 0.85%;
  cursor: pointer;
}

/*元素跳动*/
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

/*icon下方的文字*/
.icon-font {
  color: #9FC6FF;
  font-size: 12px
}

/*icon本身*/
.iconfont {
  width: 1.7em;
  height: 1.7em;
}
</style>
