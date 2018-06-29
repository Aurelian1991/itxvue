<template>
  <div class="container">
    <mu-appbar style="width: 100%; background-color:#181928;margin-bottom:1px;" title="详情">
      <mu-icon-button icon="close" slot="left" @click="goback" />
      <!-- <mu-icon-button icon="close" slot="right" @click="topicSave" >
        <mu-icon value=":fa :fa-paper-plane " class="fa-paper-plane" aria-hidden="true" />
      </mu-icon-button> -->
    </mu-appbar>

    <div class="content">
          <mu-card v-if="topic">
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
    <mu-chip v-for="(item,index) in fileList" :key="item.name" class="chip" @delete="handleClose(index)" showDelete>
      <img :src=item.url>
    </mu-chip>

    <div class="add_button">
      <vue-core-image-upload class="btn btn-primary" :crop="false" @imageuploaded="imageUploded" :max-file-size="5242880" :multiple="true"
        :multiple-size="4" url="http://www.vueapi.com/api/upload/pictures">
        <i class="fa fa-plus fa-2x add" aria-hidden="true"></i>
      </vue-core-image-upload>
    </div>


    <div style="position:absolute;bottom:0px;width:100%; background-color: #181928;">
      <mu-flexbox>
        <mu-flexbox-item class="flex-bottom">
          <mu-icon-button @click="openBottomSheet" icon="sentiment_satisfied_alt">
            <mu-icon value=":fa :fa-smile-o" class="fa-smile-o" aria-hidden="true" color="#00e676"></mu-icon>
          </mu-icon-button>
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-bottom">
          <mu-icon-button @click="openBottomSheet" icon="sentiment_satisfied_alt">
            <mu-icon value=":fa :fa-hashtag" class="fa-hashtag" aria-hidden="true" color="#00e676"></mu-icon>
          </mu-icon-button>
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-bottom">
          <mu-icon-button @click="openBottomSheet" icon="sentiment_satisfied_alt">
            <mu-icon value=":fa :fa-tag" class="fa-tag" aria-hidden="true" color="#00e676"></mu-icon>
          </mu-icon-button>
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-bottom">
          <mu-icon-button @click="openBottomSheet" icon="sentiment_satisfied_alt">
            <mu-icon value=":fa :fa-list-alt" class="fa-list-alt" aria-hidden="true" color="#00e676"></mu-icon>
          </mu-icon-button>
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-bottom">
          <mu-icon-button @click="openBottomSheet" icon="sentiment_satisfied_alt">
            <mu-icon value=":fa :fa-sun-o" class="fa-sun-o" aria-hidden="true" color="#00e676"></mu-icon>
          </mu-icon-button>
        </mu-flexbox-item>
      </mu-flexbox>

      <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
        <mu-list @itemClick="closeBottomSheet">
          <mu-sub-header>
            请选择一个
          </mu-sub-header>
          <mu-list-item title="阴阳师" />
          <mu-list-item title="贪吃蛇大作战" />
          <mu-list-item title="一划到底" />
          <mu-list-item title="全民斗地主" />
        </mu-list>
      </mu-bottom-sheet>
    </div>
  </div>

</template>
<style lang="less" scoped>


</style>
<script>
  import VueCoreImageUpload from 'vue-core-image-upload'
  export default {
    components: {
      VueCoreImageUpload,
    },
    data() {
      return {
        topic: {},
        bottomSheet: false,
      };
    },
    methods: {
      goback() {
        this.$router.go(-1);
      },
      imageUploded(res) {
        // if (res.errcode == 0) {
        console.log(res.data.data);
        this.fileList = this.fileList.concat(res.data.data);
        // }
      },
      handleClose(index) {
        this.fileList.splice(index, 1);
      },
      init() {
          var id=this.$router.currentRoute.params.id;
            this.axios.get('topic/'+id,{}).then((response) => {
                this.topic=response.data.data
              });
      },
      closeBottomSheet() {
        this.bottomSheet = false
      },
      openBottomSheet() {
        this.bottomSheet = true
      }
    },
    created() {
      this.init();
      // this.axios.post("/auth/login", this.params).then(response => {
      //   // this.$router.push("/home");
      // });
    }

  };

</script>
<style lang="less">


</style>

<style lang="less" scoped>
  .mu-appbar {
    color: #e0e0e0;
  }
  .mu-text-field {
    font-size: 16px;
    // width: 256px;
    min-height: 48px;
    display: inline-block;
    max-height: 500px;
    position: relative;
    color: rgba(0,0,0,.54);
    margin-bottom: 8px;
    overflow-y: scroll;
}

  .mu-text-field-input {
    // color: #e0e0e0;
    // color: #grey100;
    color: #bdbdbd;

  }
  .container {
    position: absolute;
    top: 0px;
    width: 100%;
    width: 100%;
    height: 100%;
    background-color: #11121d;
    color: #474a4f;

  }

  .content {
    background-color: #181928;
  }

  .chip {
    float: left; // width:120px;
    height: 120px;
    margin: 0px 5px;
  }

  img {
    max-width: 100px;
    max-height: 200px;
  }

  .add_button {
    border: solid 1px;
    overflow: hidden;
    display: inline-block;
    *display: inline;
    *zoom: 1;
    float: left;
    margin: 5px;
  }

  .add {
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .file-button {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
  }

  .flex-bottom {
    text-align: center;
    line-height: 32px;
  }

  .button-item {
    color: #2e7d32;
    font-color: #2e7d32;
  }

</style>
