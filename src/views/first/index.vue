<template>
  <el-container>
    <!--  上边栏  -->
    <el-header style="height: 60px">

    </el-header>
    <!--   主体   -->
    <div class="main-cls" style="background-color: pink">
      <el-main>
        <el-row :gutter="20">
          <!--    侧边目录    -->
          <el-col :span="2">
            <div style="margin-top: 300px; margin-bottom: 300px">
              <el-button round style="margin-bottom: 10px;margin-left: 10px">我的鸡友</el-button>
              <el-button round style="margin-bottom: 10px">荔枝社区</el-button>
              <el-button round style="margin-bottom: 10px">美坤秀秀</el-button>
              <el-button round style="margin-bottom: 10px">鸡瓜视频</el-button>
              <el-button round>鸡东商城</el-button>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </div>
  </el-container>
</template>

<script>
export default {

}
</script>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

/*图片整张平铺到div中*/
.main-cls {
  background-image: url("../../assets/ikun_pic/index.gif");
  background-size: 100% 100%;
}
</style>
