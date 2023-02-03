<template>
<div class="container">
  <h1>Крестики-нолики</h1>
  <tic-tac-toe />
</div>
</template>

<script>
import TicTacToe from "@/components/TicTacToe";
export default {
  components: {TicTacToe},
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
@mixin adaptiv-value($property, $startSize, $minSize, $type) {
  $addSize: $startSize - $minSize;
  @if $type==1 {
    #{$property}: $startSize + px;
    @media (max-width: #{1200 + px}) {
      #{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{1200 - 320}));
    }
  }
  @if $type==2 {
    #{$property}: $startSize + px;
    @media (min-width: #{1200 + px}) {
      #{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{1200 - 320}));
    }
  }
  @if $type==3 {
    #{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{1200 - 320}));
  }
}
h1 {
  text-align: center;
  font-weight: 600;
  @include adaptiv-value('margin-bottom', 25, 10, 1);
  @include adaptiv-value('font-size', 24, 16, 3);
}
</style>