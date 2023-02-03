<template>
  <div class="block-current cross">
    <div class="cross"></div>
    <div class="zero"></div>
  </div>
  <div class="block-content">
    <div class="block">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
      <div class="block__item item-block" @click="clickBlock">
        <div class="cross"></div>
        <div class="zero"></div>
      </div>
      <div class="block__item item-block" @click="clickBlock">
        <div class="cross"></div>
        <div class="zero"></div>
      </div>
      <div class="block__item item-block" @click="clickBlock">
        <div class="cross"></div>
        <div class="zero"></div>
      </div>
      <div class="block__item item-block" @click="clickBlock">
        <div class="cross"></div>
        <div class="zero"></div>
      </div>
      <div class="block__item item-block" @click="clickBlock">
        <div class="cross"></div>
        <div class="zero"></div>
      </div>
      <div class="block__item item-block" @click="clickBlock">
        <div class="cross"></div>
        <div class="zero"></div>
      </div>
      <div class="block__item item-block" @click="clickBlock">
        <div class="cross"></div>
        <div class="zero"></div>
      </div>
      <div class="block__item item-block" @click="clickBlock">
        <div class="cross"></div>
        <div class="zero"></div>
      </div>
      <div class="block__item item-block" @click="clickBlock">
        <div class="cross"></div>
        <div class="zero"></div>
      </div>
    </div>
  </div>
  <button class="block-reset" @click="reset">Начать заново</button>
</template>

<script>
export default {
  name: 'tic-tac-toe',
  data() {
    return {
      step: 'cross',
      finish: false
    }
  },
  methods: {
    reset() {
      let blocks = document.querySelectorAll('.block__item')
      if (blocks.length) {
        blocks.forEach(b => {
          b.classList.remove('cross')
          b.classList.remove('zero')
        })
      }
      let lines = document.querySelectorAll('.line')
      if (lines.length) {
        lines.forEach(l => {
          l.classList.remove('open')
        })
      }
      this.finish = false
    },
    clickBlock(e) {
      if (!this.finish) {
        let block = document.querySelector('.block-current')
        if (!e.target.classList.contains('cross') && !e.target.classList.contains('zero') && block) {
          block.classList.remove('zero')
          block.classList.remove('cross')
          if (this.step === 'cross') {
            e.target.classList.add('cross')
            this.step = 'zero'
            block.classList.add('zero')
          } else if (this.step === 'zero') {
            e.target.classList.add('zero')
            this.step = 'cross'
            block.classList.add('cross')
          }
        }
        this.checkWin()
      } else {
        this.reset()
      }
    },
    checkWin() {
      let blocks = document.querySelectorAll('.block__item')
      let lines = document.querySelectorAll('.line')
      if (blocks.length) {
        if ((blocks[0].classList.contains('cross') && blocks[1].classList.contains('cross') && blocks[2].classList.contains('cross')) ||
            (blocks[0].classList.contains('zero') && blocks[1].classList.contains('zero') && blocks[2].classList.contains('zero'))) {
          lines[0].classList.add('open')
        }
        if ((blocks[3].classList.contains('cross') && blocks[4].classList.contains('cross') && blocks[5].classList.contains('cross')) ||
            (blocks[3].classList.contains('zero') && blocks[4].classList.contains('zero') && blocks[5].classList.contains('zero'))) {
          lines[1].classList.add('open')
        }
        if ((blocks[6].classList.contains('cross') && blocks[7].classList.contains('cross') && blocks[8].classList.contains('cross')) ||
            (blocks[6].classList.contains('zero') && blocks[7].classList.contains('zero') && blocks[8].classList.contains('zero'))) {
          lines[2].classList.add('open')
        }
        if ((blocks[0].classList.contains('cross') && blocks[3].classList.contains('cross') && blocks[6].classList.contains('cross')) ||
            (blocks[0].classList.contains('zero') && blocks[3].classList.contains('zero') && blocks[6].classList.contains('zero'))) {
          lines[3].classList.add('open')
        }
        if ((blocks[1].classList.contains('cross') && blocks[4].classList.contains('cross') && blocks[7].classList.contains('cross')) ||
            (blocks[1].classList.contains('zero') && blocks[4].classList.contains('zero') && blocks[7].classList.contains('zero'))) {
          lines[4].classList.add('open')
        }
        if ((blocks[2].classList.contains('cross') && blocks[5].classList.contains('cross') && blocks[8].classList.contains('cross')) ||
            (blocks[2].classList.contains('zero') && blocks[5].classList.contains('zero') && blocks[8].classList.contains('zero'))) {
          lines[5].classList.add('open')
        }
        if ((blocks[0].classList.contains('cross') && blocks[4].classList.contains('cross') && blocks[8].classList.contains('cross')) ||
            (blocks[0].classList.contains('zero') && blocks[4].classList.contains('zero') && blocks[8].classList.contains('zero'))) {
          lines[6].classList.add('open')
        }
        if ((blocks[2].classList.contains('cross') && blocks[4].classList.contains('cross') && blocks[6].classList.contains('cross')) ||
            (blocks[2].classList.contains('zero') && blocks[4].classList.contains('zero') && blocks[6].classList.contains('zero'))) {
          lines[7].classList.add('open')
        }
        let f = 0
        blocks.forEach(b => {
          if (b.classList.contains('cross') || b.classList.contains('zero')) f++
        })
        if (f === 9) {
          setTimeout(() => {
            this.reset()
          }, 500)
        }
      }
      if (lines.length) {
        lines.forEach(l => {
          if (l.classList.contains('open')) this.finish = true
        })
      }
    }
  },
  mounted() {
    console.clear()
  }
}
</script>

<style scoped lang="scss">
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
.block-content {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  margin: 0 0 10px 0;
}
.block {
  display: flex;
  flex-wrap: wrap;
  max-width: 300px;
  margin: 0 auto;
  position: relative;
  .line {
    display: block;
    background: rgba(245, 142, 17, 0.5);
    z-index: 5;
    position: absolute;
    border-radius: 5px;

    &:nth-child(1) {
      top: 50px;
      left: 0;
      width: 0;
      transform: translate(-5%, 0);
      height: 5px;

      &.open {
        width: 110%;
      }
    }

    &:nth-child(2) {
      top: 150px;
      left: 0;
      width: 0;
      transform: translate(-5%, 0);
      height: 5px;

      &.open {
        width: 110%;
      }
    }

    &:nth-child(3) {
      top: 250px;
      left: 0;
      width: 0;
      transform: translate(-5%, 0);
      height: 5px;

      &.open {
        width: 110%;
      }
    }

    &:nth-child(4) {
      top: 0;
      left: 50px;
      width: 5px;
      height: 0;
      transform: translate(0, -5%);

      &.open {
        height: 110%;
      }
    }

    &:nth-child(5) {
      top: 0;
      left: 150px;
      width: 5px;
      height: 0;
      transform: translate(0, -5%);

      &.open {
        height: 110%;
      }
    }

    &:nth-child(6) {
      top: 0;
      left: 250px;
      width: 5px;
      height: 0;
      transform: translate(0, -5%);

      &.open {
        height: 110%;
      }
    }

    &:nth-child(7) {
      top: 50%;
      left: -14%;
      transform: rotate(45deg);
      width: 0;
      height: 5px;

      &.open {
        width: 130%;
      }
    }

    &:nth-child(8) {
      top: 5%;
      left: 30%;
      transform: rotate(-45deg) translate(-50%, -50%);
      width: 0;
      height: 5px;

      &.open {
        width: 130%;
      }
    }
  }
  .block__item {
    border: 1px solid black;
  }
}
.item-block, .block-current {
  width: 100px;
  height: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  .zero {
    border: 5px solid black;
    padding: 30px;
    border-radius: 50%;
    display: none;
  }
  .cross {
      position: relative;
      &::before, &::after {
        width: 80px;
        height: 5px;
        background: black;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }
  }
  &.cross {
    .cross {
      &::before, &::after {
        content: '';
      }
    }
  }
  &.zero {
    .zero {
      display: block;
    }
  }
}
.block-current {
  border: 1px solid black;
  margin: 0 auto 10px;
  width: 50px;
  height: 50px;
  cursor: default;
  .cross {
    &::before, &::after {
      width: 40px;
      height: 3px;
    }
  }
  .zero {
    padding: 15px;
    border: 3px solid black;
  }
}
.block-reset {
  margin: 0 auto;
  width: max-content;
  padding: 10px;
  background: white;
  border: 1px solid black;
  border-radius: 5px;
  font-weight: 500;
  @include adaptiv-value('font-size', 18, 12, 3);
}
</style>