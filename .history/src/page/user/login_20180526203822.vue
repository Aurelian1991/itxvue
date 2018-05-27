<template>
    <div>
        <template>
  <mu-appbar title="注册">
    <mu-icon-button icon="close" slot="right"/>
  </mu-appbar>
    <div>
<mu-sub-header>你的明细</mu-sub-header>
  <mu-text-field v-model="value"/><br/>
  <mu-text-field label="标签文字" hintText="提示文字"/><br/>
  <mu-text-field label="浮动标签" labelFloat/><br/>
  <mu-text-field label="密码" hintText="请输入密码" type="password" labelFloat/><br/>
  <mu-text-field hintText="多行文本输入，默认 3行，最大6行" multiLine :rows="3" :rowsMax="6"/><br/>
  <mu-text-field hintText="Full Width" fullWidth /><br/>
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

