import { ShopperState, CartItem } from "../interfaces.js";
import { LoadableComponent } from "../framework/loadable-component.js";
declare const ShopperCollection_base: typeof LoadableComponent;
export declare class ShopperCollection extends ShopperCollection_base {
    items: CartItem[];
    ["uid"]: string;
    ["link"]: string;
    ["all"]: boolean;
    ["show-images"]: boolean;
    static get styles(): (import("lit-element").CSSResultOrNative | import("lit-element").CSSResultArray)[];
    get shopifyId(): string;
    shopperUpdate(state: ShopperState): void;
    renderReady(): import("lit-element").TemplateResult;
}
export {};
