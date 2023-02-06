import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './component/Header';
import Write from './pages/Write';
import Main from './pages/Main';
import Join from './pages/Join';
import My from './pages/My';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Router>
        <Routes>
          <Route path="/portfolio" element={<Write />} />
          <Route path="/" element={<Main isLogin={false} />} />
          <Route path="/join" element={<Join isLogin={false} />} />
          <Route path="/mypage" element={<My />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
