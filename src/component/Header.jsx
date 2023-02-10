import { Box, Image, Text, Input, InputGroup } from '@chakra-ui/react';
import * as React from 'react';
import logo from '../img/LOGO.png';

function Header({ isLogin, setIsLogin }) {
  const handleLogout = () => {
    localStorage.clear();
    setIsLogin(false);
    window.location.replace('http://localhost:3000/');
  };

  return (
    <Box
      border="1px solid red"
      h="8.125rem"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      <Box border="1px solid black">
        <Image src={logo} alt="logo" />
      </Box>
      <Box>
        <InputGroup size="sm">
          <Input placeholder="검색" />
        </InputGroup>
      </Box>

      <Box>
        {isLogin ? (
          <Box
            display="flex"
            justifyContent="space-betwwen"
            alignItems="center"
          >
            <Text>MY</Text>
            <Text onClick={handleLogout}>로그아웃</Text>
          </Box>
        ) : (
          <Box>
            <Text>로그인</Text>
            <Text>회원가입</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Header;
