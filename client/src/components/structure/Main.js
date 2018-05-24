import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../pages/Home'
import TeaTypes from './../pages/TeaTypes'
import Recommendations from './../pages/Recommendations'
import Cart from './../pages/Cart'
import TeaList from './../pages/TeaList'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/tea-types' component={TeaTypes}/>
      <Route path='/recommendations' component={Recommendations}/>
      <Route path='/cart' component={Cart}/>
      <Route path='/tea-list' component={TeaList}/>
    </Switch>
  </main>
)

export default Main
