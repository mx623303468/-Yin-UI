import { defineComponent, openBlock, createBlock } from 'vue';

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

export default script;
