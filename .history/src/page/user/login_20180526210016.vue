<template>
    <div class="container‘>
        <template>
  <mu-appbar title="注册">
    <mu-icon-button icon="close" slot="right"/>
  </mu-appbar>
<mu-paper>
<mu-text-field label="名字" hintText="真实姓名或常用昵称" type="password" labelFloat />
<mu-text-field label="手机号或Email" hintText="11位手机号或Email" type="password" labelFloat/>
<mu-text-field label="密码" hintText="不少于6位密码" type="password" labelFloat/>
<mu-raised-button label="注册" class="demo-raised-button"  backgroundColor="#a4c639" fullWidth/>

</mu-paper>
</template>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style scoped lang="less">
    // .mu-text-field{
    //     margin-bottom: 0;
    //     margin-left: 20px;
    //   }

</style>
