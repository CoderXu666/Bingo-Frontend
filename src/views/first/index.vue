<template>
  <el-container>
    <!--  1.Head  -->
    <el-header class="header-cls" style="height: 68px">
      <!--   logo   -->
      <el-image style="width: 150px;cursor: pointer;height: 68px;margin-left: 4%" src="" :fit="fit"></el-image>
      <!--   about me   -->
      <el-link type="primary" class="join-us">关于作者</el-link>
      <!--   avatar   -->
      <el-avatar style="float: right;cursor: pointer;margin-top: 0.6%;margin-right: 6%" :size="50" :src="avatarUrl">
      </el-avatar>
      <!--   icon   -->
      <div style="float: right;margin-right: 4.5%;margin-top: 1.5%">
        <el-badge class="item" :value="null">
          <el-button size="mini">通知</el-button>
        </el-badge>
      </div>
      <div style="float: right;margin-right: 3%;margin-top: 1.5%">
        <el-button size="mini">会员</el-button>
      </div>
      <div style="float: right;margin-right: 3%;margin-top: 1.5%">
        <el-button size="mini">作品</el-button>
      </div>
      <div style="float: right;margin-right: 3%;margin-top: 1.5%">
        <el-button size="mini">发布</el-button>
      </div>
    </el-header>

    <!--  2.Search  -->
    <div class="search-cls" style="height: 74vh">
      <div style="margin:11% auto;width: 50%">
        <h1 style="color: whitesmoke;font-family: 'Arial Rounded MT Bold';margin: auto;padding-left: 9%">
          Bingo：致力于打造最好的年轻人社交平台
        </h1>
        <div style="margin-top: 54px;opacity: 0.5;">
          <el-input id="search-input" v-model=this.searchContent placeholder="搜索你想要知道的一切内容......">
            <el-select slot="prepend" v-model=this.searchType :placeholder=this.searchType style="width: 80px;">
              <el-option label="帖子" value="1"></el-option>
              <el-option label="视频" value="2"></el-option>
              <el-option label="商品" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
    </div>

    <!--  3.Body  -->
    <el-main class="main-cls">
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

    <!--  5.Other Frames -->
  </el-container>
</template>

<script>

export default {
  data() {
    return {
      avatarUrl: '',
      fit: 'fill',
      searchType: '',
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

.join-us {
  font-size: 16px;
  margin-bottom: 50px;
  margin-left: 70px;
}

.search-cls {
  background-color: #5a5e66;
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
