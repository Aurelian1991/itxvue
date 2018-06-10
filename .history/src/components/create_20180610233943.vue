<template>
  <div class="container">
    <mu-flexbox>
      <mu-flexbox-item class="button_item">
        <mu-float-button class="demo-float-button" Default>
          <mu-icon value=":fa :fa-pencil :fa-5x" class="fa-pencil "  aria-hidden="true" />
        </mu-float-button>
      </mu-flexbox-item>
      <mu-flexbox-item class="button_item">
        <mu-float-button class="demo-float-button" primary>
          <mu-icon value=":fa :fa-pencil :fa-5x" class="fa-pencil " aria-hidden="true" />
        </mu-float-button>
      </mu-flexbox-item>
      <mu-flexbox-item class="button_item">
        <mu-float-button class="demo-float-button">
          <mu-icon value=":fa :fa-pencil :fa-5x" class="fa-pencil " aria-hidden="true" />
        </mu-float-button>
      </mu-flexbox-item>
    </mu-flexbox>
  </div>
</template>

<style lang="css">
  .container {
    display: flex;
    background-color:#546e7a;
  }
  .button_item{
    text-align: center;
  }
  .demo-float-button {
    margin: 12px;
    text-align: center;
    background-color: hsla(0,0%,100%,.7);
    color:#fafafa;
    border-radius: 50%;
    border-color:#ff9800; 
    

  }

</style>
