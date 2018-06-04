<template>
  <div class="container">
    <mu-appbar title="登陆">
      <mu-icon-button icon="close" slot="right" />
    </mu-appbar>
    <mu-paper>
      <mu-text-field   v-model="email" label="手机号或Email" hintText="11位手机号或Email" type="text" labelFloat :underlineShow="false" />
      <mu-divider/>
      <mu-text-field    v-model="password" label="密码" hintText="不少于6位密码" type="password" labelFloat :underlineShow="false" />
      <mu-divider/>
    </mu-paper>
    <div style="width:100%;text-align:center;margin:20px;">
    <mu-raised-button label="登录" class="demo-raised-button" backgroundColor="#009a61" fullWidth @click="login()" />
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
      <mu-dialog :open="dialog" title="">
        {{error}}
    <mu-flat-button label="确定" slot="actions" primary @click="close"/>
  </mu-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
          email:'',
          password:'',
          login_type:'',
          user_Datas:{},
          dialog: false,
          error:'',
          params:{}
      }
    },
    methods:{
      login(){
        this.getlogintype();
        this.axios.post('/auth/login',this.params).then((data)=> {
            console.log(data);
            this.$store.dispatch('logined')
            this.router.push('/home')
        })
      },
      getlogintype(){
        var reg_phone=/^1[345678][0-9]{9}/;
        var reg_email = /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
        if(reg_phone.test(this.email)){
            this.login_type="phone";
        }else if(reg_email.test(this.email)){
          console.log(2222);
            this.params={email:this.email,password:this.password}
            this.login_type='email';
        }else{
              this.error="请输入正确的手机号或邮箱!"
              this.open(); 
        }
      },
       open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
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
    margin-top: 10px;

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
