import React from 'react'

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
        <Header />
        <Main handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default App
