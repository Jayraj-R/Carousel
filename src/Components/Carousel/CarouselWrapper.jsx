import * as React from 'react';
import CarouselCard from './CarouselCard';

const SliderWrapper = ({ slides = [], initial = 0 }) => {
	const [state, setState] = React.useState(initial);

	const handlePreviousClick = () => {
		const previous = state - 1;
		if (previous < 0) setState(slides.length - 1);
		else setState(previous);
	};

	const handleNextClick = () => {
		const next = state + 1;
		if (next === slides.length) setState(0);
		else setState(next);
	};

	const handleSlideClick = (index) => {
		if (state !== index) {
			setState(index);
		}
	};

	const wrapperTransform = {
		transform: `translateX(-${state * (100 / slides.length)}%)`,
	};

	return (
		<div
			id='app'
			style={{
				backgroundImage: `linear-gradient(308deg, #000b50, #3e0a52, #650653, #890054), url(${slides[state].src})`,
				backgroundSize: 'cover',
				backgroundBlendMode: 'multiply',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className='sliderSection'>
				<ul className='slider' style={wrapperTransform}>
					{slides.map((slide) => {
						return (
							<CarouselCard
								key={slide.id}
								slide={slide}
								current={state}
								handleSlideClick={handleSlideClick}
							/>
						);
					})}
				</ul>

				<div className='sliderControls'>
					<button
						className='btn'
						title='Previous slide'
						onClick={handlePreviousClick}
					>
						&#9664;
					</button>

					<button className='btn' title='Next slide' onClick={handleNextClick}>
						&#9654;
					</button>
				</div>
			</div>
		</div>
	);
};

export default SliderWrapper;
