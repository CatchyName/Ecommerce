import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Error, Item } from './components';

const items = [
	{
		id: 'bf51d6a7-b69f-4cb7-9d27-7348939d195a',
		title: 'VENGEANCE® RGB RT 32GB (2 x 16GB) DDR4 DRAM 4600MHz C18 Memory Kit – Black',
		price: 324.99,
		description: 'CORSAIR VENGEANCE RGB RT DDR4 memory punches up your PC’s aesthetics while delivering outstanding performance optimized for AMD systems.',
		imageURL: '/images/c06b27d4-0bbb-11ec-9a03-0242ac130003.png'
	},
	{
		id: 'eff5af8e-ccda-4767-9667-ffa5bde271a3',
		title: 'ASUS GeForce RTX 2060 Overclocked 6G GDDR6 Dual-Fan EVO Edition VR Ready HDMI DisplayPort DVI Graphics Card',
		price: 775.97,
		description: 'Powered by NVIDIA Turing architecture, the ASUS Dual GeForce RTX 2060 EVO bringing incredible performance and the power of real-time ray tracing and AI to the latest games and to every gamer. Leveraging advanced cooling technologies derived from flagship graphics cards, the Dual GeForce RTX 2060 EVO opts for substance over style, the perfect choice for a well-balanced build.',
		imageURL: '/images/edb417fc-0bc8-11ec-9a03-0242ac130003.jpg'
	},
	{
		id: 'eff5af8e-ccda-4767-9667-ffa5bde271a3',
		title: 'ASUS GeForce RTX 2060 Overclocked 6G GDDR6 Dual-Fan EVO Edition VR Ready HDMI DisplayPort DVI Graphics Card',
		price: 775.97,
		description: 'Powered by NVIDIA Turing architecture, the ASUS Dual GeForce RTX 2060 EVO bringing incredible performance and the power of real-time ray tracing and AI to the latest games and to every gamer. Leveraging advanced cooling technologies derived from flagship graphics cards, the Dual GeForce RTX 2060 EVO opts for substance over style, the perfect choice for a well-balanced build.',
		imageURL: '/images/edb417fc-0bc8-11ec-9a03-0242ac130003.jpg'
	},
	{
		id: 'eff5af8e-ccda-4767-9667-ffa5bde271a3',
		title: 'ASUS GeForce RTX 2060 Overclocked 6G GDDR6 Dual-Fan EVO Edition VR Ready HDMI DisplayPort DVI Graphics Card',
		price: 775.97,
		description: 'Powered by NVIDIA Turing architecture, the ASUS Dual GeForce RTX 2060 EVO bringing incredible performance and the power of real-time ray tracing and AI to the latest games and to every gamer. Leveraging advanced cooling technologies derived from flagship graphics cards, the Dual GeForce RTX 2060 EVO opts for substance over style, the perfect choice for a well-balanced build.',
		imageURL: '/images/edb417fc-0bc8-11ec-9a03-0242ac130003.jpg'
	},
	{
		id: 'eff5af8e-ccda-4767-9667-ffa5bde271a3',
		title: 'ASUS GeForce RTX 2060 Overclocked 6G GDDR6 Dual-Fan EVO Edition VR Ready HDMI DisplayPort DVI Graphics Card',
		price: 775.97,
		description: 'Powered by NVIDIA Turing architecture, the ASUS Dual GeForce RTX 2060 EVO bringing incredible performance and the power of real-time ray tracing and AI to the latest games and to every gamer. Leveraging advanced cooling technologies derived from flagship graphics cards, the Dual GeForce RTX 2060 EVO opts for substance over style, the perfect choice for a well-balanced build.',
		imageURL: '/images/edb417fc-0bc8-11ec-9a03-0242ac130003.jpg'
	},
	{
		id: 'eff5af8e-ccda-4767-9667-ffa5bde271a3',
		title: 'ASUS GeForce RTX 2060 Overclocked 6G GDDR6 Dual-Fan EVO Edition VR Ready HDMI DisplayPort DVI Graphics Card',
		price: 775.97,
		description: 'Powered by NVIDIA Turing architecture, the ASUS Dual GeForce RTX 2060 EVO bringing incredible performance and the power of real-time ray tracing and AI to the latest games and to every gamer. Leveraging advanced cooling technologies derived from flagship graphics cards, the Dual GeForce RTX 2060 EVO opts for substance over style, the perfect choice for a well-balanced build.',
		imageURL: '/images/edb417fc-0bc8-11ec-9a03-0242ac130003.jpg'
	},
	{
		id: 'eff5af8e-ccda-4767-9667-ffa5bde271a3',
		title: 'ASUS GeForce RTX 2060 Overclocked 6G GDDR6 Dual-Fan EVO Edition VR Ready HDMI DisplayPort DVI Graphics Card',
		price: 775.97,
		description: 'Powered by NVIDIA Turing architecture, the ASUS Dual GeForce RTX 2060 EVO bringing incredible performance and the power of real-time ray tracing and AI to the latest games and to every gamer. Leveraging advanced cooling technologies derived from flagship graphics cards, the Dual GeForce RTX 2060 EVO opts for substance over style, the perfect choice for a well-balanced build.',
		imageURL: '/images/edb417fc-0bc8-11ec-9a03-0242ac130003.jpg'
	},
	{
		id: 'eff5af8e-ccda-4767-9667-ffa5bde271a3',
		title: 'ASUS GeForce RTX 2060 Overclocked 6G GDDR6 Dual-Fan EVO Edition VR Ready HDMI DisplayPort DVI Graphics Card',
		price: 775.97,
		description: 'Powered by NVIDIA Turing architecture, the ASUS Dual GeForce RTX 2060 EVO bringing incredible performance and the power of real-time ray tracing and AI to the latest games and to every gamer. Leveraging advanced cooling technologies derived from flagship graphics cards, the Dual GeForce RTX 2060 EVO opts for substance over style, the perfect choice for a well-balanced build.',
		imageURL: '/images/edb417fc-0bc8-11ec-9a03-0242ac130003.jpg'
	},
	{
		id: 'eff5af8e-ccda-4767-9667-ffa5bde271a3',
		title: 'ASUS GeForce RTX 2060 Overclocked 6G GDDR6 Dual-Fan EVO Edition VR Ready HDMI DisplayPort DVI Graphics Card',
		price: 775.97,
		description: 'Powered by NVIDIA Turing architecture, the ASUS Dual GeForce RTX 2060 EVO bringing incredible performance and the power of real-time ray tracing and AI to the latest games and to every gamer. Leveraging advanced cooling technologies derived from flagship graphics cards, the Dual GeForce RTX 2060 EVO opts for substance over style, the perfect choice for a well-balanced build.',
		imageURL: '/images/edb417fc-0bc8-11ec-9a03-0242ac130003.jpg'
	},
	{
		id: 'eff5af8e-ccda-4767-9667-ffa5bde271a3',
		title: 'ASUS GeForce RTX 2060 Overclocked 6G GDDR6 Dual-Fan EVO Edition VR Ready HDMI DisplayPort DVI Graphics Card',
		price: 775.97,
		description: 'Powered by NVIDIA Turing architecture, the ASUS Dual GeForce RTX 2060 EVO bringing incredible performance and the power of real-time ray tracing and AI to the latest games and to every gamer. Leveraging advanced cooling technologies derived from flagship graphics cards, the Dual GeForce RTX 2060 EVO opts for substance over style, the perfect choice for a well-balanced build.',
		imageURL: '/images/edb417fc-0bc8-11ec-9a03-0242ac130003.jpg'
	}
];

function App() {

	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path='/' exact>
						<div className="items">
							{items.map(function (item, index) {
								return <Item key={index} data={item} />;
							})}
						</div>
					</Route>
					<Route path='/checkout' exact>

					</Route>
					<Route path='/item'>

					</Route>
					<Route>
						<Error code="404" message="Page not found." />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
