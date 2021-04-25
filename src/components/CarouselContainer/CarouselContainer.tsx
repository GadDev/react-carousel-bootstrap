import { Carousel } from 'react-bootstrap';

type Item = {
	img: string;
	title: string;
	description: string;
};

type Props = {
	items: Item[];
};

const CarouselContainer: React.FC<Props> = ({ items }) => {
	return (
		<Carousel interval={2000} fade controls={false}>
			{items.map((item: Item) => (
				<Carousel.Item>
					<img
						className='d-block w-100 '
						src={item.img}
						alt={item.title}
					/>
					<Carousel.Caption>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default CarouselContainer;
