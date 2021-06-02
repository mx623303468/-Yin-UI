import { defineComponent, computed, openBlock, createBlock, createVNode, renderSlot } from 'vue';

var script = defineComponent({
    name: "YButton",
    props: {
        type: {
            type: String,
            default: "default",
            validator: (val) => {
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
        const handleClick = (e) => {
            ctx.emit("click", e);
        };
        return {
            handleClick,
            classList
        };
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("button", {
    class: _ctx.classList,
    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args)))
  }, [
    createVNode("span", null, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "packages/button/src/button.vue";

script.install = (app) => {
    console.log('buuton 组件注册');
    app.component(script.name, script);
};

export default script;
