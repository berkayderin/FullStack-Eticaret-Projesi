import './ProductItem.css'

import { Link, useNavigate } from 'react-router-dom'

import { CartContext } from '../../context/CartProvider'
import propTypes from 'prop-types'
import { useContext } from 'react'

const ProductItem = ({ productItem }) => {
	const { addToCard, cartItems } = useContext(CartContext)

	const navigate = useNavigate()

	const filteredCart = cartItems.find((cartItem) => cartItem.id === productItem.id)

	return (
		<div className="product-item glide__slide glide__slide--active">
			<div className="product-image">
				<a href="#">
					<img src={productItem.img.singleImage} className="img1" />
					<img src={productItem.img.thumbs[1]} className="img2" />
				</a>
			</div>
			<div className="product-info">
				<a href="$" className="product-title">
					={productItem.name}
				</a>
				<ul className="product-star">
					<li>
						<i className="bi bi-star-fill"></i>
					</li>
					<li>
						<i className="bi bi-star-fill"></i>
					</li>
					<li>
						<i className="bi bi-star-fill"></i>
					</li>
					<li>
						<i className="bi bi-star-fill"></i>
					</li>
					<li>
						<i className="bi bi-star-half"></i>
					</li>
				</ul>
				<div className="product-prices">
					<strong className="new-price">${productItem.price.newPrice.toFixed(2)}</strong>
					<span className="old-price">${productItem.price.oldPrice.toFixed(2)}</span>
				</div>
				<span className="product-discount">-{productItem.discount}%</span>
				<div className="product-links">
					<button className="add-to-cart" onClick={() => addToCard(productItem)} disabled={filteredCart}>
						<i className="bi bi-basket-fill"></i>
					</button>
					<button>
						<i className="bi bi-heart-fill"></i>
					</button>
					<Link to={`product/${productItem.id}`} className="product-link">
						<i className="bi bi-eye-fill"></i>
					</Link>
					<a href="#">
						<i className="bi bi-share-fill"></i>
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProductItem

ProductItem.propTypes = {
	productItem: propTypes.object,
	setCartItems: propTypes.func
}
