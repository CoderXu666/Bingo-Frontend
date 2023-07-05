<template>
  <el-container>
    <!--  1.导航栏  -->
    <el-header class="header-cls">
      <!--   logo   -->
      <el-image class="header-logo" :src="logoUrl" :fit="fit" @click="clickLogo()"></el-image>
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
    </div>
    <div class="mid-two">
    </div>
    <div class="mid-three">
    </div>

    <!--  4.帖子 & 话题 -->
    <el-main class="topic-body-cls">
      <div style="margin: auto;width: 80%">
        <!--    第一行    -->
        <el-col :span="18" style="padding-left: 0.5%">
          <span style="margin-right: 1%; color: antiquewhite">广场动态</span>
          <span style="margin-right: 1%; color: antiquewhite">换一批</span>
          <span style="margin-right: 1%; color: antiquewhite">查看更多</span>
        </el-col>
        <el-col :span="6" style="color: antiquewhite;">
          <span style="display: inline-block;margin-left: 4%">当前热门话题</span>
        </el-col>
        <!--    第二行    -->
        <el-col :span="18">
          <el-col v-for="item in postList" :span="6" :key="item.id">
            <span class="post-cls">
              <div style="background-color: #323335;margin-left: 2%;margin-right: 2%;border-radius: 10px">
                <div style="padding-top: 4%">
                  <el-avatar class="post-avatar" :size="50" :src="item.avatarUrl"></el-avatar>
                  <span class="post-name">{{ item.name }}</span>
                  <span class="post-date">{{ item.date }}</span>
                  <el-button
                    style="float: right;
                    margin-right: 5%;
                    margin-top: 2%;
                    background-color: antiquewhite;
                    color: black"
                    size="small"
                  >
                    关注
                  </el-button>
                  <div class="post-content">{{ item.content }}</div>
                  <div class="post-picture">
                    <!--  使用的图片  -->
                    <el-image
                      style="height: 100px; width: 100px"
                      :src=item.picture
                      fit="fill">
                    </el-image>
                    <div style="">
                      <i class="el-icon-share"></i>
                      <i class="el-icon-share"></i>
                      <i class="el-icon-share"></i>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </el-col>
        </el-col>
        <el-col :span="6" class="right-content">
          <div style="color: antiquewhite;margin-top: 5%;margin-left: 5%;background-color: #323335;border-radius: 10px">
            <div class="topic-cls">1.最让你难忘事情</div>
            <div class="topic-cls">2.最想对年轻的你说什么</div>
            <div class="topic-cls">3.你最后悔的事情是什么</div>
            <div class="topic-cls">4.到底什么是友情</div>
            <div class="topic-cls">5.到底什么是友情</div>
            <div class="topic-cls">6.到底什么是友情</div>
            <div class="topic-cls">7.到底什么是友情</div>
            <div class="topic-cls">8.到底什么是友情</div>
            <div class="topic-cls">9.到底什么是友情</div>
            <div class="topic-cls">10.到底什么是友情</div>
          </div>
        </el-col>
      </div>
    </el-main>

    <!--  4.热门视频、短视频客户端  -->
    <el-main class="video-body-cls">
      <div style="margin: auto;width: 80%">
        <el-col :span="18" style="padding-left: 0.5%">
          <span style="margin-right: 1%; color: antiquewhite">热门视频</span>
        </el-col>
        <el-col :span="6" style="color: antiquewhite;">
          <span style="display: inline-block;margin-left: 4%">随便看看</span>
        </el-col>

        <!--    热门视频    -->
        <el-col :span="18" style="padding-left: 0.5%">
          <div style="border: 1px solid red;height: 500px">
            <el-col :span="6" v-for="item in videoList">
              <div style="border: 1px solid red;height: 210px">
                <video ref="videoPlayer" controls>
                  <source :src="item.videoUrl" type="video/mp4">
                </video>
              </div>
            </el-col>
          </div>
        </el-col>
        <!--    短视频客户端    -->
        <el-col :span="6">
          <div style="border: 1px solid red;height: 500px"></div>
        </el-col>
      </div>
    </el-main>

    <!--  4.派对Party -->
    <el-main class="party-body-cls">
      <div style="margin: auto;width: 80%;">
        <el-row>
          <el-col :span="20">
            22222222222
          </el-col>
          <el-col :span="4">
            11111111111111111111
          </el-col>
        </el-row>
      </div>
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
          <div>
            1111
          </div>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>

export default {
  data() {
    return {
      videoUrl: require('@/assets/video/background.mp4'),

      logoUrl: require('@/assets/logo/logo.png'),
      avatarUrl: require('@/assets/avatar/avatar.jpg'),
      fit: 'fill',
      searchType: '帖子',
      searchContent: '',

      videoList: [
        {
          videoUrl: ''
        },
        {
          videoUrl: ''
        },
        {
          videoUrl: ''
        },
        {
          videoUrl: ''
        },
        {
          videoUrl: ''
        },
        {
          videoUrl: ''
        },
        {
          videoUrl: ''
        },
        {
          videoUrl: ''
        }
      ],

      postList: [
        {
          id: 1,
          name: '徐志斌',
          region: '辽宁大连',
          date: '3天前',
          content: '大家好，大连有没有同城好友啊！一起玩啊！大家好，大连有没有同城好友啊！一起玩啊！大家好',
          picture: [
            require('@/assets/avatar/liuhuaqiang.png'),
          ],
          avatarUrl: require('@/assets/avatar/avatar.jpg')
        },
        {
          id: 2,
          name: '徐志斌',
          region: '辽宁大连',
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
          region: '辽宁大连',
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
          region: '辽宁大连',
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
          region: '辽宁大连',
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
          region: '辽宁大连',
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
          region: '辽宁大连',
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
          region: '辽宁大连',
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

  methods: {
    clickLogo() {
      window.location.reload()
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
  cursor: pointer;
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

.search-big-title {
  color: antiquewhite;
  font-family: 'Arial Rounded MT Bold';
  padding-left: 21%
}

.search-small-title {
  color: antiquewhite;
  font-family: Arial;
  padding-left: 10%;
  margin-top: 2.5%;
  font-size: 19px
}

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

.mid-one {
  background-color: #323335;
  border-radius: 20px;
  height: 90px;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-200%, -50%);
  width: 280px;
}

.topic-cls {
  padding-bottom: 5%;
  padding-top: 5%;
  margin-left: 5%;
  cursor: pointer;
}

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

.topic-body-cls {
  width: 100vw;
  padding-top: 4%;
  background-color: #292A2D;
}

.video-body-cls {
  width: 100vw;
  background-color: #292A2D;
  padding-top: 1.5%;
}

.party-body-cls {
  background-color: #292A2D;
  border: 1px solid red;
  padding-top: 3%
}

.post-cls {
  display: inline-block;
  margin-top: 4%;
}

.header-left-menu-font {
  color: antiquewhite !important;
  margin-left: 2%;
  font-size: 17px
}

.post-name {
  position: absolute;
  margin-left: 1%;
  margin-top: 6px;
  color: antiquewhite;
  cursor: pointer;
}

.post-avatar {
  margin-left: 4%;
  position: relative;
  cursor: pointer;
}

.post-content {
  color: antiquewhite;
  margin-left: 6%;
  width: 90%;
  height: 80px;
  font-size: 14px;
  font-family: "Arial Rounded MT Bold";
}

.post-picture {
  margin-left: 6%;
  width: 90%;
  height: 234px;
}

.post-date {
  position: absolute;
  margin-left: 1%;
  margin-top: 30px;
  color: antiquewhite;
  font-size: small;
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
</style>
