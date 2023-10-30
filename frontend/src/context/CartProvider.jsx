import { createContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

const CartContext = createContext()

const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState(
		localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
	)

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems))
	}, [cartItems])

	console.log('cart items:', cartItems)

	// const addToCard = (cardItem) => {
	// 	setCartItems((prevCart) => [
	// 		...prevCart,
	// 		cardItem,
	// 		{
	// 			quantity: cardItem.quantity ? cardItem.quantity : 1
	// 		}
	// 	])
	// }

	const addToCard = (cartItem) => {
		setCartItems((prevCart) => [
			...prevCart,
			{
				...cartItem,
				quantity: cartItem.quantity ? cartItem.quantity : 1
			}
		])
	}

	const removeFromCard = (itemId) => {
		const filteredCartItems = cartItems.filter((cartItem) => {
			return cartItem.id !== itemId
		})

		setCartItems(filteredCartItems)
	}

	return <CartContext.Provider value={{ addToCard, removeFromCard, cartItems }}>{children}</CartContext.Provider>
}

export default CartProvider

export { CartContext }

CartProvider.propTypes = {
	children: PropTypes.node
}
