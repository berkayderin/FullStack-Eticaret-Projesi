import './App.css'

import { Route, Routes } from 'react-router-dom'

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
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/blog" element={<BlogPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/auth" element={<AuthPage />} />
				<Route path="/product/:id" element={<ProductDetailsPage />} />
				<Route path="/blog/:id" element={<BlogDetailsPage />} />
			</Routes>
		</React.Fragment>
	)
}

export default App
