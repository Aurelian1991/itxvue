<template>
<div class="container">
  <mu-float-button       class="demo-float-button">
     <mu-icon  value=":fa :fa-pencil :fa-5x"  class="fa-pencil " aria-hidden="true"/>
  </mu-float-button>
  <mu-float-button label="Primary" class="demo-float-button" primary/>
  <mu-float-button label="Secondary" class="demo-flat-button" secondary/>
</div>
</template>

<style lang="css">
.container{
  display: flex;
}
.demo-float-button {
  margin: 12px;

}
</style>