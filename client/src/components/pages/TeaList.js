import React from 'react'
import { Link } from 'react-router-dom'

import Tea from './../widgets/Tea'
import TeaDetail from './../widgets/TeaDetail'

const API_URL = "http://localhost:5000/teas_recommendation?recommendation_type="

class TeaList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teas: [],
      full_url: API_URL + this.props.match.params.type
    };
  }

  componentDidMount() {
    this.fetchTeas();
  }

  fetchTeas() {
    fetch(this.state.full_url)
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
                return(
                  <li key={ tea.id }> <Tea tea={ tea }/> </li>)
              })
            }
          </div>
        )}
      </div>
    );
  }

  render() {
    const FULL_URL = "bla"

    return(
      <div>
        <h1>Chás Disponíveis</h1>

        { this.renderTeas() }

        <Link to='/'>Voltar</Link>
      </div>
    )
  }
}

export default TeaList
