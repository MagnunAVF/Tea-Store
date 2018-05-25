import React from 'react';
import * as _ from "lodash"

class CartItem extends React.Component {
  render() {
    return(
      <div>
        <h4>{this.props.order.name}</h4>
        <p>id: {this.props.order.id}</p>
        <p>quantidade desejada: {this.props.order.quantity}</p>
        <p>quantidade em estoque: {this.props.order.stock_quantity}</p>
        <button onClick={() => this.props.removeItemFromCart(
            this.props.order
        )}> Remove </button>
      </div>
    )
  }
}

export default CartItem
