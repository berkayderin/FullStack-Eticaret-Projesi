import './Sliders.css'

import SliderItem from './SliderItem'
import { useState } from 'react'

const Sliders = () => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + 1) % 3)
	}

	const prevSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3)
	}

	return (
		<section className="slider">
			<div className="slider-elements">
				{currentSlide === 0 && <SliderItem imageSrc="img/slider/slider1.jpg" />}
				{currentSlide === 1 && <SliderItem imageSrc="img/slider/slider2.jpg" />}
				{currentSlide === 2 && <SliderItem imageSrc="img/slider/slider3.jpg" />}
				<div className="slider-buttons">
					<button onClick={prevSlide}>
						<i className="bi bi-chevron-left" />
					</button>
					<button onClick={nextSlide}>
						<i className="bi bi-chevron-right" />
					</button>
				</div>
				<div className="slider-dots">
					<button className={`slider-dot ${currentSlide === 0 ? 'active' : ''}`} onClick={() => setCurrentSlide(0)}>
						<span />
					</button>
					<button className={`slider-dot ${currentSlide === 1 ? 'active' : ''}`} onClick={() => setCurrentSlide(1)}>
						<span />
					</button>
					<button className={`slider-dot ${currentSlide === 2 ? 'active' : ''}`} onClick={() => setCurrentSlide(2)}>
						<span />
					</button>
				</div>
			</div>
		</section>
	)
}

export default Sliders
