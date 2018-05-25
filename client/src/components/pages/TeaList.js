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
          <div className="ui raised segment"><p>Sem chás no momento! </p></div>
        ) : (
          <div className="ui cards">
            {
              teas.map((tea) => {
                return(
                    <div key={ tea.id }>
                      <Tea tea={ tea } addItemToCart={this.props.addItemToCart}/>
                    </div>

              )})
            }
          </div>
        )}
      </div>
    );
  }

  render() {
    return(
      <div>
        <h1>Chás Disponíveis</h1>
        <br/>
        { this.renderTeas() }

        <br/><br/>
        <Link to='/'>Voltar</Link>
        <br/>
      </div>
    )
  }
}

export default TeaList
