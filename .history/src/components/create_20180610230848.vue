<template>
<div class="container">
  <mu-flat-button     class="demo-flat-button">
     <mu-icon  value=":fa :fa-pencil "  class="fa-pencil " aria-hidden="true"/>
  </mu-flat-button>
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