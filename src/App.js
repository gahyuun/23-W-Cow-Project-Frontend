/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './component/Header';
import Write from './pages/Write';
import Main from './pages/Main';
import My from './pages/My';
// import Sign from './pages/Sign';
import Join from './pages/Join';
import Login from './pages/Login';
// 로그인시 /login, /join 접근시 My 페이지로 이동. /login, /join 접근 불가
// 비로그인 상태에서 /mypage, /portfolio 페이지 접근 불가. Login 페이지로 이동

function App() {
  const [isLogin, setIsLogin] = React.useState(true);
  console.log(isLogin, 'iis');
  // React.useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     setIsLogin(true);
  //     return;
  //   }
  //   setIsLogin(false);
  // }, []);

  return (
    <ChakraProvider>
      <Router>
        <Header isLogin={isLogin} setIsLogin={setIsLogin} />
        <Routes>
          <Route path="*" element={<>404</>} />
          <Route path="/" element={<Main isLogin={false} />} />
          {/* <Route
            path="/portfolio"
            element={isLogin ? <Write /> : <Navigate to="/login" />}
          /> */}
          <Route path="/portfolio" element={<Write />} />
          <Route
            path="/login"
            element={
              !isLogin ? (
                <Login setIsLogin={setIsLogin} />
              ) : (
                <Navigate to="/mypage" />
              )
            }
          />
          <Route
            path="/join"
            element={!isLogin ? <Join /> : <Navigate to="/mypage" />}
          />
          <Route
            path="/mypage"
            element={isLogin ? <My /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
