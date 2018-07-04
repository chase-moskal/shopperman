
import {h, Component} from "preact"
import {observer} from "mobx-preact"

import {CartManipulatorProps} from "./interfaces"
import {CartItemDisplay} from "./cart-item-display"

@observer
export class CartManipulator extends Component<CartManipulatorProps, any> {

	render() {
		const {cart, cartItemText} = this.props
		return (
			<div className="cart-manipulator">
				<ol className="cart-list-items">
					{cart.activeItems.map(item => <CartItemDisplay {...{item, cartItemText}}/>)}
				</ol>
			</div>
		)
	}
}
