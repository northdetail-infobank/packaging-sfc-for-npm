<template>
  <v-btn
    class="scl-btn"
    :style="styles"
    :disabled="propsDisabled"
    :color="propsColor"
    :dark="propsDark"
    :block="propsBlock"
    :outline="propsOutline"
    :href="propsHref"
    :type="propsType"
    :class="propsClass"
    @click="onClick"
  >
    <template v-if="propsBeforeIcon">
      <v-icon class="mr-2">
        {{ propsBeforeIcon }}
      </v-icon>
    </template>
    <v-spacer v-text="propsText" />
    <template v-if="propsAfterIcon">
      <v-icon class="ml-2">
        {{ propsAfterIcon }}
      </v-icon>
    </template>
  </v-btn>
</template>

<script>
import variables from '~/assets/style/variables.scss';

export default {
  props: {
    /*
     * v-btnで表示するボタン名
     * @type {String}
     */
    propsText: {
      required: true,
      type: String,
      default: () => '',
    },
    /*
     * Disabledを有効化
     * @type {Boolean}
     */
    propsDisabled: {
      required: false,
      type: Boolean,
      default: () => false,
    },
    /*
     * v-btnのブロック機能を有効化
     * @type {Boolean}
     */
    propsBlock: {
      required: false,
      type: Boolean,
      default: () => false,
    },
    /*
     * ボタンの色を設定
     * @type {String}
     */
    propsColor: {
      required: false,
      type: String,
      default: () => '',
    },
    /*
     * テキストよりも前に表示するアイコン
     * @type {String}
     */
    propsBeforeIcon: {
      required: false,
      type: String,
      default: () => '',
    },
    /*
     * テキストよりも後に表示するアイコン
     * @type {String}
     */
    propsAfterIcon: {
      required: false,
      type: String,
      default: () => '',
    },
    /*
     * v-btnのテーマ切り替え（文字色が変更される）
     * @type {Boolean}
     */
    propsDark: {
      required: false,
      type: Boolean,
      default: () => false,
    },
    /*
     * v-btnのアウトライン有効化
     * @type {Boolean}
     */
    propsOutline: {
      required: false,
      type: Boolean,
      default: () => false,
    },
    /*
     * リンク先設定
     * @type {String}
     */
    propsHref: {
      required: false,
      type: String,
      default: () => '',
    },
    /*
     * ボタンのタイプ設定
     * @type {String}
     */
    propsType: {
      required: false,
      type: String,
      default: () => 'button',
    },
    /*
     * v-btnに設定するclass
     * @type {String}
     */
    propsClass: {
      required: false,
      type: String,
      default: () => '',
    },
    /*
     * 角丸のpxサイズ
     * @type {String}
     */
    propsRadius: {
      required: false,
      type: String,
      default: () => variables.baseButtonRadius,
    },
  },
  computed: {
    // バインドするスタイルを生成
    styles() {
      return {
        'border-radius': this.propsRadius,
      };
    },
  },
  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>

<style lang="scss">
// ============================================================
// Over Class
// ============================================================
.scl-btn.v-btn {
  height: $BaseButton-height;
  border-radius: $BaseButton-radius;
  font-weight: $BaseButton-font-weight;
}

.scl-btn.v-btn:not(.v-btn--depressed):not(.v-btn--flat) {
  box-shadow: $BaseButton-shadow;
}

</style>
