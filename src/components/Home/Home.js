import React, { Component } from 'react'
import coffeeshop from '../../media/coffee-shop.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="home-container padding-top">
        <img src={coffeeshop}/>
      </div>
    )
  }
}
