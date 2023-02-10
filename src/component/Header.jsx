import { Box, Image, Text, Input, InputGroup } from '@chakra-ui/react';
import * as React from 'react';
import logo from '../img/LOGO.png';

function Header({ isLogin, setIsLogin }) {
  const textStyle = {
    fontWeight: '600',
    fontSize: '1.7rem',
    mr: '2rem',
  };
  const handleLogout = () => {
    localStorage.clear();
    setIsLogin(false);
    window.location.replace('http://localhost:3000/');
  };

  return (
    <Box
      borderBottom="1px solid #C2C2C2"
      h="8.125rem"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      <Box
        w="7xl"
        display="flex"
        justifyContent="space-between"
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
              <Text
                _hover={{
                  textDecoration: 'underline',
                  textDecorationColor: '#A1CCF4',
                }}
                sx={textStyle}
                onClick={() => {
                  window.location.replace('http://localhost:3000/mypage');
                }}
              >
                My
              </Text>
              <Text
                _hover={{
                  textDecoration: 'underline',
                  textDecorationColor: '#A1CCF4',
                }}
                onClick={handleLogout}
                sx={textStyle}
              >
                Logout
              </Text>
            </Box>
          ) : (
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Text
                _hover={{
                  textDecoration: 'underline',
                  textDecorationColor: '#A1CCF4',
                }}
                onClick={() => {
                  window.location.replace('http://localhost:3000/login');
                }}
                sx={textStyle}
              >
                Login
              </Text>
              <Text
                _hover={{
                  textDecoration: 'underline',
                  textDecorationColor: '#A1CCF4',
                }}
                sx={textStyle}
                onClick={() => {
                  window.location.replace('http://localhost:3000/join');
                }}
              >
                Join
              </Text>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
