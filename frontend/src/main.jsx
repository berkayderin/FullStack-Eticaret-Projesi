import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import App from './App.jsx'
import CartProvider from './context/CartProvider'
import MainLayout from './layouts/MainLayout'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
	<CartProvider>
		<MainLayout>
			<App />
		</MainLayout>
	</CartProvider>
)
