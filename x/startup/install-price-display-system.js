var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { assumeUserCurrency } from "crnc/x/ecommerce/assume-user-currency.js";
import { currencies as defaultCurrencies } from "crnc/x/ecommerce/currencies.js";
import { ascertainEcommerceDetails } from "crnc/x/ecommerce/ascertain-ecommerce-details.js";
import { makeReader } from "../toolbox/pubsub.js";
import { SimpleDataStore } from "../toolbox/simple-data-store.js";
import { preparePriceDisplay } from "../components/price-display.js";
import { registerComponents } from "../toolbox/register-components.js";
import { createCurrencyStorage } from "../model/create-currency-storage.js";
export function installPriceDisplaySystem({ baseCurrency, currencies = defaultCurrencies, currencyStorage = createCurrencyStorage({
    key: "price-display-currency",
    dataStore: new SimpleDataStore({ storage: localStorage }),
}), }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!baseCurrency)
            throw new Error("baseCurrency is not defined");
        baseCurrency = baseCurrency.toUpperCase();
        const state = {
            exchangeRates: { [baseCurrency]: 1 },
            inputCurrency: baseCurrency,
            outputCurrency: baseCurrency,
        };
        const { reader, update } = makeReader(state);
        const setCurrency = (code) => {
            state.outputCurrency = code;
            update();
            currencyStorage.save(code);
        };
        const PriceDisplay = preparePriceDisplay({
            state,
            reader,
            currencies,
            setCurrency,
        });
        registerComponents({ PriceDisplay });
        const rememberedDisplayCurrency = yield currencyStorage.load();
        const { exchangeRates, userDisplayCurrency, } = yield ascertainEcommerceDetails({
            storeBaseCurrency: baseCurrency,
            userDisplayCurrency: rememberedDisplayCurrency
                || assumeUserCurrency({ fallback: baseCurrency }),
        });
        state.exchangeRates = exchangeRates;
        state.outputCurrency = userDisplayCurrency;
        update();
        return {
            refreshCurrencyStorage: () => __awaiter(this, void 0, void 0, function* () {
                const code = yield currencyStorage.load();
                setCurrency(code);
            }),
        };
    });
}
//# sourceMappingURL=install-price-display-system.js.map