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

  handleClick = (order) => {
    this.state.orders[order['id']] = order;

    const new_orders = this.state.orders;

    this.setState(
      { orders: new_orders }
    )
  }

  render(){
    return(
      <div>
        <Header cart_items_quantity={_.values(this.state.orders).length}/>
        <Main handleClick={this.handleClick} orders={this.state.orders}/>
      </div>
    )
  }
}

export default App
