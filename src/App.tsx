
import { Flex } from '@chakra-ui/react';
import './App.css';
import AllProducts from './components/AllProducts/AllProducts';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import TotalProducts from './components/TotalProducts/TotalProducts';

function App() {
  
  return (
    <div style={{"backgroundColor":"#EAECEC"}}>
      <div className='whole_body'>
        <Navbar/>
        <hr />
      </div>
      {/* <AllProducts/> */}
      <TotalProducts/>
      <Footer/>
    </div>
  );
}

export default App;
