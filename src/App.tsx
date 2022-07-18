import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import TotalProducts from './components/TotalProducts/TotalProducts';
import { Box, Flex } from '@chakra-ui/react';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
	return (
		<Wrapper>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/all" element={<TotalProducts/>}></Route>
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
