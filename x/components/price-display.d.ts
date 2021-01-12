import { LitElement } from "lit-element";
import { Currencies } from "crnc/x/interfaces.js";
import { Reader } from "../toolbox/pubsub.js";
import { SetCurrency, PriceModelState } from "../interfaces.js";
export declare function preparePriceDisplay({ state, reader, currencies, setCurrency, }: {
    state: PriceModelState;
    currencies: Currencies;
    reader: Reader<PriceModelState>;
    setCurrency: SetCurrency;
}): typeof LitElement;
