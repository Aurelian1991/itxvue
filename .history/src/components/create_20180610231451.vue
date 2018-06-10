<template>
<div class="container">
  <mu-float-button     disabled  class="demo-flat-button">
     <mu-icon  value=":fa :fa-pencil :fa-5x"  class="fa-pencil " aria-hidden="true"/>
     11
  </mu-float-button>
  <mu-float-button label="Primary" class="demo-flat-button" primary/>
  <mu-float-button label="Secondary" class="demo-flat-button" secondary/>
</div>
</template>

<style lang="css">
.container{
  display: flex;
}
.demo-flat-button {
  margin: 12px;
}
</style>