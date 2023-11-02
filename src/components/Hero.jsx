import React from 'react'
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img className="w-28 object-contain" src={logo} alt="Sumz" />
        <button type="button"
          onClick={() => window.open("https://github.com/darshk07")}
          className="black_btn">Github</button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max:md-hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">Simplify yout reading with Summize, 
      an open-source article summarizer that transforms lengthy 
      articles into clear and concise summaries</h2>
    </header>
  )
}

export default Hero