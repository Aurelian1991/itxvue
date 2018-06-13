<template>
<div>
<router-view></router-view>
<mu-paper class="Bottom-Nav-Class">
  <mu-bottom-nav :value="bottomNav" @change="handleChange">
    <mu-bottom-nav-item value="recents" title="主页" icon="restore" to="/home"/>
    <mu-bottom-nav-item value="favorites" title="Favorites" icon="favorite" to="/home"/>
    <mu-bottom-nav-item value="favorites" title="更多" icon="favorite" to="/home"/>
    <mu-bottom-nav-item value="nearby" title="我的" icon="location_on" to="/user"/>
  </mu-bottom-nav>
</mu-paper>
</div>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: "recents"
    };
  },
  watch: {
    $route: "BottomActive"
  },
  created() {
    this.BottomActive();
  },
  methods: {
    handleChange(val) {
      this.bottomNav = val;
    },
    BottomActive(){
        const routePath = this.$route.path;
        this.bottomNav = (routePath === '/home' && 'home') || (routePath === '/exhibition' && 'exhibition') || (routePath === '/more' && 'more') || (routePath === '/user' && 'user')
        console.log(this.bottomNav)
    },
  }
};
</script>
<<style lang="less">
    .mu-text-field-content input{
        color: #fff;
    }
    .mu-bottom-item-active .mu-buttom-item-wrapper .mu-bottom-item-icon,.mu-bottom-item-active .mu-buttom-item-wrapper .mu-bottom-item-text{
        color: #ff5252;
    }
    .Login-popup-bottom{
        margin-bottom: 56px;
        width:100%;
        background-color: #474a4f !important;
    }
</style>
<style scoped lang="less">
.Bottom-Nav-Class {
  position: fixed;
  width: 100%;
  bottom: 0;
  table-layout: fixed;
}
.mu-bottom-nav {
  background-color: #474a4f;
}
.mu-buttom-item {
  color: #fff;
}
</style>