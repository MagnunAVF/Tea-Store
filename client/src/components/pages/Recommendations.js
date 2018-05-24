import React from 'react'
import { Link } from 'react-router-dom'

class Recommendations extends React.Component {
  render(){
    return(
      <div>
        <h1>Recommendations page</h1>
        <ul>
          <li><Link to='/tea-list/sleep'>Para tomar antes de dormir</Link></li>
          <li><Link to='/tea-list/digestion'>Para ajudar na digestão</Link></li>
          <li><Link to='/tea-list/medicinal'>Medicinais</Link></li>
          <li><Link to='/tea-list/digestion'>Para acompanhar refeições</Link></li>
        </ul>
      </div>
    )
  }
}

export default Recommendations
