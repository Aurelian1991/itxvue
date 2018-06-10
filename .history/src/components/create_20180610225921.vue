<template>
<div class="container">
  <mu-flexbox>
    <mu-flexbox-item class="flex-demo">
      <mu-avatar slot="left" icon="folder" color="orange200" backgroundColor="pink400" :size="30" :iconSize="20"/>
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo">
     <mu-avatar slot="left" icon="folder" color="orange200" backgroundColor="pink400" :size="30" :iconSize="20"/>
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo">
      <mu-avatar slot="left" icon="folder" color="orange200" backgroundColor="pink400" :size="30" :iconSize="20"/>
    </mu-flexbox-item>
  </mu-flexbox>
</div>
</template>

<style lang="css">
.mt8 {
  margin-top: 8px;
}
.flex-demo {
  height: 32px;
  background-color: #e0e0e0;
  text-align: center;
  line-height: 32px;
}
</style>