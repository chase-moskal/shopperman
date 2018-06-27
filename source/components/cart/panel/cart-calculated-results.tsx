
import {h, Component} from "preact"
import {observer} from "mobx-preact"
import {Cart} from "../../../stores/cart"

/**
 * CART CALCULATED RESULTS PROPS INTERFACE
 */
export interface CartCalculatedResultsProps {
	cart: Cart
}

/**
 * CART CALCULATED RESULTS CLASS
 */
@observer
export class CartCalculatedResults extends Component<CartCalculatedResultsProps, any> {

	render() {
		const {cart} = this.props
		return (
			<ol className="cart-calculated-results">
				{
					cart.activeItems.length
						? (
							<li>
								<span>Subtotal:</span>
								&nbsp;
								<strong>{cart.price}</strong>
							</li>
						)
						: null
				}
			</ol>
		)
	}
}
