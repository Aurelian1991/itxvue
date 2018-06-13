<template>
  <div class="container">
    <mu-appbar style="width: 100%; background-color:#263238;margin-bottom:1px;" title="记录中">
      <mu-icon-button icon="close" slot="left" @click="goback" />
      <mu-icon-button icon="close" slot="right">
        <mu-icon value=":fa :fa-paper-plane " class="fa-paper-plane" aria-hidden="true" />
      </mu-icon-button>
    </mu-appbar>
    <div class="content">
      <mu-text-field v-model="content" multi-line :rows="6" full-width :underlineShow="false"></mu-text-field>
    </div>
  </div>
</template>
<style lang="less" scoped>


</style>
<script>
  export default {
    data() {
      return {
        content: ""
      };
    },
    methods: {
      goback() {
        this.$router.go(-1);
      },
      init() {
        var that=this;
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function (position) {
              console.log()
              var longitude = position.coords.longitude;
              var latitude = position.coords.latitude;
             var  url='http://api.map.baidu.com/geocoder/v2/?callback=renderReverse&location=31.206671,121.603762&output=json&pois=1&ak=lr7Cl7QkbGqH5irqlK5wZvwQ9duK84hc&coordtype=gcj02ll';
              that.axios.get(url).then(response => {
                console.log(response);
            });
              console.log(longitude)
              console.log(latitude)
            },
            function (e) {
              var msg = e.code;
              var dd = e.message;
              console.log(msg)
              console.log(dd)
            }
          )
        }
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
<style lang="less" scoped>
  .container {
    position: absolute;
    top: 0px;
    width: 100%;
    width: 100%;
    height: 100%;
    background-color: #212121;
  }

  .content {
    background-color: #757575;
  }

</style>
