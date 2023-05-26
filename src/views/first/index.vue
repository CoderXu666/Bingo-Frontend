<template>
  <el-container>
    <!--  1.Head  -->
    <el-header class="header-cls" style="height: 68px">
      <!--   logo   -->
      <el-image style="float: left;width: 150px;cursor: pointer;height: 68px;margin-left: -1.4%" src=""
                :fit="fit"></el-image>
      <!--   list   -->
      <el-menu
        style="width:29.5%;float: left;margin-top: 6px;border-bottom: none;"
        mode="horizontal"
        background-color="transparent"
      >
        <el-menu-item index="1" style="margin-left: 6%;color: lightskyblue">社区广场</el-menu-item>
        <el-menu-item index="2" style="margin-left: 2%;color: lightskyblue">狂欢派对</el-menu-item>
        <el-menu-item index="3" style="margin-left: 2%;color: lightskyblue">好物商城</el-menu-item>
        <el-menu-item index="4" style="margin-left: 2%;color: lightskyblue">关于作者</el-menu-item>
      </el-menu>

      <!--   avatar   -->
      <el-avatar style="float: right;cursor: pointer;margin-top: 0.6%;margin-right: 5%" :size="50"
                 :src="avatarUrl"></el-avatar>

      <!--   icon   -->
      <div style="float: right;margin-right: 3%;margin-top: 1.5%">
        <el-badge class="item" :value="null">
          <el-button size="mini">通知</el-button>
        </el-badge>
      </div>
      <div style="float: right;margin-right: 2%;margin-top: 1.5%">
        <el-button size="mini">好友</el-button>
      </div>
      <div style="float: right;margin-right: 2%;margin-top: 1.5%">
        <el-button size="mini">会员</el-button>
      </div>
      <div style="float: right;margin-right: 2%;margin-top: 1.5%">
        <el-button size="mini">作品</el-button>
      </div>
    </el-header>

    <!--  2.Search  -->
    <div class="search-cls">
      <!--   background video   -->
      <video src='@/assets/video/background.mp4' autoplay muted loop></video>
      <div style="margin:11.6% auto;width: 50%">
        <!--    title    -->
        <h1 style="color: whitesmoke;font-family: 'Arial Rounded MT Bold';margin: auto;padding-left: 9%">
          Bingo：致力打造有趣的年轻人社交平台
        </h1>
        <!--    input    -->
        <div style="margin-top: 55px;opacity: 0.8;">
          <el-input id="search-input" v-model=searchContent placeholder="搜索你想要知道的一切......">
            <el-select slot="prepend" v-model=searchType :placeholder=searchType style="width: 80px;">
              <el-option label="帖子" value="1"></el-option>
              <el-option label="视频" value="2"></el-option>
              <el-option label="商品" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click=""></el-button>
          </el-input>
        </div>
      </div>
    </div>

    <!--  3.Post & Topic  -->
    <el-main class="main-cls">
      <div style="margin: auto;width: 84%; border: 1px solid red;">
        <el-row>
          <el-col :span="18" class="left-content" style="border: 1px solid red">
            <span style="background-color: lightskyblue;height: 23px;display: inline-block;"></span>
            <span style="margin-right: 1%; color: lightskyblue">广场动态</span>
            <span style="margin-right: 1%; color: lightskyblue">换一批</span>
            <span style="margin-right: 1%; color: lightskyblue">查看更多</span>
          </el-col>
          <el-col :span="6" class="right-content" style="border: 1px solid red; color: lightskyblue">
            本周热榜
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="18" class="left-content" style="border: 1px solid red">
            <span style="margin-right: 1%">1111</span>
            <span style="margin-right: 1%">1111</span>
            <span style="margin-right: 1%">1111</span>
            <span style="margin-right: 2%">1111</span>
          </el-col>
          <el-col :span="6" class="right-content" style="border: 1px solid red">
            11111111111111111111
          </el-col>
        </el-row>
      </div>
    </el-main>

    <!--  4.Party &   -->
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

    <!--  4.Footer  -->
    <el-footer style="background-color: #323335;height: 180px">
      <el-row>
        <el-col :span="12" class="left-content">
          1111111111111111111
        </el-col>
        <el-col :span="12" class="right-content">
          11111111111111111111
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
    }
  },

  methods: {}
}
</script>

<style>
#search-input {
  height: 55px;
}

.header-cls {
  background-color: #303133;
}

.search-cls {
  height: 74vh;
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

.main-cls {
  width: 100vw;
  height: 70vh;
  margin: 0;
  padding: 0;
  background-color: #292A2D;
  background-size: cover;
  background-repeat: no-repeat;
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
</style>
