import React from 'react'

export default function Poker() {
  return(
      <div className = "container" id = "div-main">
        <div className={'mainContainer'}>
          <h2>Blog</h2>
          <p>I'll add a blog soon.<br></br><br></br>Maybe with photos.</p>
        </div>
        <div className={'mainContainer'}>
          <img id={'mainPic'} src={'https://s3-eu-west-1.amazonaws.com/jules.at/photos/jules1.jpeg'}/>
        </div>
        <div className={'mainContainer'}>
        </div>
        <div className={'mainContainer'}>
        </div>
        <div className={'mainContainer'}>
        </div>
        <div className={'mainContainer'}>
        </div>
        <a href = "#top"><div id ="back-to-top">↑</div></a>
      </div>
  )
}