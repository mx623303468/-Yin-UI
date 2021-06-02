<template>
  <button :class="classList" @click="handleClick">
    <span><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

type ButtonType = PropType<
  "primary" | "success" | "danger" | "info" | "warning" | "default"
>;

export default defineComponent({
  name: "YButton",
  props: {
    type: {
      type: String as ButtonType,
      default: "default",
      validator: (val: string) => {
        return [
          "defalut",
          "primary",
          "success",
          "warning",
          "info",
          "danger",
        ].includes(val);
      },
    },
  },
  emits: ["click"],
  setup(props, ctx) {
    const classList = computed(() => [
      "yin-button",
      `yin-button--${props.type}`,
    ]);

    const handleClick = (e: MouseEvent) => {
      ctx.emit("click", e);
    };

    return {
      handleClick,
      classList
    };
  },
});
</script>
