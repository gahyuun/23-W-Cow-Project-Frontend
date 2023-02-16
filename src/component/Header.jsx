import { Box, Image, Select, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../img/pofolLogo.png';
import { stacks } from '../helper/types.js';

function Header({ isLogin, setIsLogin }) {
  const navigate = useNavigate('');
  const location = useLocation();
  const [techstack, setTechstack] = React.useState('');
  const textStyle = {
    fontWeight: { sm: '500', md: '500', lg: '600' },
    fontSize: { sm: '1rem', md: '1.2rem', lg: '1.7rem' },
    mr: { sm: '1rem', md: '1.5rem', lg: '2rem' },
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
  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    if (searchValue === '') {
      setTechstack('');
      return;
    }
    navigate(`/api/search?searchWord=${searchValue}`);
  };
  React.useEffect(() => {
    const urlSearch = new URLSearchParams(location.search);
    const searchWord = urlSearch.get('searchWord');
    if (searchWord === null) {
      setTechstack('');
      return;
    }
    setTechstack(searchWord);
  });

  return (
    <Box
      borderBottom="1px solid #C2C2C2"
      display="flex"
      h={{ sm: '3rem', md: '6rem', lg: '8.15rem' }}
      justifyContent="space-around"
      alignItems="center"
      w="100vw"
    >
      <Box
        w={{ sm: 'lg', md: '3xl', lg: '7xl' }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => {
            navigate('/');
          }}
          style={{ cursor: 'pointer' }}
          w={{ sm: '4rem', md: '8rem', lg: '12.5rem' }}
          height={{ sm: '3rem', md: '6rem', lg: '8.125rem' }}
        >
          <Image
            w={{ sm: '4rem', md: '8rem', lg: '12.5rem' }}
            height={{ sm: '3rem', md: '6rem', lg: '8.125rem' }}
            src={logo}
            alt="logo"
          />
        </Box>

        <Box>
          <Select
            placeholder="Stack"
            color="#718096"
            w={{ sm: '8rem', md: '20rem ', lg: '28rem' }}
            onChange={handleSearch}
            value={techstack}
          >
            {Object.keys(stacks).map((stack) => (
              <option key={stack} value={stack}>
                {stack}
              </option>
            ))}
          </Select>
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
                  navigate('/my');
                }}
                style={{ cursor: 'pointer' }}
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
                style={{ cursor: 'pointer' }}
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
                style={{ cursor: 'pointer' }}
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
                  navigate('/join');
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
