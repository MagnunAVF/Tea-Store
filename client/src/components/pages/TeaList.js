import React from 'react'
import { Link } from 'react-router-dom'

import Tea from './../widgets/Tea'
import TeaDetail from './../widgets/TeaDetail'

const API_URL = "http://localhost:5000/available_teas"

class TeaList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teas: [],
    };
  }

  componentDidMount() {
    this.fetchTeas();
  }

  fetchTeas() {
    console.log("fetching ...");
    fetch(API_URL)
    .then(response => response.json())
    .then(json => this.setState({ teas: json.teas }))
  }

  renderTeas() {
    const teas = this.state.teas;
    const emptyList = teas.length === 0;

    return (
      <div>
        { emptyList ? (
          <div><p>Sem chás no momento! </p></div>
        ) : (
          <div>
            {
              teas.map((tea) => {
                return(<li key={tea.id}>{tea.name}</li>)
              })
            }
          </div>
        )}
      </div>
    );
  }

  render() {
    return(
      <div>
        <h1>Chás</h1>
        <h3>Tipo: { this.props.match.params.type }</h3>

        <Tea />
        <TeaDetail />

        <h3>Teas List</h3>
        { this.renderTeas() }

        <Link to='/'>Voltar</Link>
      </div>
    )
  }
}

export default TeaList
