import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgp3 section__margin' id="whpt3">
      <div className='gpt3__whatgp3-feature'>
        <Feature title="What is GPT-3" text="GPT-3, or Generative Pre-trained Transformer 3, is an advanced language model developed by OpenAI. It can generate human-like text based on the input it receives and is used for various applications like chatbots, writing assistance, and more."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="A chatbot is an AI program designed for conversation." />
        <Feature title="Knowledgebase" text="A knowledgebase is a centralized repository for information and data, often used to store, organize, and retrieve knowledge for users." />
        <Feature title="Education" text="Education is the process of acquiring knowledge, skills, values, and habits through teaching, training, research, or self-study." />
      </div>
    </div>
  )
}

export default WhatGPT3