<template>
  <div class="line-input" :style="{ width: width }">
    <input class="input" v-model="inputValue" />
    {{ value }}
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    width: {
      type: String,
      default: "200px",
    },
  },
  watch: {
    value: {
      handler(newValue) {
        this.inputValue = newValue;
      },
      immediate: true,
    },
    inputValue: {
      handler(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.line-input {
  // width: 100%;
  .input {
    width: 100%;
    border: none;
    outline: none;
    border-bottom: #3397fe 1px solid;
  }
}
</style>