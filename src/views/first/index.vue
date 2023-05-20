<template>
  <el-container>
    <!--  Head Bar  -->
    <el-header class="header-cls">
      <div>
        <!--    LOGO    -->
        <el-image
          style="width: 150px; height: 60px;cursor: pointer"
          :src="logoUrl"
          :fit="fit"
        ></el-image>

        <!--  Join Us Page  -->
        <span>
          <el-link type="primary" class="join-us" @click="centerDialogVisible = true">如何成为 Committer</el-link>
        </span>

        <!--   头像下拉框(已登录)   -->
        <!--        <el-dropdown style="float: right">-->
        <!--          <el-avatar class="avatar-cls" :size="50" :src="avatarUrl"></el-avatar>-->
        <!--             <el-dropdown-menu slot="dropdown" style="width: 240px;height: 300px;border-radius: 20px">-->
        <!--               <div style="margin-left: 22px;margin-right: 10px;margin-top: 20px">-->
        <!--                 <el-row :gutter="24">-->
        <!--                   <el-col :span="8">-->
        <!--                     <div class="grid-content" style="font-family: 'Arial Black'">-->
        <!--                       {{ fans }}-->
        <!--                     </div>-->
        <!--                   </el-col>-->
        <!--                   <el-col :span="8">-->
        <!--                     <div class="grid-content" style="font-family: 'Arial Black'">-->
        <!--                       {{ follow }}-->
        <!--                     </div>-->
        <!--                   </el-col>-->
        <!--                   <el-col :span="8">-->
        <!--                     <div class="grid-content" style="font-family: 'Arial Black'">-->
        <!--                       {{ likes }}-->
        <!--                     </div>-->
        <!--                   </el-col>-->
        <!--                 </el-row>-->
        <!--               </div>-->
        <!--               <div style="margin-left: 24px;margin-right: 10px;margin-top: -10px">-->
        <!--                 <el-row :gutter="24">-->
        <!--                   <el-col :span="8" class="parent">-->
        <!--                     <div class="grid-content-font bg-purple">粉丝</div>-->
        <!--                   </el-col>-->
        <!--                   <el-col :span="8">-->
        <!--                     <div class="grid-content-font bg-purple">关注</div>-->
        <!--                   </el-col>-->
        <!--                   <el-col :span="8">-->
        <!--                     <div class="grid-content-font bg-purple">获赞</div>-->
        <!--                   </el-col>-->
        <!--                 </el-row>-->
        <!--               </div>-->
        <!--               <div style="margin-top:30px">-->
        <!--                 <el-dropdown-item class="dropdown-item" icon="el-icon-user">我的主页</el-dropdown-item>-->
        <!--                 <el-dropdown-item class="dropdown-item" icon="el-icon-picture-outline">我的喜欢</el-dropdown-item>-->
        <!--                 <el-dropdown-item class="dropdown-item" icon="el-icon-shopping-cart-2">我的订单</el-dropdown-item>-->
        <!--                 <el-dropdown-item class="dropdown-item" icon="el-icon-error">退出鸡圈</el-dropdown-item>-->
        <!--               </div>-->
        <!--             </el-dropdown-menu>-->
        <!--         </el-dropdown>-->

        <el-dropdown style="float: right">
          <span @click="dialogFormVisible = true">
            <el-avatar class="avatar-cls" :size="50" :src="avatarUrl"></el-avatar>
          </span>
          <div>
            <el-dialog :center="true" style="text-align: center;" width="35%" title="欢迎登录"
                       :visible.sync="dialogFormVisible">
              <el-form :model="form" style="height: 200px; margin-top: 35px; margin-left: 180px">
                <div style="margin-top: 20px;">
                  <el-input placeholder="请输入账号" v-model="userId" style="width: 280px"></el-input>
                </div>
                <div style="margin-top: 20px;">
                  <el-input placeholder="请输入密码" v-model="passWord" show-password style="width: 280px"></el-input>
                </div>
                <div style="margin-top: 20px;">
                  <el-input placeholder="请输入验证码" v-model="verifCode" style="width: 150px"></el-input>
                </div>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible = false">登 录</el-button>
              </div>
            </el-dialog>
          </div>
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
            <div class="div-icon-font">
              BJM
            </div>
          </el-col>

          <el-col :span="4">
            <div class="div-icon-font">
              作品
            </div>
          </el-col>

          <el-col :span="4">
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
            <div class="div-icon-font">
              通知
            </div>
          </el-col>
        </div>
      </div>
    </el-header>

    <!--   Main   -->
    <div class="main-cls" style="background-image: '@/assets/img/img.png'">
      <el-main>

      </el-main>
    </div>

    <!--  Frame  -->
    <div>
      <!--   Join US   -->
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

      <!--  VIP  -->
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
      avatarUrl: 'https://img1.baidu.com/it/u=1276647781,768140777&fm=253&fmt=auto&app=138&f=JPG?w=555&h=500',
      logoUrl: 'https://xuzhibin-bucket.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87%E8%B5%84%E6%BA%90/logo.png',
      fit: 'fill',
      centerDialogVisible: false,
      // star: '',
      starText: ['苏珊，小黑子', '油饼食不食', '你干嘛，哎嗨油', 'crach on you', '鸡你太美'],
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

  created() {
    this.findUserStatistics('xzb')
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
  height: 80px;
  background-color: #FDF3FDFF;
}

.avatar-cls {
  margin-top: 5px;
  float: right;
  margin-right: 70px;
  cursor: pointer;
}

.join-us {
  font-size: 16px;
  margin-bottom: 50px;
  margin-left: 70px;
}

.main-cls {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-size: 100% 100%;
}

.icon-cls-list {
  margin-top: 10px;
  float: right;
  margin-right: 30px;
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
  font-size: 10px;
  cursor: pointer;
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
