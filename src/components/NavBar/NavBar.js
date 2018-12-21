import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../App.scss';


export default class NavBar extends Component {
  render() {

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            // document.getElementById("navbar").style.padding = "0px";
            document.getElementById("logo").style.display = "none";
            // document.getElementById("logo").style.fontSize = "60px";
            // document.getElementById("navbar").style.background = "rgba(240, 240, 240, 0.9)";

        } else {
            // document.getElementById("navbar").style.padding = "40px 0px";
            document.getElementById("logo").style.display = "flex";
            // document.getElementById("logo").style.fontSize = "80px";
            // document.getElementById("navbar").style.background = "rgb(240, 240, 240)";
        }
    }
    return (
      <div className="nav-container" id="navbar">
            <Link to='/' style={{ textDecoration: 'none' }}><h2 id="logo">the hive</h2></Link>
        <nav id="nav-items">
            <Link to='/about' style={{ textDecoration: 'none' }}><p>About</p></Link>
            <Link to='/menu' style={{ textDecoration: 'none' }}><p>Menu</p></Link>
            <Link to='/locations' style={{ textDecoration: 'none' }}><p>Locations</p></Link>
            <p>Contact</p>
            <p>Shop</p>
        </nav>
      </div>
    )
  }
}
