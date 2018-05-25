import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render(){
    return(
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Pagina Inicial</Link></li>
            <li><Link to='/tea-types'>Disponiveis</Link></li>
            <li><Link to='/recommendations'>Sugestoes</Link></li>
            <li><Link to='/cart'>Finalizar pedido</Link></li>
            <p>Itens no carrinho: {this.props.cart_items_quantity}</p>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
