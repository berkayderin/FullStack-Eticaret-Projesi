import './App.css'

import AuthPage from './pages/AuthPage'
import BlogDetailsPage from './pages/BlogDetailsPage'
import BlogPage from './pages/BlogPage'
import CartPage from './pages/CartPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import React from 'react'
import ShopPage from './pages/ShopPage'

function App() {
	return (
		<React.Fragment>
			{/* <HomePage />
			<ShopPage />
			<ContactPage />
			<AuthPage /> */}
			<CartPage />
			{/* <BlogPage />
			<BlogDetailsPage />
			<ProductDetailsPage /> */}
		</React.Fragment>
	)
}

export default App
