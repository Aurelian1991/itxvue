<template>
  <div class="container">
    <mu-back-top :bottom="80" :right="15" :duration="1000">
      <mu-float-button icon="arrow_upward" />
    </mu-back-top>
    <!-- <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="topics" icon="phone" title="RECENTS" />
      <mu-tab value="articles" icon="favorite" title="FAVORITES" />
      <mu-tab value="tab3" icon="person_pin" title="NEARBY" />
    </mu-tabs> -->
    <mu-appbar style="width: 100%;" color="">
      <mu-flat-button icon slot="left">
        <mu-icon value="search"></mu-icon>
      </mu-flat-button>
      爱偷闲
      <mu-flat-button flat slot="right" color="success" @click="goCreate">
        <mu-icon value="create"></mu-icon>
      </mu-flat-button>
    </mu-appbar>
    <div v-if="activeTab === 'topics'" class="content">

      <mu-card v-for="(item,k) in topics" :key="k">
          <mu-card-header v-if="item.user"  v-bind:title="item.user.name" v-bind:subTitle="item.created_at">
            <mu-avatar src="https://placeimg.com/244/132/any?id=42" slot="avatar" />
            <mu-flat-button label="关注" style="float:right" />
          </mu-card-header>
                    <mu-card-header v-else  title="火星来客" subTitle="sub title">
            <mu-avatar src="https://placeimg.com/244/132/any?id=42" slot="avatar" />
            <mu-flat-button label="关注" style="float:right" />
          </mu-card-header>

        <!-- <mu-card-text>
          {{item.content}}
        </mu-card-text> -->
          <mu-content-block @click.native="goDetail(item.id)">
          {{item.content}}
        </mu-content-block>
        <!-- <mu-card-media title="Image Title" subTitle="Image Sub Title"> -->
        <mu-flexbox class="">
          <mu-flexbox-item  v-if="item.picture"   v-for="(pic, ind) in item.picture" :key="ind" class="">
            <img v-lazy="pic"  />
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
              <mu-flat-button v-bind:label="item.comment_num.toFixed()" class="action-flat-button" icon="chat" />
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
        topics: []
      };
    },
    created: function () {
      this.axios.get('/topic').then((response) => {
        this.topics = this.topics.concat(response.data.data)
        console.log(this.topics);

      })

    },
    methods: {
      handleTabChange(val) {
        this.activeTab = val;
      },
      goCreate() {
        this.$router.push('/create')
      },
      goDetail(id) {
        this.$router.push('/topic/show/'+id)
      }
    }
  };

</script>
<style lang="less" scoped>
  .container {
    position: absolute;
    top: 0px;
    width:100%;
  }

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

  .mu-flexbox {
    padding-left: 16px;
    padding-right: 16px;
  }

  .mu-flexbox-item img {
    max-width: 100%;
    height: auto;
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
