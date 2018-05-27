<template>
    <div>
        <template>
  <mu-appbar title="注册">
    <mu-icon-button icon="close" slot="right"/>
  </mu-appbar>
<<mu-paper>
<mu-text-field label="名字" hintText="真实姓名或常用昵称" type="password" labelFloat/><br/>
<mu-text-field label="手机号或Email" hintText="11位手机号或Email" type="password" labelFloat/><br/>
<mu-text-field label="密码" hintText="不少于6位密码" type="password" labelFloat/><br/>
</div>
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

