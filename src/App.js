import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './component/Header';

import Main from './pages/Main';
import Join from './pages/Join';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main isLogin={false} />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
