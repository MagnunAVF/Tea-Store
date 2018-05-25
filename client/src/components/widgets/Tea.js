import React from 'react'

class Tea extends React.Component {
  render() {
    return(
      <div className="ui card">
        <div className="content">
          <a className="header">{ this.props.tea.name }</a>
          <div className="meta">
            <span className="date">{ this.props.tea.type }</span>
          </div>
          <div className="description">
            <p>Quantidade em estoque: { this.props.tea.stock_quantity}</p>
            <button onClick={() => this.props.addItemToCart(
              { 'id': this.props.tea.id,
                'name': this.props.tea.name,
                'quantity': 1,
                'stock_quantity': this.props.tea.stock_quantity
              }
            )}> Add </button>
          </div>
        </div>
      </div>

    )
  }
}
export default Tea
