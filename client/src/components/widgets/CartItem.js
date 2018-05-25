import React from 'react';

class CartItem extends React.Component {
  render() {
    return(
      <div>
        <h4>{this.props.order.name}</h4>
        <p>id: {this.props.order.id}</p>
        <p>quantidade desejada: {this.props.order.quantity}</p>
        <p>quantidade em estoque: {this.props.order.stock_quantity}</p>
      </div>
    )
  }
}

export default CartItem
