import React, { useEffect, useState, useRef } from "react";
import Card from './Card';
import Slider from "react-slick";
import { ReactComponent as SampleNextArrow } from "../assets/icons/chevron-circled.svg";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Car {
	id: string;
	modelName: string;
	bodyType: string;
	modelType: string;
	imageUrl: string;
}

const Home:React.FC <{}> = () => {
	const [cars, setCars] = useState([]);
	const [filterData, setFilterCars] = useState([]);
	const customSlider = useRef<Slider>(null);

	const settings = {
		speed: 400,
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: filterData.length < 4 ? filterData.length : 4,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				dots: false,
				arrows: false,
				slidesToShow: filterData.length < 4 ? filterData.length : 4,
			},
		},
		{
			breakpoint: 768,
			settings: {
				dots: true,
				arrows: false,
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 650,
			settings: {
				dots: true,
				arrows: false,
				slidesToShow: 2,
			},
		},
		],
	};

	const carTypes: any = cars
		.map((car: Car) => car.bodyType)
		.filter((car, index, array) => array.indexOf(car) === index);

	const carTypeSelected = (e: any) => {
		const carsClone = [...cars];
		const filteredCars: any = carsClone.filter((car: Car) => (e.target.value.toLowerCase() === car.bodyType.toLowerCase()));
		setFilterCars(filteredCars.length ? filteredCars : carsClone);
	};

	useEffect(() => {
		fetch("api/cars.json", {
		headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
		},
		})
		.then((res) => res.json())
		.then((data) => {
				setCars(data);
				setFilterCars(data);
		})
		.catch((e) => console.log("Error:", e));
	}, []);

	return (
    <div className='main'>
			<div className='filterSection'>
				<span className='filterLabel'>Body Type:</span>
				<select
					className="carFilter"
					onChange={carTypeSelected}
				>
					<option value="All Cars">Choose Any</option>
					{carTypes.map((item: string) => {
						return (
						<option value={item} key={item}>
							{item.toUpperCase()}
						</option>
						);
					})}
				</select>
			</div>
			<Slider className="slider" ref={customSlider} {...settings}>
					{filterData.map((car: Car, index: number) => <Card key={`Card-${index}`} data={car} />)}
			</Slider>
			{filterData.length > 4 ? (
				<div className="sliderControls">
					<SampleNextArrow className="slideLeft" onClick={() => customSlider?.current?.slickPrev()} />
					<SampleNextArrow className="slideRight" onClick={() => customSlider?.current?.slickNext()} />
				</div>
			) : null}
		</div>
  );
};

export default React.memo(Home);
