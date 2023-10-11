import './Sliders.css'

import SliderItem from './SliderItem'

const Sliders = () => {
	return (
		<section className="slider">
			<div className="slider-elements">
				<SliderItem />
				<div className="slider-buttons">
					<button>
						<i className="bi bi-chevron-left" />
					</button>
					<button>
						<i className="bi bi-chevron-right" />
					</button>
				</div>
				<div className="slider-dots">
					<button className="slider-dot active">
						<span />
					</button>
					<button className="slider-dot">
						<span />
					</button>
					<button className="slider-dot">
						<span />
					</button>
				</div>
			</div>
		</section>
	)
}

export default Sliders
