<template xmlns="http://www.w3.org/1999/html">
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
          <el-link type="primary" class="join-us" @click="centerDialogVisible = true">如何成为【全民制作人】</el-link>
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
            <i class="icon-cls el-icon-medal" @click="memberVisible = true"></i>
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

    <!--  加入我们弹出页  -->
    <el-dialog
      title="如何成为全民制作人"
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
                        v-model="star"
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
                v-model="textAdvice"
                style="width: 350px"
              >
              </el-input>
            </div>
            <div style="text-align: center; margin-top: 10px">
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitAdvice(this.adviceData)">提 交</el-button>
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
                    <!--<time class="member-time">{{ currentDate }}</time>-->
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
                    <!--<time class="member-time">{{ currentDate }}</time>-->
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
                    <!--<time class="member-time">{{ currentDate }}</time>-->
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

    <!--  BJM  -->
    <audio controls="controls" hidden src="../../assets/bg_music/鸡你太美.mp3" ref="audio"></audio>
  </el-container>
</template>

<script>
import saveApi from '@/api/first'

export default {

  data() {
    return {
      avatarUrl: 'https://img.99danji.com/uploadfile/2022/0804/20220804024449599.png',
      logoUrl: 'https://xuzhibin-bucket.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87%E8%B5%84%E6%BA%90/logo.png',
      fit: 'fill',
      centerDialogVisible: false,
      star: null,
      starText: ['苏珊，小黑子', '油饼食不食', '你干嘛，哎嗨油', 'crach on you', '鸡你太美'],
      textAdvice: '',
      memberVisible: false,
      currentDate: new Date(),
      adviceData: {
        advice: this.textAdvice,
        score: this.star,
        userName: ''
      }
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
    },
    /**
     *保存建议和评分
     */
    submitAdvice(data) {
      saveApi.saveAdvice(data)
        .then(data => {
          // 弹框，显示提交成功
          this.centerDialogVisible = false
        })
        .catch(e => {
          console.log(e)
        })
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

.member-time {
  font-size: 13px;
  color: #999;
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
