import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './../pages/Home'
import TeaTypes from './../pages/TeaTypes'
import Recommendations from './../pages/Recommendations'
import Cart from './../pages/Cart'
import TeaList from './../pages/TeaList'

class Main extends React.Component {
  render(){
    return(
      <main className="ui centered grid">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/tea-types' component={TeaTypes}/>
          <Route path='/recommendations' component={Recommendations}/>
          <Route path='/cart' render={
            (props) => (
              <Cart
                {...props}
                orders={this.props.orders}
                removeItemFromCart={this.props.removeItemFromCart}
              />)
            }
          />
          <Route path='/tea-list/:type' render={
            (props) => (
              <TeaList
                {...props}
                addItemToCart={this.props.addItemToCart}
              />)
            }
          />
        </Switch>
      </main>
    )
  }
}

export default Main
