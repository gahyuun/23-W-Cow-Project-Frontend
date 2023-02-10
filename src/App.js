import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './component/Header';
import Write from './pages/Write';
import Main from './pages/Main';
import My from './pages/My';
// import Sign from './pages/Sign';
import Join from './pages/Join';
import Login from './pages/Login';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Router>
        <Routes>
          <Route path="/portfolio/write" element={<Write />} />
          <Route path="/" element={<Main isLogin={false} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/mypage" element={<My />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
