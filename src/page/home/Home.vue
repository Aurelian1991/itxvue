<template>
  <div class="layout">
    <div class="header">
      <div class="logo">
        Muse-UI
      </div>
      <div class="nav">
        <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
          <mu-tab value="tab1" title="首页" icon="home"/>
          <mu-tab value="tab2" title="导航2"  icon="favorite"/>
          <mu-tab value="tab3" title="导航三" icon=""/>
        </mu-tabs>
      </div>
      <div class="right">
            
            <mu-icon-button href="https://github.com/museui/muse-ui" icon="person"/>
              <!-- <i class="mudocs-icon-custom-github"></i>
            </mu-icon-button> -->

  



      </div>
      <div class="searchbar">
        <mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
        <mu-flat-button color="white" label="flat Button" slot="right"/>
      </div>
    </div>
    <div class="content">
      <div class="breadcrumb">
        <mu-breadcrumb>
          <mu-breadcrumb-item href="/">Home</mu-breadcrumb-item>
          <mu-breadcrumb-item href="/">VideoGame</mu-breadcrumb-item>
          <mu-breadcrumb-item>Download</mu-breadcrumb-item>
        </mu-breadcrumb>
      </div>
      <div class="body">
        <mu-sub-header>阳光</mu-sub-header>
        <mu-content-block>
          散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
        </mu-content-block>
      </div>
    </div>
    <div class="footer">
      Muse-UI ©2017 Created by Muse-UI
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: "tab1"
    };
  },
  methods: {
    handleTabChange(val) {
      this.activeTab = val;
    }
  }
};
</script>
<style scoped>
.layout {
  background-color: rgb(236, 236, 236);
}

.header {
  background-color: #7e57c2;
}

.logo {
  font-size: 24px;
  color: white;
  display: inline-block;
  padding: 10px 20px;
  position: absolute;
  left: 3px;
  text-align: center;
  height: 100%;
}

.nav {
  display: inline-block;
  width: 30%;
  margin: 0 auto;
  position: relative;
}

.tab {
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0);
}
.searchbar {
  margin: 0 auto;
  width: 400px;
  float: right;
}
.appbar-search-field {
  color: #fff;
  margin-bottom: 0;
  &.focus-state {
    color: #fff;
  }
  .mu-text-field-hint {
    color: fade(#fff, 54%);
  }
  .mu-text-field-input {
    color: #fff;
  }
  .mu-text-field-focus-line {
    background-color: #fff;
  }
}
.right {
  height: 100%;
  float: right;
  margin: 0 auto;
}

.content {
  width: 90%;
  margin: 0 auto;
}

.breadcrumb {
  margin: 10px 0;
}

.body {
  background-color: white;
  border-radius: 5px;
  min-height: 500px;
}

.footer {
  padding: 20px 0;
  text-align: center;
}
</style>