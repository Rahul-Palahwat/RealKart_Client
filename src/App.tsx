import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react';
import './App.css';

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button size={'sm'} onClick={() => toggleColorMode()}>
    	{colorMode === 'light' ? <MoonIcon  /> : <SunIcon />}
    </Button>
  );
}

export default App;
