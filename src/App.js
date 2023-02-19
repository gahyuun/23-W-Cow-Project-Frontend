/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import Header from './component/Header';
import Write from './pages/Write';
import Main from './pages/Main';
// eslint-disable-next-line import/no-named-as-default
import My from './pages/My';
// import Sign from './pages/Sign';
import Join from './pages/Join';
import Login from './pages/Login';
import Detail from './pages/Detail';
import { getCookie } from './api/cookie';

// 로그인시 /login, /join 접근시 My 페이지로 이동. /login, /join 접근 불가
// 비로그인 상태에서 /mypage, /portfolio 페이지 접근 불가. Login 페이지로 이동

function App() {
  const [isLogin, setIsLogin] = useState(getCookie());

  return (
    <ChakraProvider>
      <Router>
        <Header isLogin={isLogin} setIsLogin={setIsLogin} />
        <Routes>
          <Route path="*" element={<>404</>} />
          <Route path="/" element={<Main isLogin={false} />} />
          <Route
            path="/write"
            element={isLogin ? <Write /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={
              !isLogin ? (
                <Login setIsLogin={setIsLogin} />
              ) : (
                <Navigate to="/my" />
              )
            }
          />
          <Route
            path="/join"
            element={!isLogin ? <Join /> : <Navigate to="/my" />}
          />
          <Route
            path="/my"
            element={isLogin ? <My /> : <Navigate to="/login" />}
          />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
