import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './component/Header';
import Write from './pages/Write';
import Main from './pages/Main';
import My from './pages/My';
import Sign from './pages/Sign';

function App() {
  const [loginButton, setLoginButton] = React.useState(false);
  return (
    <ChakraProvider>
      <Header />
      <Router>
        <Routes>
          <Route path="/portfolio" element={<Write />} />
          <Route path="/" element={<Main isLogin={false} />} />
          <Route
            path="/sign"
            element={
              <Sign loginButton={loginButton} setLoginButton={setLoginButton} />
            }
          />
          <Route path="/mypage" element={<My />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
