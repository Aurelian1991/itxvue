<template>
  <div class="container">
    <mu-appbar title="登陆">
      <mu-icon-button icon="close" slot="right" />
    </mu-appbar>
    <mu-paper>
      <mu-text-field label="手机号或Email" hintText="11位手机号或Email" type="password" labelFloat :underlineShow="false" />
      <mu-divider/>
      <mu-text-field label="密码" hintText="不少于6位密码" type="password" labelFloat :underlineShow="false" />
      <mu-divider/>
    </mu-paper>
    <div style="width:100%;text-align:center;margin:20px;">
    <mu-raised-button label="登录" class="demo-raised-button" backgroundColor="#009a61" fullWidth />
    </div>
    <mu-divider/>
    <div class="more-login-area">
      <span class="more-login-words">更多登录方式</span>
    </div>
    <mu-flexbox>
      <mu-flexbox-item class="flex-demo">
            <mu-icon  value=":fa :fa-github"  class="fa-github" aria-hidden="true"/>
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-demo">
        <mu-icon  value=":fa :fa-qq"  class="fa-qq" color="#0091ea" aria-hidden="true"/>
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-demo">
        <mu-icon value=":fa :fa-weixin"  class="fa-weixin" color="#64dd17" />
      </mu-flexbox-item>
    </mu-flexbox>

    <div style="text-align:center;width:100%;margin:20px;">
    <mu-raised-button  class="demo-raised-button" to="/register"  >注册新账号</mu-raised-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }

</script>

<style scoped lang="less">
  .container {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    position: absolute;
    top: 0;
  }

  .mu-paper {
    width: 80%;
    text-align: center;
    position: relative;
    left: 10%;
    margin: 10px;

  }
    .mu-text-field{
        text-align: center;
    }

  .more-login-area {
    margin-top: 30px;
    margin-bottom: 25px;
    border-bottom: 1px solid #eee;
    position: relative;
    color: #777;
    text-align: center;
    width: 100%;
  }

  .more-login-words {
    position: absolute;
    top: -10px;
    left: calc(50% - 52px);
    padding: 0 10px;
    background: #fff;
  }
  .mu-flexbox{
      text-align: center;   
  }
.demo-raised-button{
    width: 80%;
}

  /*   .mu-raised-button{
      margin: 12px;
  } */

  // .mu-text-field{
  //     margin-bottom: 0;
  //     margin-left: 20px;
  //   }

</style>
