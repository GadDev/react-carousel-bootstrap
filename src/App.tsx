import './App.css';

import CarouselContainer from './components/CarouselContainer';

import image1 from './assets/images/img-1.jpeg';
import image2 from './assets/images/img-2.jpeg';
import image3 from './assets/images/img-3.jpeg';

const itemsCarousel = [
	{
		img: image1,
		title: 'First slide label',
		description:
			'Nulla vitae elit libero, a pharetra augue mollis interdum.',
	},
	{
		img: image2,
		title: 'Second slide label',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		img: image3,
		title: 'Third slide label',
		description:
			'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
	},
];

function App() {
	return (
		<div className='App'>
			<CarouselContainer items={itemsCarousel} />
		</div>
	);
}

export default App;
