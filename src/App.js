import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './component/Header';
import Write from './pages/Write';
import Main from './pages/Main';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Write />
      <Router>
        <Routes>
          <Route path="/" element={<Main isLogin={false} />} />
          <Route path="/Login" />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
