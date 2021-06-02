import { PropType } from "vue";
declare type ButtonType = PropType<"primary" | "success" | "danger" | "info" | "warning" | "default">;
declare const _default: import("vue").DefineComponent<{
    type: {
        type: ButtonType;
        default: string;
        validator: (val: string) => boolean;
    };
}, {
    handleClick: (e: MouseEvent) => void;
    classList: import("vue").ComputedRef<string[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: "primary" | "success" | "danger" | "info" | "warning" | "default";
} & {}>, {
    type: "primary" | "success" | "danger" | "info" | "warning" | "default";
}>;
export default _default;
