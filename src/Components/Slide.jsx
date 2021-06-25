import React, {useRef} from 'react'
import {Button, Hidden, Grid} from '@material-ui/core'

const Slide = (props) => {

    const slide = useRef()
    const handleMouseMove = (e) =>{
        const el = slide.current;
        const r = el.getBoundingClientRect();
        const x = e.clientX
        const y = e.clientY

        el.style.setProperty('--x', x - (r.left + Math.floor(r.width / 2)));
        el.style.setProperty('--y', y - (r.top + Math.floor(r.height / 2)));
    }
    const handleMouseLeave = () => {
        slide.current.style.setProperty('--x', 0);
        slide.current.style.setProperty('--y', 0);
    }
    const handleSlideClick = () => {
        props.handleSlideClick(props.slide.index);
    }
    const imageLoaded = (event) => {
        event.target.style.opacity = 1;
    }

    let classnames = 'slide';
    if (props.current === props.slide.index) classnames += ' currentSlide';
        else
        if (props.current - 1 === props.slide.index) classnames += ' previousSlide';
        else
        if (props.current + 1 === props.slide.index) classnames += ' nextSlide';

    return (
        <div>
            <li className={classnames} ref={slide} onClick={handleSlideClick}  onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} >
                <Grid xs={12} className="imgSection">
                    <img className="img" alt={props.slide.headline} src={props.slide.src} onLoad={imageLoaded}/>

                    <Grid xs={12} className="content" >
                        <h1 variant="h3" className="header">
                            {props.slide.headline}
                        </h1>
                            <a href="https://jayraj-r.github.io/Portfolio-page/" target="_blank">
                                <button className="action">
                                    {props.slide.button}
                                </button>
                            </a>
                    </Grid>
                </Grid>
            </li>
        </div>
    )
}

export default Slide
