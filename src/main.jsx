import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import './styles/index.css';
import theme from './themes.jsx';

//extend theme here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    }
  </React.StrictMode>
);
