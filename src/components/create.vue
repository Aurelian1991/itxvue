<template>
  <div class="container">
    <mu-flexbox class="box">
      <mu-flexbox-item class="button_item">
        <mu-float-button class="demo-float-button" Default to="/topic/create">
          <mu-icon value=":fa :fa-pencil :fa-5x" class="fa-pencil " aria-hidden="true" />
        </mu-float-button>
                <p class="button_title">话题</p>
      </mu-flexbox-item>
      <mu-flexbox-item class="button_item">
        <mu-float-button class="demo-float-button" primary  to="/article/create">
          <mu-icon value=":fa :fa-book  :fa-5x" class="fa-book  " aria-hidden="true" />
        </mu-float-button>
        <p class='button_title'>文章</p>
      </mu-flexbox-item>
      <mu-flexbox-item class="button_item">
        <mu-float-button class="demo-float-button">
          <mu-icon value=":fa :fa-file-image-o  :fa-5x" class="fa-file-image-o" aria-hidden="true" />
        </mu-float-button>
            <p class="button_title">图</p>
      </mu-flexbox-item>
    </mu-flexbox>
     <mu-flexbox-item order="2" class="flex-demo">
       <div class="">
        <mu-float-button class="demo-float-button circle" primary @click='goback'>
          <mu-icon value=":fa :fa-times   :fa-5x" class="fa-times " aria-hidden="true" />
        </mu-float-button>
       </div>
    </mu-flexbox-item>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    goback(){
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="css">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #546e7a;
  /* background-color:aliceblue; */
  flex-wrap: wrap;
  text-align: center;
  position: absolute;
  top: 0;
}
.box{
  margin-top:50%;
}

.button_item {
  text-align: center;
}
.button_title {
  color: #fff;
}

.demo-float-button {
  margin: 12px;
  text-align: center;
  background-color: #546e7a;
}
.circle{
  border-radius: 50%;
 border: 1px solid #fff
}
.close {
  text-align: center;
}
</style>
