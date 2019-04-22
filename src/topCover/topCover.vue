<template>
  <div class='topCover' :class='[Mask?"mask":"",FullScreen?"fullScreen":"",HorizontalCenter?"horizontal-center":"",VerticalCenter?"vertical-center":""]' :style='Position'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      mask: {
        type: Boolean,
        default: true
      },
      fullScreen: {
        type: Boolean,
        default: true
      },
      horizontalCenter: {
        type: Boolean,
        default: false
      },
      verticalCenter: {
        type: Boolean,
        default: false
      },
      top: {
        type: [Number, String],
        default: 'default'
      },
      bottom: {
        type: [Number, String],
        default: 'default'
      },
      left: {
        type: [Number, String],
        default: 'default'
      },
      right: {
        type: [Number, String],
        default: 'default'
      }
    },
    computed: {
      Mask() {
        return this.mask;
      },
      FullScreen() {
        return this.fullScreen;
      },
      HorizontalCenter() {
        return this.horizontalCenter;
      },
      VerticalCenter() {
        return this.verticalCenter;
      },
      Position() {
        var style = {};
        var top = this.toPx(this.top);
        if (top !== 'default') {
          style.top = top;
        }
        var bottom = this.toPx(this.bottom);
        if (bottom !== 'default') {
          style.bottom = bottom;
        }
        var left = this.toPx(this.left);
        if (left !== 'default') {
          style.left = left;
        }
        var right = this.toPx(this.right);
        if (right !== 'default') {
          style.right = right;
        }
        return style;
      }

    },
    methods: {
      /**
       * 将默认值为'default'的数字或字符串转换为'number+px'.
       * @param{number|string} value
       * @returns {string}
       */
      toPx(value) {
        /**匹配数字+px的字符串 */
        var regExp = /^\d+(?=px)/;
        /**匹配纯数字字符串 */
        var regExp_number = /^\d+$/;
        if (value === 'default') {
          return 'default';
        }
        if (typeof value === 'number' || typeof value === 'string' && regExp_number.test(value) === true) {
          return value.toString() + 'px';
        } else if (typeof value === 'string' && regExp.test(value) === true) {
          return value;
        } else {
          console.log('格式错误:' + value);
          return 'default';
        }
      }
    }
  };
</script>
<style>
  .topCover {
    position: fixed;
    margin: 0;
    padding: 0;
  }

  .mask {
    top: 0;
    opacity: 0.5;
    background-color: #000000;
  }

  .fullScreen {
    width: 100%;
    height: 100%;
  }

  .horizontal-center {
    left: 50%;
    transform: translateX(-50%);
  }

  .vertical-center {
    top: 50%;
    transform: translateY(-50%);
  }

  .horizontal-center.vertical-center {
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
</style>