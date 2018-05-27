<template>
  <div>
    <mu-back-top :bottom="80" :right="15" :duration="1000">
        <mu-float-button icon="arrow_upward"/>
    </mu-back-top>
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="topics" icon="phone" title="RECENTS" />
      <mu-tab value="articles" icon="favorite" title="FAVORITES" />
      <mu-tab value="tab3" icon="person_pin" title="NEARBY" />
    </mu-tabs>
    <div v-if="activeTab === 'topics'" class="content">
      <mu-card v-for="(item,k) in topics" :key="k">
            <mu-card-header title="Myron Avatar" subTitle="sub title">
              <mu-avatar src="https://placeimg.com/244/132/any?id=42" slot="avatar" />
            </mu-card-header>
            <mu-card-media title="Image Title" subTitle="Image Sub Title">
              <img src="https://placeimg.com/244/132/any?id=42" />
            </mu-card-media>
            <mu-card-title title="Content Title" subTitle="Content Title" />
            <mu-card-text>
              散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。 调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。 似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光， 找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
            </mu-card-text>
            <mu-card-actions class="action-flat-button-container">
               <mu-flat-button label="文字在后面" class="demo-flat-button" icon="see" />
              <mu-flat-button label="文字在前面" class="action-flat-button"  icon="folder" />
              <mu-flat-button icon="android" class="action-flat-button" />
            </mu-card-actions>
        </mu-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "topics",

      topics: [
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 },
        { id: "1", name: "2", title: 3 }
      ]
    };
  },
  methods: {
    handleTabChange(val) {
      this.activeTab = val;
    }
  }
};
</script>
<style  lang="less">
.mu-card-header-title {
  float: left;
}
</style>
<style scoped lang="less">
.mu-tabs {
  position: fixed;
  top: 0;
}
.content {
  background-color: #efebe9;
  margin: 77px 0px;
}
.mu-card {
  margin-bottom: 15px;
}
.mu-card-header {
  overflow: hidden;
}
.mu-avatar {
  float: left;
}
.mu-card-header-title {
  float: left;
}
.action-flat-button-container{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.action-flat-button {
  margin: 12px;
}
</style>