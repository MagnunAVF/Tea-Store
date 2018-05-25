import React from 'react';
import * as _ from "lodash";

import CartItem from "./../widgets/CartItem";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: this.props.orders,
      client: {
           		"name": "Default",
           		"email": "default@service.com",
           		"country": "Brazil"
           	}
    };
  }

  createOrder() {
    return(
      {
        "client": this.state.client,
        "teas": this.selectOrderInfos()
      }
    )
  }

  sendOrder(data){
    const API_URL = "https://tea-store.herokuapp.com/api/send-order"
    const API_AUTH_TOKEN = "Token Bandolim@M821912212ejadsa@023"

    fetch(API_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        "Authorization": API_AUTH_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then(data => console.log(data));
  }

  selectOrderInfos() {
    const data = []

    _.map(this.state.orders, (order) => {
      data.push(
        {
          "id": order['id'],
          "quantity": order['quantity']
        }
      )
    })

    return data
  }


  renderOrders() {
    const orders = this.state.orders;
    const emptyList = orders.length === 0;

    return (
      <div>
        { emptyList ? (
          <div className="ui raised segment"><p>Sem itens no carrinho! </p></div>
        ) : (
          <div className="ui cards">
            {
              _.map(orders, (order) => {
                return (
                  <div key={ order.id }>
                    <CartItem
                      order={order}
                      removeItemFromCart={this.props.removeItemFromCart}
                    />
                  </div>
                )
              })
            }
          </div>
        )}
      </div>
    );
  }

  render() {
    return(
      <div>
        <h1>Carrinho de Compras</h1>
        {this.renderOrders()}

        <br/><br/>
        <button onClick={() => this.sendOrder(
          this.createOrder()
        )}> Finalizar Pedido </button>
      </div>
    )
  }
}

export default Cart
