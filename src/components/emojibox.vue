<template>
  <div>
    <carousel :perPage=1 class="EmojiPicker-slide">
      <slide>
        <ul class="emoji-list">
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😀" src="http://twemoji.maxcdn.com/72x72/1f600.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😁" src="http://twemoji.maxcdn.com/72x72/1f601.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😂" src="http://twemoji.maxcdn.com/72x72/1f602.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😃" src="http://twemoji.maxcdn.com/72x72/1f603.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😄" src="http://twemoji.maxcdn.com/72x72/1f604.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😅" src="http://twemoji.maxcdn.com/72x72/1f605.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😆" src="http://twemoji.maxcdn.com/72x72/1f606.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😇" src="http://twemoji.maxcdn.com/72x72/1f607.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😈" src="http://twemoji.maxcdn.com/72x72/1f608.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😉" src="http://twemoji.maxcdn.com/72x72/1f609.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😊" src="http://twemoji.maxcdn.com/72x72/1f60a.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😋" src="http://twemoji.maxcdn.com/72x72/1f60b.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😌" src="http://twemoji.maxcdn.com/72x72/1f60c.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😍" src="http://twemoji.maxcdn.com/72x72/1f60d.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😎" src="http://twemoji.maxcdn.com/72x72/1f60e.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😏" src="http://twemoji.maxcdn.com/72x72/1f60f.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😐" src="http://twemoji.maxcdn.com/72x72/1f610.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😑" src="http://twemoji.maxcdn.com/72x72/1f611.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😒" src="http://twemoji.maxcdn.com/72x72/1f612.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😓" src="http://twemoji.maxcdn.com/72x72/1f613.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😔" src="http://twemoji.maxcdn.com/72x72/1f614.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😕" src="http://twemoji.maxcdn.com/72x72/1f615.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😖" src="http://twemoji.maxcdn.com/72x72/1f616.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😗" src="http://twemoji.maxcdn.com/72x72/1f617.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😘" src="http://twemoji.maxcdn.com/72x72/1f618.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😙" src="http://twemoji.maxcdn.com/72x72/1f619.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😚" src="http://twemoji.maxcdn.com/72x72/1f61a.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😛" src="http://twemoji.maxcdn.com/72x72/1f61b.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😜" src="http://twemoji.maxcdn.com/72x72/1f61c.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😝" src="http://twemoji.maxcdn.com/72x72/1f61d.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😞" src="http://twemoji.maxcdn.com/72x72/1f61e.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😟" src="http://twemoji.maxcdn.com/72x72/1f61f.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😠" src="http://twemoji.maxcdn.com/72x72/1f620.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😡" src="http://twemoji.maxcdn.com/72x72/1f621.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😢" src="http://twemoji.maxcdn.com/72x72/1f622.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😣" src="http://twemoji.maxcdn.com/72x72/1f623.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😤" src="http://twemoji.maxcdn.com/72x72/1f624.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😥" src="http://twemoji.maxcdn.com/72x72/1f625.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😦" src="http://twemoji.maxcdn.com/72x72/1f626.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😧" src="http://twemoji.maxcdn.com/72x72/1f627.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😨" src="http://twemoji.maxcdn.com/72x72/1f628.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😩" src="http://twemoji.maxcdn.com/72x72/1f629.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😪" src="http://twemoji.maxcdn.com/72x72/1f62a.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😫" src="http://twemoji.maxcdn.com/72x72/1f62b.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😬" src="http://twemoji.maxcdn.com/72x72/1f62c.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😭" src="http://twemoji.maxcdn.com/72x72/1f62d.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😮" src="http://twemoji.maxcdn.com/72x72/1f62e.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😯" src="http://twemoji.maxcdn.com/72x72/1f62f.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😰" src="http://twemoji.maxcdn.com/72x72/1f630.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😱" src="http://twemoji.maxcdn.com/72x72/1f631.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😲" src="http://twemoji.maxcdn.com/72x72/1f632.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😳" src="http://twemoji.maxcdn.com/72x72/1f633.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😴" src="http://twemoji.maxcdn.com/72x72/1f634.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😵" src="http://twemoji.maxcdn.com/72x72/1f635.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😶" src="http://twemoji.maxcdn.com/72x72/1f636.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😷" src="http://twemoji.maxcdn.com/72x72/1f637.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😸" src="http://twemoji.maxcdn.com/72x72/1f638.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😹" src="http://twemoji.maxcdn.com/72x72/1f639.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😺" src="http://twemoji.maxcdn.com/72x72/1f63a.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😻" src="http://twemoji.maxcdn.com/72x72/1f63b.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😼" src="http://twemoji.maxcdn.com/72x72/1f63c.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😽" src="http://twemoji.maxcdn.com/72x72/1f63d.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😾" src="http://twemoji.maxcdn.com/72x72/1f63e.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="😿" src="http://twemoji.maxcdn.com/72x72/1f63f.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🙀" src="http://twemoji.maxcdn.com/72x72/1f640.png">
          </li>

        </ul>
      </slide>
      <slide>
        <ul class="emoji-list">

          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🈚" src="http://twemoji.maxcdn.com/72x72/1f21a.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🈯" src="http://twemoji.maxcdn.com/72x72/1f22f.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🈲" src="http://twemoji.maxcdn.com/72x72/1f232.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🈳" src="http://twemoji.maxcdn.com/72x72/1f233.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🈴" src="http://twemoji.maxcdn.com/72x72/1f234.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🈵" src="http://twemoji.maxcdn.com/72x72/1f235.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🈶" src="http://twemoji.maxcdn.com/72x72/1f236.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🈷" src="http://twemoji.maxcdn.com/72x72/1f237.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🈸" src="http://twemoji.maxcdn.com/72x72/1f238.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🈹" src="http://twemoji.maxcdn.com/72x72/1f239.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🈺" src="http://twemoji.maxcdn.com/72x72/1f23a.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🉐" src="http://twemoji.maxcdn.com/72x72/1f250.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🉑" src="http://twemoji.maxcdn.com/72x72/1f251.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="㊗" src="http://twemoji.maxcdn.com/72x72/3297.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="㊙" src="http://twemoji.maxcdn.com/72x72/3299.png">
          </li>
        </ul>
      </slide>
      <slide>
        <ul class="emoji-list">




          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🌲" src="http://twemoji.maxcdn.com/72x72/1f332.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🌳" src="http://twemoji.maxcdn.com/72x72/1f333.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🌴" src="http://twemoji.maxcdn.com/72x72/1f334.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🌵" src="http://twemoji.maxcdn.com/72x72/1f335.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🌷" src="http://twemoji.maxcdn.com/72x72/1f337.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🌸" src="http://twemoji.maxcdn.com/72x72/1f338.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🌹" src="http://twemoji.maxcdn.com/72x72/1f339.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🌺" src="http://twemoji.maxcdn.com/72x72/1f33a.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🌻" src="http://twemoji.maxcdn.com/72x72/1f33b.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🌼" src="http://twemoji.maxcdn.com/72x72/1f33c.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🌽" src="http://twemoji.maxcdn.com/72x72/1f33d.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🌾" src="http://twemoji.maxcdn.com/72x72/1f33e.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🌿" src="http://twemoji.maxcdn.com/72x72/1f33f.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍀" src="http://twemoji.maxcdn.com/72x72/1f340.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍁" src="http://twemoji.maxcdn.com/72x72/1f341.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍂" src="http://twemoji.maxcdn.com/72x72/1f342.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍃" src="http://twemoji.maxcdn.com/72x72/1f343.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍄" src="http://twemoji.maxcdn.com/72x72/1f344.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍅" src="http://twemoji.maxcdn.com/72x72/1f345.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍆" src="http://twemoji.maxcdn.com/72x72/1f346.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍇" src="http://twemoji.maxcdn.com/72x72/1f347.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍈" src="http://twemoji.maxcdn.com/72x72/1f348.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍉" src="http://twemoji.maxcdn.com/72x72/1f349.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍊" src="http://twemoji.maxcdn.com/72x72/1f34a.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍋" src="http://twemoji.maxcdn.com/72x72/1f34b.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍌" src="http://twemoji.maxcdn.com/72x72/1f34c.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍍" src="http://twemoji.maxcdn.com/72x72/1f34d.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍎" src="http://twemoji.maxcdn.com/72x72/1f34e.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍏" src="http://twemoji.maxcdn.com/72x72/1f34f.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍐" src="http://twemoji.maxcdn.com/72x72/1f350.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍑" src="http://twemoji.maxcdn.com/72x72/1f351.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍒" src="http://twemoji.maxcdn.com/72x72/1f352.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍓" src="http://twemoji.maxcdn.com/72x72/1f353.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍔" src="http://twemoji.maxcdn.com/72x72/1f354.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍕" src="http://twemoji.maxcdn.com/72x72/1f355.png">
          </li>
          <li @click="getemoji">
            <img draggable="false" class="emoji" alt="🍖" src="http://twemoji.maxcdn.com/72x72/1f356.png">
          </li>
        </ul>
      </slide>
    </carousel>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        emoji: false,
        EmojiPicker: [{},
          {},
          {}
        ],
      }
    },
    methods: {
      showemoji() {
        this.emoji = true
      },
      getemoji(e){
          
          console.log();
          this.$emit('emojiclick',e.currentTarget.innerHTML);
      }
    }
  }

</script>
<style scoped>
 .EmojiPicker-slide {
    background-color: #11121d
  }

  .EmojiPicker-item {
    background-color: #11121d;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 1.25em 1.25em;
    border-radius: 2px;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    font-size: 14px;
    height: 1.25em;
    margin: 1.5px;
    padding: 3.5px;
    transition: background-size .2s;
    vertical-align: top;
    width: 1.25em;
    border: none;

  }

  img.emoji {
    cursor: pointer;
    height: 1em;
    width: 1em;
    margin: 0 .05em 0 .1em;
    vertical-align: -0.1em;
  }

  ul {
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
    height: 232px;
    overflow-y: scroll;
  }

  ul.emoji-list li {
    font-size: 36px;
    float: left;
    display: inline-block;
    padding: 2px;
    margin: 2px;
  }
</style>

