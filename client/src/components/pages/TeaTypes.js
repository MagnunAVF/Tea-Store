import React from 'react'
import { Link } from 'react-router-dom'

const API_URL = "http://localhost:5000/available_teas_types"

class TeaTypes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tea_types: [],
    };
  }

  componentDidMount() {
    this.fetchTeaTypes();
  }

  fetchTeaTypes() {
    fetch(API_URL)
    .then(response => response.json())
    .then(json => this.setState({ tea_types: json.types }))
  }

  renderTeaTypes() {
    const tea_types = this.state.tea_types;
    const emptyList = tea_types.length === 0;

    return (
      <div>
        { emptyList ? (
          <div><p>Sem chás no momento! </p></div>
        ) : (
          <div>
            {
              tea_types.map((type, i) => {
                return(
                  <li key={ i }> <Link to={'/tea-list/' + type}>{ type }</Link> </li>)
              })
            }
          </div>
        )}
      </div>
    );
  }

  render(){
    return(
      <div>
        <h1>Tipos de chás disponíveis</h1>
        <ul>
          { this.renderTeaTypes() }
        </ul>
      </div>
    )
  }
}

export default TeaTypes
