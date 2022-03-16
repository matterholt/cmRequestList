import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import { ChakraProvider } from '@chakra-ui/react';

  
import Dashboard from './pages/Dashboard';

interface AppProps {}
interface AppState {
  name: string;
}

function App() {
  return (
    <ChakraProvider>
      <Dashboard />
    </ChakraProvider>
  );
}

render(<App />, document.getElementById('root'));
