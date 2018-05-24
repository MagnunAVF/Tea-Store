import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Pagina Inicial</Link></li>
        <li><Link to='/tea-types'>Disponiveis</Link></li>
        <li><Link to='/recommendations'>Sugestoes</Link></li>
        <li><Link to='/cart'>Finalizar pedido</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
