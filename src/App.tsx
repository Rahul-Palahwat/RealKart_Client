// import AllProducts from './components/AllProducts/AllProducts';

import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import TotalProducts from './components/TotalProducts/TotalProducts';
import AllProducts from './components/AllProducts/AllProducts';
import { Box, Flex } from '@chakra-ui/react';
import BestSelling from './components/BestSelling/BestSelling';
import MostWishlisted from './components/MostWishlisted/MostWishlisted';
import Footer from './components/Footer/Footer';
import AllBestSelling from './components/All BestSelling/AllBestSelling';
import AllMostWishlisted from './components/AllMostWishlisted/AllMostWishlisted';

function App() {
	return (
		<Wrapper>
			<Routes>
				<Route path="/" element={
					<Flex direction={"column"}>
						<AllProducts/>
						<BestSelling/>
						<MostWishlisted/>
					</Flex>
				
				}></Route>
				<Route path="/all" element={<TotalProducts/>}></Route>
				<Route path="/AllBestSelling" element={<AllBestSelling/>}></Route>
				<Route path="/AllMostWishlisted" element={<AllMostWishlisted/>}></Route>
			</Routes>
		</Wrapper>
  	);
}


const Wrapper = (props:any) => {
	return (<>
		<Box style={{ "backgroundColor": "white" }}>
			<Navbar />
			<Box>
				{props.children}
			</Box>
		</Box>
		<Box>
			<Footer/>
		</Box>
		</>
	)
}

export default App;
