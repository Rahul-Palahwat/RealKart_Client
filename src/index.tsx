import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript, extendTheme,  type ThemeConfig } from '@chakra-ui/react'

import { Provider } from 'react-redux';

import store from './Redux/app/store'


const config: ThemeConfig = {
	initialColorMode: 'light',
  	useSystemColorMode: false,
}
const theme = extendTheme({ config })

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<Provider store={store}>
	<ChakraProvider>
    	<React.StrictMode>
      		<ColorModeScript initialColorMode={theme.config.initialColorMode} />
      		<App />
    	</React.StrictMode>
  	</ChakraProvider>
	  </Provider>
);
