import React from 'react'

class Tea extends React.Component {
  render() {
    return(
      <div>
        <h4>{ this.props.tea.name }</h4>
        <p>Tipo: { this.props.tea.type }</p>
        <p>Quantidade em estoque: { this.props.tea.stock_quantity}</p>
      </div>
    )
  }
}
export default Tea
