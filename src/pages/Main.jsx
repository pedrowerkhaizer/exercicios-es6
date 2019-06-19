import React, { Component } from 'react';
import { Link } from 'react-router-dom'


import star1 from '../assets/star1.svg'
import stars2 from '../assets/stars2.svg'
import stars3 from '../assets/stars3.svg'

export default class Main extends Component {
  render() {
    return (
      <div id="containerMainButtons">
        <h1>Qual módulo você está procurando?</h1>
        <Link to="/m1">
        <button id="btnDarkRounded" href="/m1">
          <img src={star1} alt="1 estrela" />
          <p>easy - M1</p>
        </button>
        </Link>

        <Link to="/m2">
        <button id="btnDarkRounded" href="/m2">
          <img src={stars2} alt="2 estrelas" />
          <p>medium - M2</p>
        </button>
        </Link>

        <Link to="/m3">
        <button id="btnDarkRounded" href="/m3">
          <img src={stars3} alt="3 estrelas" />
          <p>hard - M3</p>
        </button>
        </Link>
        
      </div>
    )
  }
}
