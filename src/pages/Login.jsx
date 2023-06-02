import {
  Box,
  Button,
  CardBody,
  Input,
  Text,
  FormControl,
  Icon,
  InputGroup,
} from '@chakra-ui/react';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Sign from '../component/Sign.jsx';
import { setCookie } from '../helper/cookie.js';
import { signStyle } from '../helper/style.js';

function Login({ setIsLogin }) {
  const [showPW, setShowPW] = React.useState(false); // 비밀번호 보여주기 여부
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginData = {
      email: data.get('email'),
      password: data.get('password'),
    };
    await axios
      .post('/auth/login', loginData)
      .then((res) => {
        const submitBtn = document.getElementById('submit');
        submitBtn.addEventListener('click', (e) => {
          e.setAttribute('disabled', 'true');
        });
        setCookie(res.data.data.token);
        setIsLogin(true);
        Swal.fire({ ...signStyle.swalFire, html: '로그인 성공' });
        navigate('/');
      })
      .catch(() => {
        Swal.fire({
          ...signStyle.swalFire,
          html: '잘못된 정보입니다',
        });
      });
  }; // 로그인 submit 시 백엔드한테 post

  return (
    <Sign page="login">
      <CardBody sx={signStyle.cardBody}>
        <form onSubmit={handleSubmit}>
          <Box
            w={{ sm: '18rem', md: '20rem', lg: 'xl' }}
            h={{ sm: '18rem', md: '20rem', lg: 'sm' }}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <FormControl
              w={{ sm: '18rem', md: '20rem', lg: 'xl' }}
              h="15rem"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box sx={signStyle.groupStyle}>
                <Text sx={signStyle.TextStyle}>Email</Text>
                <Box sx={signStyle.inputGroupStyle}>
                  <Input
                    name="email"
                    w={{ sm: '12rem', md: '18rem', lg: '28.125rem' }}
                    placeholder="이메일을 입력해주세요"
                    sx={signStyle.inputStyle}
                    _focusVisible={{ borderColor: 'black' }}
                    _hover={{ borderColor: 'black' }}
                    autoComplete="off"
                  />
                </Box>
              </Box>
              <Box sx={signStyle.groupStyle}>
                <Text sx={signStyle.TextStyle}>Password</Text>
                <Box sx={signStyle.inputGroupStyle}>
                  <InputGroup w={{ sm: '12rem', md: '18rem', lg: '28.125rem' }}>
                    <Input
                      name="password"
                      w={{ sm: '12rem', md: '18rem', lg: '28.125rem' }}
                      placeholder="비밀번호를 입력해주세요"
                      sx={signStyle.inputStyle}
                      type={showPW ? 'text' : 'password'}
                      _focusVisible={{ borderColor: 'black' }}
                      _hover={{ borderColor: 'black' }}
                    />
                    <Icon
                      w={{ sm: '20px', md: '25px', lg: '30px' }}
                      h={{ sm: '20px', md: '25px', lg: '30px' }}
                      mt="12px"
                      as={showPW ? ViewIcon : ViewOffIcon}
                      onClick={() => {
                        setShowPW(!showPW);
                      }}
                    />
                  </InputGroup>
                </Box>
              </Box>
            </FormControl>
            <Button
              _hover={{ backgroundColor: '#3182CE', opacity: '0.8' }}
              mb="1.25rem"
              type="submit"
              id="submit"
              sx={signStyle.buttonColor}
            >
              Login
            </Button>
          </Box>
        </form>
      </CardBody>
    </Sign>
  );
}

export default Login;
