<template>
  <el-container>
    <!--  1.Head  -->
    <el-header class="header-cls" style="height: 68px">
      <!--   logo   -->
      <el-image style="width: 150px;cursor: pointer;height: 68px" src="" :fit="fit"></el-image>
      <!--   join Us   -->
      <el-link type="primary" class="join-us" @click="centerDialogVisible = true">成为 Committer</el-link>
      <!--   icon   -->

      <!--   avatar   -->
      <el-avatar style="float: right;cursor: pointer;margin-top: 0.6%;margin-right: 6%" :size="50" :src="avatarUrl"></el-avatar>
    </el-header>

    <!--  2.Search  -->
    <div class="search-cls" style="height: 74vh">
      <div style="margin:11% auto;width: 50%;border: 1px solid red">
        <h1 style="border: 1px solid red;color: whitesmoke;font-family: 'Arial Rounded MT Bold'">
          Bingo：致力于打造最好的年轻人社交平台
        </h1>
        <el-input style="margin-top: 6%;border-radius: 20%" placeholder="请输入内容"></el-input>
      </div>
    </div>

    <!--  3.Body  -->
    <el-main class="main-cls">
      <el-main>

      </el-main>
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

    <!--  Other Frames -->
    <div>
      <!--   1.Join US   -->
      <el-dialog
        title="加入我们"
        :visible.sync="centerDialogVisible"
        width="50%"
        center
      >
        <div style="height: 500px;">
          <div style="height: 400px; width: 520px; text-align: center; margin:auto">
            <div style="background : mistyrose; height: 50px; vertical-align:middle; text-align:center">
            <span>
              在牢记鸽鸽作品的同时，能够有自己的独特理解，
              <br/>
              并且日常工作与生活中能够多用，多练ikun经典语录。
              <br/>
              深刻贯彻落实ikun理念，对小黑子们进行严厉谴责，坚定维护一个坤坤原则。
            </span>
            </div>
            <div style="background : mistyrose; margin-top: 20px; height: 300px">
              <span style="font-weight: bold">请荔枝打分并提供建议</span>
              <div style="margin-top: 20px; margin-left: 100px">
                <table>
                  <tr>
                    <td style="width: 120px">
                      <span style="font-weight: bold">分 数：</span>
                    </td>
                    <td>
                      <div>
                        <el-rate
                          v-model="adviceData.score"
                          show-text
                          :texts=starText
                        >
                        </el-rate>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              <div style=" margin-top: 35px;">
                <el-input
                  type="textarea"
                  :rows="6"
                  placeholder="请输入您的建议"
                  v-model="adviceData.advice"
                  style="width: 350px"
                >
                </el-input>
              </div>
              <div style="text-align: center; margin-top: 10px">
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitAdvice(adviceData)">提 交</el-button>
              </span>
              </div>
            </div>
            <div style="background : mistyrose; margin-top: 20px; height: 120px">
              <table style="height: 120px">
                <tr>
                  <th style="width: 120px;">
                    <img src="../../assets/qr_code/微信图片_20230227111138.png">
                  </th>
                  <th style="width: 400px">
                    <span>  欢迎加入我们，</span>
                    <br/>
                    <span> 披荆斩棘，伴坤远航。</span>
                  </th>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </el-dialog>

      <!--  2.VIP  -->
      <el-dialog
        style="font-weight: bold"
        title="VIKN"
        :visible.sync="memberVisible"
        width="50%"
        center
      >
        <div style="height: 380px; margin-left: 30px;margin-right: 30px">
          <div style=" height: 320px;margin-top: 40px; vertical-align:middle; text-align:center">
            <span>你想和鸽鸽再近一点吗，你也想瞬间爆炸，当场融化吗？为了鸽鸽冲起来吧!!!</span>
            <el-row style="margin-top: 30px;">
              <el-col :span="6" style="margin-left: 20px">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <img src="../../assets/member/微信图片_20230228202519.png" class="member-image">
                  <div style="padding: 14px;">
                    <span>鸡日起获得一个月的vikun权限</span>
                    <div class="member-bottom member-clearfix">
                      <el-button type="text" class="member-button">月度会员</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6" style="margin-left: 60px">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <img src="../../assets/member/微信图片_20230228201823.png" class="member-image">
                  <div style="padding: 14px;">
                    <span>鸡日起获得一个鸡度的vikun权限</span>
                    <div class="member-bottom member-clearfix">
                      <el-button type="text" class="member-button">鸡度会员</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6" style="margin-left: 60px">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <img src="../../assets/member/微信图片_20230228202525.png" class="member-image">
                  <div style="padding: 14px;">
                    <span>鸡日起获得一年的vikun权限</span>
                    <div class="member-bottom member-clearfix">
                      <el-button type="text" class="member-button">黏度会员</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <div style="height: 130px;margin-top: -30px; vertical-align:middle; text-align:center">
            <span>开通VIKUN后可获得鸽鸽专属表情包，得到VIKUN专属头像，</span>
            <br/>
            <span> 同时会给予定量鸡分，在商城中可兑换商品等等...</span>
            <br/>
            <span> 众多好礼，拿到坤软！</span>
          </div>
        </div>
      </el-dialog>
    </div>
  </el-container>
</template>

<script>
import saveApi from '@/api/first'

export default {

  data() {
    // 这里面数据不能互相赋值
    return {
      avatarUrl: '',
      bgImage: '@/assets/img/first.jpg',
      logoUrl: '',
      fit: 'fill',
      centerDialogVisible: false,
      // star: '',
      starText: ['苏珊，小黑子', '油饼食不食', '你干嘛，哎嗨油', 'crush on you', '鸡你太美'],
      // textAdvice: '',
      memberVisible: false,
      currentDate: new Date(),
      adviceData: {
        score: '',
        advice: '',
        userName: ''
      },

      // 关注、粉丝、点赞数
      fans: '',
      follow: '',
      likes: '',
      // 登录
      dialogTableVisible: false,
      dialogFormVisible: false,
      userId: '',
      passWord: '',
      verifCode: '',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },

  methods: {
    /**
     * save advice
     */
    submitAdvice(data) {
      saveApi.saveAdvice(data)
        .then(res => {
          this.centerDialogVisible = false
        })
    },

    /**
     * query user information based on user id
     */
    findUserStatistics(useName) {
      saveApi.findUserStatistics(useName).then(res => {
        this.avatarUrl = res.data.headUrl
        this.follow = res.data.followCount
        this.fans = res.data.fanCount
        this.likes = res.data.likeCount
        console.log(res)
      })
    }
  }
}
</script>

<style>
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

.icon-cls-list {
  margin-top: 1%;
  float: right;
  font-size: 30px;
}

.icon-cls {
  padding-left: 50px;
  cursor: pointer;
}

.div-icon-font {
  margin-left: 52px;
  width: 40px;
  margin-top: -1px;
  font-size: 13px;
  cursor: pointer;
  animation: none;
  color: white;
}

.div-icon-font:hover {
  animation: jump 1s 1;
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

.member-bottom {
  margin-top: 13px;
  line-height: 12px;
}

.member-button {
  padding: 0;
  float: right;
}

.member-image {
  width: 120%;
  height: 100%;
  display: block;
}

.member-clearfix:before,
.member-clearfix:after {
  display: table;
  content: "";
}

.member-clearfix:after {
  clear: both
}
</style>
