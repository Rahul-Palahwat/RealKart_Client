// import AllProducts from './components/AllProducts/AllProducts';

import { Routes, Route } from 'react-router-dom'

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import TotalProducts from './components/TotalProducts/TotalProducts';
import AllProducts from './components/AllProducts/AllProducts';
import { Box } from '@chakra-ui/react';

function App() {
	return (
		<Wrapper>
			<Routes>
				<Route path="/" element={<AllProducts/>}></Route>
				<Route path="/all" element={<TotalProducts/>}></Route>
			</Routes>
		</Wrapper>
  	);
}


const Wrapper = (props:any) => {
	return (
		<Box style={{ "backgroundColor": "white" }}>
			<Navbar />
			<Box>
				{props.children}
			</Box>
			<Box>
				<Footer />
			</Box>
		</Box>
	)
}

export default App;
