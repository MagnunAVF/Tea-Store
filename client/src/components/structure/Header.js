import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render(){
    return(
      <header className="ui inverted blue vertical masthead center aligned segment">
        <div className="ui container">
          <div className="ui center aligned text container">
            <div className="ui large text"><h1>Tea Store</h1></div>
          </div>
          <div className="ui secondary inverted pointing menu">
              <div className="ui item"><Link to='/'><i className="home icon"></i>Página Inicial</Link></div>
              <div className="ui item"><Link to='/tea-types'>Chás Disponíveis</Link></div>
              <div className="ui item"><Link to='/recommendations'>Sugestões</Link></div>
              <div className="ui item"><Link to='/cart'>Finalizar pedido</Link></div>
              <div className="right menu">
                <div className="ui item"><i className="shopping cart icon"></i>Itens no carrinho: {this.props.cart_items_quantity}</div>
              </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
