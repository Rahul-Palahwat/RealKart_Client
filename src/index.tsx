import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript, extendTheme,  type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
	initialColorMode: 'light',
  	useSystemColorMode: false,
}
const theme = extendTheme({ config })

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<ChakraProvider>
    	<React.StrictMode>
      		<ColorModeScript initialColorMode={theme.config.initialColorMode} />
      		<App />
    	</React.StrictMode>
  	</ChakraProvider>
);
