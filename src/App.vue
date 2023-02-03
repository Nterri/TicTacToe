<template>
    <div class="content">
      <router-view>

      </router-view>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}
/*--------------------*/

@import url(https://fonts.googleapis.com/css?family=Montserrat:300,regular,500,600,italic&display=swap);
#app {
  font-style: normal;
  font-family: Montserrat;
  color: black;
  background: #fff;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.content {
  flex: 1 1 auto;
}
.container {
  max-width: 900px;
  margin: 0 auto;
  min-height: #{100vh - 20};
  padding: 10px;
  box-sizing: content-box;
  color: black;
  display: flex;
  flex-direction: column;
}
</style>