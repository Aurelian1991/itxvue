<template>
  <div class="container">
    <mu-appbar style="width: 100%; background-color:#181928;margin-bottom:1px;" title="记录中">
      <mu-icon-button icon="close" slot="left" @click="goback" />
      <mu-icon-button icon="close" slot="right">
        <mu-icon value=":fa :fa-paper-plane " class="fa-paper-plane" aria-hidden="true" />
      </mu-icon-button>
    </mu-appbar>
    
    <div class="content" >
      <mu-text-field v-model="content" multi-line :rows="10" full-width :underlineShow="false" inputClass="textbox"></mu-text-field>
    </div>
    <div class="add_button">
         <mu-icon-button class="add">
             <input type="file" class="file-button">
            <mu-icon  value=":fa :fa-plus"  class="fa-plus"  aria-hidden="true">
            </mu-icon>
         </mu-icon-button>
    </div>
<div>
  <mu-raised-button @click="openBottomSheet" label="Open Bottom Sheet" />
  <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
    <mu-list @itemClick="closeBottomSheet">
      <mu-sub-header>
        请选择一个
      </mu-sub-header>
      <mu-list-item title="阴阳师"/>
      <mu-list-item title="贪吃蛇大作战"/>
      <mu-list-item title="一划到底"/>
      <mu-list-item title="全民斗地主"/>
    </mu-list>
  </mu-bottom-sheet>
</div> 
  </div>
  
</template>
<style lang="less" scoped>


</style>
<script>
  export default {
    data() {
      return {
        content: "",
        bottomSheet: false
      };
    },
    methods: {
      goback() {
        this.$router.go(-1);
      },
      init() {
        var that = this;
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function (position) {
              var longitude = position.coords.longitude;
              var latitude = position.coords.latitude;
                var longitude = 121.60378;
              var latitude = 31.206696;
                that.axios.get('position/gps',{params:{latitude:latitude,longitude:longitude}}).then((response) => {
                  // console.log(response.data.data.formatted_address)
              });

            },
            function (e) {
              var msg = e.code;
              var dd = e.message;
              console.log(msg)
              console.log(dd)
            }
          )
        }
      },
       closeBottomSheet () {
      this.bottomSheet = false
    },
    openBottomSheet () {
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
  .mu-appbar{
      color: #e0e0e0;
  }
  .mu-text-field-input {
    // color: #e0e0e0;
        // color: #grey100;
        color: #bdbdbd;
        
  }

</style>

<style lang="less" scoped>
  .container {
    position: absolute;
    top: 0px;
    width: 100%;
    width: 100%;
    height: 100%;
    background-color: #11121d;
    color:#474a4f;

  }

  .content {
    background-color: #181928;
  }
  .add_button{
    border:  solid 1px;
    overflow:hidden ;
    display:inline-block; 
    *display:inline; 
    *zoom:1;
    float:left;
    margin:5px;
  }
  .add{
    height: 100px;
    width: 100px;
  }
.file-button{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
}


</style>
