<template>
  <div>
    <mu-back-top :bottom="80" :right="15" :duration="1000">
      <mu-float-button icon="arrow_upward" />
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
          <mu-flat-button label="关注" style="float:right" />
        </mu-card-header>
        <mu-card-text>
          散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
        </mu-card-text>
          <!-- <mu-card-media title="Image Title" subTitle="Image Sub Title"> -->
          <mu-flexbox>
            <mu-flexbox-item class="action-flat-button">
            <img src="https://placeimg.com/244/132/any?id=42" />
          </mu-flexbox-item>
                      <mu-flexbox-item class="action-flat-button">
            <img src="https://placeimg.com/244/132/any?id=42" />
          </mu-flexbox-item>
                      <mu-flexbox-item class="action-flat-button">
            <img src="https://placeimg.com/244/132/any?id=42" />
          </mu-flexbox-item>
                      </mu-flexbox>
        <!-- </mu-card-media> -->
        <mu-card-actions class="action-flat-button-container">
          <mu-flexbox>
            <mu-flexbox-item class="flex-demo">
              <mu-flat-button label="123" class="demo-flat-button" icon="thumb_up" style="outline" />
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-demo">
              <mu-flat-button label="文字在前面" class="action-flat-button" icon="favorite_border" />
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-demo">
              <mu-flat-button label='1312' class="action-flat-button" icon="chat" />
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-demo">
              <mu-flat-button class="action-flat-button" icon="open_in_new" />
            </mu-flexbox-item>
          </mu-flexbox>
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

        topics: [{
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          },
          {
            id: "1",
            name: "2",
            title: 3
          }
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
<style lang="less">
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
    margin: 0px 0px;
  }

  .mu-card {
    margin-bottom: 15px;
  }

  .mu-card-header {
    overflow: hidden;
    padding-right: 0px;
  }

  .mu-avatar {
    float: left;
  }

  .mu-card-header-title {
    float: left;
  }

  .action-flat-button-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .action-flat-button {
    margin: 12px;
  }

</style>
