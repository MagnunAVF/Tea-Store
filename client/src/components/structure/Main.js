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
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/tea-types' component={TeaTypes}/>
          <Route path='/recommendations' component={Recommendations}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/tea-list/:type' component={TeaList}/>
        </Switch>
      </main>
    )
  }
}

export default Main
