import React from 'react'
import './Widgets.css'
import {FiberManualRecord, Info } from '@mui/icons-material';
const Widgets = () => {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__articles">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <Info />
      </div>
      {newArticle('Coronavirus: UK updates', `Top news - 10086`)}
      {newArticle('Ukraine: latest news', `Top news - 8086 readers`)}
      {newArticle('58% of CEOs admit companies are greenwashing', `Top news - 5080 readers`)}
      {newArticle('Inflation for the poorest families rises 1.74% in March', `Top news - 2186 readers`)}
     
    </div>
  )
}

export default Widgets;