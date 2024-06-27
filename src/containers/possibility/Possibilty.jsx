import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';


const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are <br /> beyond your imagination</h1>
        <p>By gaining early access, you'll have the opportunity to explore the capabilities of one of the most advanced AI language models available. Whether you're looking to enhance your business applications, create innovative content, or simply experiment with cutting-edge technology, GPT-3 offers a wide range of possibilities.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility