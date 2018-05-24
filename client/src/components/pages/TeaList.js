import React from 'react'
import { Link } from 'react-router-dom'

import Tea from './../widgets/Tea'
import TeaDetail from './../widgets/TeaDetail'

class TeaList extends React.Component {
    render(){
      return(
        <div>
          <h1>Chás</h1>
          <h3>Tipo: { this.props.match.params.type }</h3>
          <Tea />
          <TeaDetail />

          <Link to='/'>Voltar</Link>
        </div>
      )
    }
}

export default TeaList
