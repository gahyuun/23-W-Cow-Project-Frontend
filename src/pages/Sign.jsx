import * as React from 'react';
import { Box, Card, CardHeader } from '@chakra-ui/react';
import Join from '../component/Join';

function Sign({ loginButton, setLoginButton }) {
  const notShowHeaderStyle = {
    borderRadius: ' 0.625rem',
    w: 'xl',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #D9D9D9',
    fontSize: 'xl',
    fontWeight: '600',
  }; // 보여지는 컴포넌트가 아닌 헤더 스타일
  const showHeaderStyle = {
    w: 'xl',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3182CE',
    opacity: '0.6',
    h: '6rem',
    borderRadius: '0.625rem',
    blendMode: 'normal',
    fontSize: 'xl',
    fontWeight: '600',
    color: '#fff',
  }; // 보여지는 컴포넌트의 헤더 스타일

  const handleLogin = () => {
    setLoginButton(true);
  };
  const handleJoin = () => {
    setLoginButton(false);
  };
  return (
    <Box display="flex" justifyContent="center">
      <Card w="2xl" h="xl" mt="120px" border="1px solid blue">
        <CardHeader w="2xl" h="6rem" display="flex" padding="0px">
          <Box
            sx={loginButton ? showHeaderStyle : notShowHeaderStyle}
            onClick={handleLogin}
          >
            로그인
          </Box>
          <Box
            sx={loginButton ? notShowHeaderStyle : showHeaderStyle}
            onClick={handleJoin}
          >
            회원가입
          </Box>
        </CardHeader>
        {loginButton ? <div>로그인 컴포넌트</div> : <Join />}
      </Card>
    </Box>
  );
}

export default Sign;
