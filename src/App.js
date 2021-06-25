import React, { useState } from 'react';
import './App.css'
import Slide from './Components/Slide';
import {Typography} from '@material-ui/core'

function App() {
  
  const slides = [
    {
    index: 0,
    headline: 'Bollywood Dance',
    button: 'Know More',
    src: 'https://timesofindia.indiatimes.com/photo/62999793.cms'
    },

    {
        index: 1,
        headline: 'Carnatic Singing',
        button: 'Know More',
        src: 'https://www.griffincollege.org.uk/wp-content/uploads/2019/01/carnatic-vocal.jpg'
    },

    {
        index: 2,
        headline: 'Indian Classical Music',
        button: 'Know More',
        src: 'https://nikonites.com/attachments/d3300/87819d1399445630-indian-classical-music-concert-_dsc5158.jpg'
    },

    {
        index: 3,
        headline: 'Art Camp',
        button: 'Know More',
        src: 'https://images.unsplash.com/photo-1596495717664-15c0aa11458c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },

    {
        index: 4,
        headline: 'Public Speaking',
        button: 'Know More',
        src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },

    {
        index: 5,
        headline: 'Kathak',
        button: 'Know More',
        src: 'https://images.unsplash.com/photo-1479812627010-aa5bd9d173b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
    }
  ];

  const [state, setState] = useState(2)
  
  const handlePreviousClick = () => {
    const previous = state - 1;
    if(previous<0) setState(slides.length-1)
    else setState(previous)
  }

  const handleNextClick = () => {
    const next = state + 1;
    if(next===slides.length) setState(0)
    else setState(next)
  }

  const handleSlideClick = (index) =>{
    if(state!==index){
      setState(index)
    }
  }

  const wrapperTransform = {
    'transform': `translateX(-${state * (100 / slides.length)}%)`
  };

  return (
    <>
    <div className="header">
      <Typography variant="h2">
        Our Courses 
      </Typography> 
      </div>

      <div id="app" style={{backgroundImage: `linear-gradient(308deg, #000b50, #3e0a52, #650653, #890054), url(${slides[state].src})`, backgroundSize:"cover", backgroundBlendMode:"multiply", backgroundRepeat:"no-repeat"}}>

        <div className="sliderSection">
          
          <ul className="slider" style={wrapperTransform}>
            {
                slides.map(slide => {
                  return /*#__PURE__*/ ( 
                      <Slide 
                        key={slide.id}
                        slide={slide}
                        current={state}
                        handleSlideClick={handleSlideClick}
                      />
                  )})
            }
          </ul>

          <div className="sliderControls">

            <button className="btn" title="Previous slide" onClick={handlePreviousClick}>
              &#9664; 
            </button>

            <button className="btn" title="Next slide" onClick={handleNextClick}>
              &#9654;
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default App;
