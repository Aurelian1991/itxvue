<template>
  <div class="container">
    <mu-appbar title="注册">
      <mu-icon-button icon="close" slot="right" />
    </mu-appbar>
    <mu-paper>
      <mu-text-field label="名字" hintText="真实姓名或常用昵称" type="password" labelFloat :underlineShow="false" />
      <mu-divider/>
      <mu-text-field label="手机号或Email" hintText="11位手机号或Email" type="password" labelFloat :underlineShow="false" />
      <mu-divider/>
      <mu-text-field label="密码" hintText="不少于6位密码" type="password" labelFloat :underlineShow="false" />
      <mu-divider/>
    </mu-paper>
    <mu-raised-button label="注册" class="demo-raised-button" backgroundColor="#009a61" fullWidth />
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
          <mu-divider/>
    <mu-raised-button label="注册" class="demo-raised-button" fullWidth >已有账号登录</mu-raised-button>
          <mu-divider/>
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
  }

  .mu-paper {
    width: 100%;
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


  /*   .mu-raised-button{
      margin: 12px;
  } */

  // .mu-text-field{
  //     margin-bottom: 0;
  //     margin-left: 20px;
  //   }

</style>
