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
        <mu-card-header v-if="topic.user" v-bind:title="topic.user.name" v-bind:subTitle="topic.created_at">
          <mu-avatar src="https://placeimg.com/244/132/any?id=42" slot="avatar" />
          <mu-flat-button label="关注" style="float:right" />
        </mu-card-header>
        <mu-card-header v-else title="火星来客" subTitle="sub title">
          <mu-avatar src="https://placeimg.com/244/132/any?id=42" slot="avatar" />
          <mu-flat-button label="关注" style="float:right" />
        </mu-card-header>


        <mu-content-block>
          {{topic.content}}
        </mu-content-block>
        <!-- <mu-card-media title="Image Title" subTitle="Image Sub Title"> -->
        <mu-flexbox class="">
          <mu-flexbox-item v-if="topic.picture" v-for="(pic, ind) in topic.picture" :key="ind" class="">
            <img v-lazy="pic" />
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
              <mu-flat-button v-if="topic.comment_num" v-bind:label="topic.comment_num.toFixed()" class="action-flat-button" icon="chat"
              />
              <mu-flat-button v-else label=0 class="action-flat-button" icon="chat" />
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-demo">
              <mu-flat-button class="action-flat-button" icon="open_in_new" />
            </mu-flexbox-item>
          </mu-flexbox>
        </mu-card-actions>
      </mu-card>
    </div>
      <comment></comment>

    </div>

</template>
<style lang="less" scoped>


</style>
<script>
  import VueCoreImageUpload from 'vue-core-image-upload'
  import comment from '@/components/comment'
  export default {
    components: {
      VueCoreImageUpload,
      comment,
    },
    data() {
      return {
        topic: {},
        comments: [],
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
        var id = this.$router.currentRoute.params.id;
        this.axios.get('topic/' + id, {}).then((response) => {
          this.topic = response.data.data
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
  img {
    max-width: 100px;
    max-height: 200px;
  }

</style>

<style lang="less" scoped>
  .mu-appbar {
    color: #e0e0e0;
  }

  .mu-text-field {
    font-size: 16px; // width: 256px;
    min-height: 48px;
    display: inline-block;
    max-height: 500px;
    position: relative;
    color: rgba(0, 0, 0, .54);
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
