import { Blogs } from '../components/Blogs/Blogs'
import Brands from '../components/Brands/Brands'
import CampaignSingle from '../components/CampaignSingle/CampaignSingle'
import Campaigns from '../components/Campaigns/Campaigns'
import Categories from '../components/Categories/Categories'
import Footer from '../components/Layout/Footer/Footer'
import Header from '../components/Layout/Header/Header'
import Policy from '../components/Layout/Policy/Policy'
import Products from '../components/Products/Products'
import React from 'react'
import Sliders from '../components/Slider/Sliders'

const Home = () => {
	return (
		<React.Fragment>
			<Header />
			<Sliders />
			<Categories />
			<Products />
			<Campaigns />
			<Products />
			<Blogs />
			<Brands />
			<CampaignSingle />
			<Policy />
			<Footer />
		</React.Fragment>
	)
}

export default Home
