import React from 'react'
import logo from '../assets/anticorona-logo.png'

function Main() {
  return (
    <div className="page-wrapper">
      <div className="logo-wrapper">
        <p>AntiCorona App</p>
        <img id='logo' src={logo} alt="logo"/>
      </div>
      <h1>I would like to..</h1>
      <div className="icons-wrapper">
        <div className="box box1">
          <h2>Find essential items</h2>
          <i class="fas fa-cart-plus"></i>
        </div>
        <div className="box box2">
          <h2>Give some info</h2>
          <i class="fas fa-info-circle"></i>
        </div>
      </div>
    </div>
  )
}

export default Main
