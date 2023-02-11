import { Box, Image, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../img/LOGO.png';

function Header({ isLogin, setIsLogin }) {
  const navigate = useNavigate('');
  const textStyle = {
    fontWeight: '600',
    fontSize: '1.7rem',
    mr: '2rem',
  };
  const handleLogout = () => {
    Swal.fire({
      width: 400,
      height: 260,
      html: '로그아웃 하시겠습니까?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: '#CF5E53',
      timer: 3000,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        setIsLogin(false);
        navigate('/');
      }
    });
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
        <Box>sdf</Box>

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
                  navigate('/mypage');
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
                sx={textStyle}
                onClick={() => {
                  navigate('/login');
                }}
              >
                Login
              </Text>
              <a href="http://localhost:3000/join">
                <Text
                  _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: '#A1CCF4',
                  }}
                  sx={textStyle}
                  onClick={() => {
                    navigate('/join');
                  }}
                >
                  Join
                </Text>
              </a>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
