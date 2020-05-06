<template>
  <div
    :class="[
      'InputText',
      { 'valid':   !invalid },
      { 'invalid': invalid },
      { 'dirty':   dirty },
      { 'empty':   !value },
      { 'hasIcon': icon },
      { 'hasClearText': showClearText },
      { noBorder },
    ]">

    <div
      v-if="icon"
      class="__icon"
      key="input-text-icon-leading">
      <i
        :class="'icon-' + icon">
      </i>
    </div>
    <input
      class="__input"
      ref="input"
      :style="computedInputStyle"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      @input="$emit('input', $event.target.value)"
      @keydown="$emit('keydown', $event)"
      @focus="$emit('focus')"
      @blur="$emit('blur', $event)"
    />
    <button
      v-if="showClearText && value && value.length"
      class="InputText__clear-text-button"
      type="button"
      @click="$emit('input', '')">
    </button>
  </div>
</template>


<script>
export default {
  name: 'InputText',

  props: {
    value:         { type: [String, Number], default: null },
    noBorder:      { type: Boolean, default: false },
    focused:       { type: Boolean, default: false },
    dirty:         { type: Boolean, default: false },
    invalid:       { type: Boolean, default: false },
    type:          { type: String,  default: 'text' },
    placeholder:   { type: String,  default: 'Type something...' },
    icon:          { type: String,  default: null },
    iconColor:     { type: String,  default: 'mute' },
    required:      { type: Boolean, default: false },
    disabled:      { type: Boolean, default: false },
    autofocus:     { type: Boolean, default: false },
    autocomplete:  { type: String,  default: 'off' },
    showClearText: { type: Boolean, default: false },

    height:          { type: Number,  default: 32 },
    backgroundColor: { type: String,  default: '#FFFFFF' },
  },

  computed: {
    computedInputStyle() {
      return {
        height: `${this.height}px`,
        backgroundColor: this.backgroundColor,
      };
    },
  },

  watch: {
    focused(val) { if (val) this.$refs.input.focus(); },
  },
};
</script>


<style lang="scss" scoped>
@import '@/styles/_variables';

.InputText {
  position: relative;
  text-align: left;
}

.InputText .__input {
  display: block;
  width: 100%;
  height: 32px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 16px;
  border: $border;
  border-radius: $radius;
  background-color: $white;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  transition: border .3s ease 0s;
  &::-ms-clear {
    display: none;
  }
}

.InputText.noBorder .__input {
  border: none;
}

.InputText.hasIcon .__input {
  padding-left: 32px;
}

.InputText.hasClearText .__input {
  padding-right: 34px;
}

.InputText .__icon {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 6px;
  width: 24px;
  height: 24px;
  margin: auto;
  font-size: 18px;
  text-align: center;
  opacity: .6;
}

.InputText.dirty.invalid .__input {
  border-color: $red;
}

.InputText__clear-text-button {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 6px;
  width: 24px;
  height: 24px;
  margin: auto;
  background-image: url('~@/assets/icons/svgs/x-circle.svg');
  background-size: 16px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  opacity: 0.2;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
}
</style>
