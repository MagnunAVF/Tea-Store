import React from 'react'
import { Link } from 'react-router-dom'

class TeaTypes extends React.Component {
  render(){
    return(
      <div>
        <h1>Tipos de chás disponíveis</h1>
        <ul>
          <li><Link to='/tea-list/black-tea'>Preto</Link></li>
          <li><Link to='/tea-list/white-tea'>Branco</Link></li>
          <li><Link to='/tea-list/chai'>Chai</Link></li>
        </ul>
      </div>
    )
  }
}

export default TeaTypes
