import * as React from 'react';
import './App.css';
import CarouselWrapper from './Components/Carousel/CarouselWrapper';

function App() {
	const slides = [
		{
			index: 0,
			headline: 'Bollywood Dance',
			button: 'Know More',
			src: 'https://timesofindia.indiatimes.com/photo/62999793.cms',
		},

		{
			index: 1,
			headline: 'Carnatic Singing',
			button: 'Know More',
			src: 'https://riyazapp.com/wp-content/uploads/2017/10/Carnatic.jpg',
		},

		{
			index: 2,
			headline: 'Indian Classical Music',
			button: 'Know More',
			src: 'https://nikonites.com/attachments/d3300/87819d1399445630-indian-classical-music-concert-_dsc5158.jpg',
		},

		{
			index: 3,
			headline: 'Art Camp',
			button: 'Know More',
			src: 'https://images.unsplash.com/photo-1596495717664-15c0aa11458c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		},

		{
			index: 4,
			headline: 'Public Speaking',
			button: 'Know More',
			src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		},

		{
			index: 5,
			headline: 'Kathak',
			button: 'Know More',
			src: 'https://images.unsplash.com/photo-1479812627010-aa5bd9d173b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
		},
	];

	return (
		<>
			<div className='header'>
				<h3 variant='h2'>3-D Carousel</h3>
			</div>

			<CarouselWrapper slides={slides} initial={2} />
		</>
	);
}

export default App;
