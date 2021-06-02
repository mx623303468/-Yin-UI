import { defineComponent, computed, openBlock, createBlock, createVNode, renderSlot } from 'vue';

var script$1 = defineComponent({
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

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("button", {
    class: _ctx.classList,
    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args)))
  }, [
    createVNode("span", null, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2 /* CLASS */))
}

script$1.render = render$1;
script$1.__file = "packages/button/src/button.vue";

script$1.install = (app) => {
    console.log('buuton 组件注册');
    app.component(script$1.name, script$1);
};

var script = defineComponent({
    name: 'YIcon',
    setup() {
    },
});

const _hoisted_1 = { class: "icon" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1))
}

script.render = render;
script.__file = "packages/icon/src/icon.vue";

script.install = (app) => {
    console.log('buuton 组件注册');
    app.component(script.name, script);
};

const components = [
    script$1,
    script
];
const install = (app) => {
    components.forEach(component => {
        app.component(component.name, component);
    });
};
var index = {
    install
};

export default index;
