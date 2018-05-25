import React from 'react'
import * as _ from "lodash"

import Header from './Header'
import Main from './Main'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: {},
    };
  }

  addItemToCart = (order) => {
    this.state.orders[order['id']] = order;

    const new_orders = this.state.orders;

    this.setState(
      { orders: new_orders }
    )
  }

  removeItemFromCart = (order) => {
    const new_orders = this.state.orders
    delete new_orders[order['id']]

    this.setState(
      { orders: new_orders }
    )
  }

  render(){
    return(
      <div>
        <Header cart_items_quantity={_.values(this.state.orders).length}/>
        <div className="ui divider"></div>
        <br/><br/>
        <Main
          addItemToCart={this.addItemToCart}
          removeItemFromCart={this.removeItemFromCart}
          orders={this.state.orders}
        />
      </div>
    )
  }
}

export default App
