
import * as crnc from "crnc"
import * as mobx from "mobx"
import * as preact from "preact"
import * as commotion from "commotion"
import * as mobxPreact from "mobx-preact"
import * as omnistorage from "omnistorage"

import * as shopper from "."
import {ecommerceShopifyShop} from "./ecommerce/shopify-shop"

window["crnc"] = crnc
window["mobx"] = mobx
window["preact"] = preact
window["commotion"] = commotion
window["mobxPreact"] = mobxPreact
window["shopper"] = shopper

//
// shopper demo function
//

window["shopperDemo"] = async function() {

	mobx.configure({enforceActions: "always"})

	await ecommerceShopifyShop({
		omniStorage: new omnistorage.LocalClient({storage: window.localStorage}),
		currency: {
			...await crnc.ascertainEcommerceDetails({
				storeBaseCurrency: "CAD",
				userDisplayCurrency: crnc.assumeUserCurrency({fallback: "CAD"})
			}),
			precision: 2
		},
		shopify: {
			domain: "dev-bakery.myshopify.com",
			storefrontAccessToken: "5f636be6b04aeb2a7b96fe9306386f25"
		},
		collectionsToLoad: [{
			collectionId: "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzQyNDQ0MTQ3OQ==",
			productsArea: document.querySelector<HTMLElement>(".shopper .products-area")
		}],
		cartArea: document.querySelector<HTMLElement>(".shopper .cart-area"),
		cartSystem: {
			checkoutInNewWindow: false
		},
		evaluator: product => ({
			quantityMin: 1,
			quantityMax: 5,
			precision: 2,
			attributes: /avocado/i.test(product.title)
				? {"data-avocado": "yeppers"}
				: {}
		})
	})
}
