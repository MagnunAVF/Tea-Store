import React from 'react'

class Tea extends React.Component {
  render() {
    return(
      <div >
        <h4>{ this.props.tea.name }</h4>
        <p>Tipo: { this.props.tea.type }</p>
        <p>Quantidade em estoque: { this.props.tea.stock_quantity}</p>
        <button onClick={() => this.props.handleClick(
          { 'id': this.props.tea.id,
            'name': this.props.tea.name,
            'quantity': 1,
            'stock_quantity': this.props.tea.stock_quantity
          }
        )}> Add </button>
      </div>
    )
  }
}
export default Tea
