import React, { Component } from 'react';
import Food from '../images/food7.jpg';
import '../css/Imagesection.css'; 


export default class ImageSection extends Component {
  render() {
    return (
      <div className='container'>
        <div className='image'>
        <img src={Food} alt="" />
        </div>
        <div className='text'>
        <h3>food app</h3>
        <p>Paris is one of the most magnificient cities in France.Paris is one of the most magnificient cities in France,Paris is one of the most magnificient cities in France,Paris is one of the most magnificient cities in France,Paris is one of the most magnificient cities in France</p>
        </div>
      </div>
    )
  }
}
