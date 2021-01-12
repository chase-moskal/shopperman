import { TemplateResult } from "lit-element";
import { ShopperState, CartItem, ShopperModel } from "../interfaces.js";
import { LoadableComponent } from "../framework/loadable-component.js";
declare const ShopperProduct_base: typeof LoadableComponent;
export declare class ShopperProduct extends ShopperProduct_base {
    cartItem: CartItem;
    ["uid"]: string;
    ["link"]: string;
    ["href"]: string;
    ["in-cart"]: boolean;
    ["show-image"]: boolean;
    ["out-of-stock"]: boolean;
    static get styles(): (import("lit-element").CSSResultOrNative | import("lit-element").CSSResultArray)[];
    get shopifyId(): string;
    shopperUpdate(state: ShopperState, { getters }: ShopperModel): void;
    private _handleAddToCart;
    renderReady(): TemplateResult;
}
export {};
