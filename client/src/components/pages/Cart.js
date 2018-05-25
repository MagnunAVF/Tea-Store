import React from 'react';
import * as _ from "lodash";

import CartItem from "./../widgets/CartItem";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: this.props.orders,
    };
  }

  render() {
    const orders = this.state.orders;

    return(
      <div>
        <ul>
          {
            _.map(orders, (order) => {
              return (
                <li key={ order.id }>
                  <CartItem
                    order={order}
                    removeItemFromCart={this.props.removeItemFromCart}
                  />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Cart
