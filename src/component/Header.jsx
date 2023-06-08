import {
  Box,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../img/LOGO.png';
import { stacks } from '../helper/types.js';
import { removeCookie } from '../helper/cookie';

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
        removeCookie();
        setIsLogin(false);
        navigate('/', { state: false });
      }
    });
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    if (searchValue === '') {
      setTechstack('');
      return;
    }
    navigate('/', { state: searchValue });
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
          w={{ sm: '7rem', md: '11rem', lg: '17rem' }}
          height={{ sm: '2rem', md: '3rem', lg: '5rem' }}
        >
          <Image
            w={{ sm: '7rem', md: '11rem', lg: '17rem' }}
            height={{ sm: '2rem', md: '3rem', lg: '5rem' }}
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
        {/* xs일떄 */}
        <Box
          sx={{
            display: { sm: 'none', md: 'flex' },
          }}
        >
          {isLogin ? (
            <Box
              display="flex"
              justifyContent="space-between"
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
        {/* 화면 작아질때 헴버거 메뉴 */}
        <Box
          sx={{
            display: { sm: 'block', md: 'none', lg: 'none' },
          }}
        >
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            {isLogin ? (
              <MenuList>
                <MenuItem
                  onClick={() => {
                    navigate('/my');
                  }}
                >
                  My
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            ) : (
              <MenuList>
                <MenuItem
                  onClick={() => {
                    navigate('/login');
                  }}
                >
                  Login
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate('/join');
                  }}
                >
                  Join
                </MenuItem>
              </MenuList>
            )}
          </Menu>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
