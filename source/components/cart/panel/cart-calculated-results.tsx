
import {h, Component} from "preact"
import {observer} from "mobx-preact"
import {CartCalculatedResultsProps} from "./interfaces"

/**
 * CART CALCULATED RESULTS CLASS
 */
@observer
export class CartCalculatedResults extends Component<CartCalculatedResultsProps, any> {

	render() {
		const {cart, cartCalculatedText} = this.props
		return (
			<ol className="cart-calculated-results">
				{
					cart.activeItems.length
						? (
							<li>
								<span>{cartCalculatedText.subtotal.content}</span>
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
