import React from 'react'
import { Link } from 'react-router-dom'

class Recommendations extends React.Component {
  render(){
    return(
      <div>
        <h1>Página de Recomendações</h1>
        <div className="ui raised segment"><Link to='/tea-list/sleep'>Para tomar antes de dormir</Link></div>
        <div className="ui raised segment"><Link to='/tea-list/digestion'>Para ajudar na digestão</Link></div>
        <div className="ui raised segment"><Link to='/tea-list/medicinal'>Medicinais</Link></div>
        <div className="ui raised segment"><Link to='/tea-list/eat'>Para acompanhar refeições</Link></div>
      </div>
    )
  }
}

export default Recommendations
