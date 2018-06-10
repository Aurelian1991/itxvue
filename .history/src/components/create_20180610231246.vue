<template>
<div class="container">
  <mu-float-button     class="demo-flat-button">
     <mu-icon  value=":fa :fa-pencil :fa-5x"  class="fa-pencil " aria-hidden="true"/>
  </mu-float-button>
  <mu-flat-button label="Primary" class="demo-flat-button" primary/>
  <mu-flat-button label="Secondary" class="demo-flat-button" secondary/>
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