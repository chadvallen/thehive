import React, { Component } from 'react'
import '../../App.scss';

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-container">
        <h2>Website Title</h2>
        <nav>
            <p>HOME</p>
            <p>LINK</p>
            <p>LINK</p>
            <p>LINK</p>
        </nav>
      </div>
    )
  }
}
