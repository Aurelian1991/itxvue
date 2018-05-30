<template>
  <div style="background-image:url(https://placeimg.com/500/300/any?id=50);width:100%;position:absolute;top:0;">
    <!-- <img src="https://placeimg.com/500/300/any?id=5" style="width:100%;position:fixed"> -->
    <div class="TempLate">
      <div class="User-Card-Zw"></div>
      <mu-card class="UserCard-Top">
        <mu-list-item to="/user/modifydata" class="Top-list-item" title='爱偷闲' describeText="偷得浮生半日闲">
          <mu-avatar src="https://placeimg.com/244/132/any?id=22" slot="leftAvatar" />
          <mu-icon value="account_circle" slot="right" />
        </mu-list-item>
        <!-- <mu-flexbox>
                <mu-flexbox-item >
                  <mu-flat-button @click="User_Follow" label="关注" icon="person_add" class="User-Top-Btn-Left" />
                </mu-flexbox-item>
                <mu-flexbox-item>
                  <mu-flat-button @click="ToUser_issue('collect')" label="收藏" icon="grade" class="User-Top-Btn-Left"/>
                </mu-flexbox-item>
                <mu-flexbox-item>
                  <mu-flat-button @click="ToUser_issue('dotpraise')" label="点赞" icon="thumb_up" class="User-Top-Btn"/>
                </mu-flexbox-item>
              </mu-flexbox> -->
      </mu-card>
      <mu-card class="UserCard-Top">
        <mu-list-item title="我的发布" @click="ToUser_issue('issue')">
          <mu-icon slot="right" value="chevron_right" color="#9e9e9e" />
        </mu-list-item>
        <mu-list-item title="我的评论" to="/user/discuss" style="border-top: 1px solid #eeeeee">
          <mu-icon slot="right" value="chevron_right" color="#9e9e9e" />
        </mu-list-item>
          <mu-list-item title="我的关注" @click="ToUser_issue('issue')">
          <mu-icon slot="right" value="chevron_right" color="#9e9e9e" />
        </mu-list-item>
        <mu-list-item title="我的收藏" to="/user/discuss" style="border-top: 1px solid #eeeeee">
          <mu-icon slot="right" value="chevron_right" color="#9e9e9e" />
        </mu-list-item>
      </mu-card>
      <!-- <mu-card class="UserCard-Top">
        <mu-list-item title="我的关注" @click="ToUser_issue('issue')">
          <mu-icon slot="right" value="chevron_right" color="#9e9e9e" />
        </mu-list-item>
        <mu-list-item title="我的收藏" to="/user/discuss" style="border-top: 1px solid #eeeeee">
          <mu-icon slot="right" value="chevron_right" color="#9e9e9e" />
        </mu-list-item>
      </mu-card> -->
      <mu-card class="UserCard-Top">
        <mu-list-item title="手机绑定" to="/user/cellphone">
          <mu-icon slot="right" value="chevron_right" color="#9e9e9e" />
        </mu-list-item>
        <mu-list-item title="修改资料" to="/user/modifydata" style="border-top: 1px solid #eeeeee">
          <mu-icon slot="right" value="chevron_right" color="#9e9e9e" />
        </mu-list-item>
      </mu-card>
      <mu-card class="UserCard-Top">
        <mu-flat-button label="退出当前账号" @click="End_User" class="User-Top-Btn" color="rgb(244, 67, 54)" />
      </mu-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bottomNav: "user",
        bottomNavColor: "user",
        User_Datas: {}
      };
    },
    created() {
      // this.User_Datas = JSON.parse(sessionStorage.getItem("User_Data"));
      // if(this.PhoneValue.length < '11'){
      //   this.UserLoginBtn = true;
      // }
    },
    computed: {
      PhoneValue() {
        // return this.$store.state.UserPhone;
      }
    },
    methods: {
      handleChange(val) {
        this.bottomNav = val;
      },
      End_User() {
        this.$store.commit("LoginPhone", "");
        sessionStorage.removeItem("userphone");
        console.log(this.PhoneValue.length);
        this.$router.push("/home");
      },
      ToUser_issue(label) {
        sessionStorage.setItem("UserTo", JSON.stringify(label));
        this.$router.push("/user/Userissue");
      },
      User_Follow() {
        this.$router.push("/user/follow");
      }
    }
  };

</script>
<style scoped lang="less">
  .TempLate {
    padding: 1em;
    width: 100%;
    height: 100%;
  }

  .mu-paper {
    position: fixed;
    width: 100%;
    bottom: 0;
    table-layout: fixed;
  }

  .User-Card-Zw {
    margin-top: 60%;
  }

  .mu-card {
    border-radius: 0.3em;
    margin-top: 5%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.7);
  }

  .UserCard-Top {
    border-radius: 0.3em;
    margin-top: 5%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.7);
  }

  .Top-list-item {
    border-bottom: 1px solid #eeeeee;
  }

  .demo-paper {
    display: inline-block;
    height: 100px;
    width: 100px;
    margin: 20px;
    text-align: center;
    background-color: #474a4f;
  }

  .demo-paper .mu-avatar {
    height: 100px;
    width: 100px;
  }

  .mu-avatar-inner img {
    width: 3em;
    height: 3em;
  }

  .User-Top-Btn-Left {
    width: 100%;
    height: 3em;
    border-right: 1px solid #eeeeee;
  }

  .User-Top-Btn {
    width: 100%;
    height: 3em;
  }

  .User-Bottom-Btn {
    width: 100%;
    height: 5em;
    padding: 1em;
    line-height: 2em;
  }

</style>
