import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
            <button className="prev">&#10502; Previous</button>
            <button className="next">Next &#10503;</button>
        </div>
      </div>
    )
  }
}
