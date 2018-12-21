import React, { Component } from 'react'
import map from '../../media/map.png';

export default class Locations extends Component {
  render() {
    return (
      <div className="padding-top">
        <h1>Locations</h1>
        <img src={map} className="map"/>
      </div>
    )
  }
}
