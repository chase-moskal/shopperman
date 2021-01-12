import { Currencies } from "crnc/x/interfaces.js";
import { CurrencyStorage } from "../interfaces.js";
export declare function installPriceDisplaySystem({ baseCurrency, currencies, currencyStorage, }: {
    baseCurrency: string;
    currencies?: Currencies;
    currencyStorage?: CurrencyStorage;
}): Promise<{
    refreshCurrencyStorage: () => Promise<void>;
}>;
