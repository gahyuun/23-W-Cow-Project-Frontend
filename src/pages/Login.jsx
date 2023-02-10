import {
  Box,
  Button,
  CardBody,
  Input,
  Text,
  FormControl,
} from '@chakra-ui/react';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Sign from '../component/Sign.jsx';

function Login({ setIsLogin }) {
  const inputStyle = {
    borderBottom: '1px solid black',
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    borderRadius: '0px',
  };
  const buttonColor = {
    backgroundColor: '#3182CE',
    color: '#ffff',
  };

  const groupStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }; // text와 inputgroup을 감싸는 박스의 스타일
  const TextStyle = {
    fontSize: 'xl',
    fontWeight: '500',
    mr: '10px',
  }; // email, password등의 text 스타일

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  }; // input 그룹과 formhelpertext를 그룹으로 묶는 스타일
  const swalFire = {
    width: 400,
    height: 260,
    showConfirmButton: false,
    cancelButtonText: '확인',
    cancelButtonColor: '#CF5E53',
    showCancelButton: true,
    timer: 3000,
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginData = {
      email: data.get('email'),
      password: data.get('password'),
    };
    await axios
      .get(`/auth/login`, { loginData })
      .then((res) => {
        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        localStorage.setItem('token', res.data.token);
        axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
        // Bearer 기본적인 의미는 정보의 신호 전달을 네트워크 단에서 손실 없이 있는 그대로 전달하는 서비스를 말한다
        setIsLogin(true);
        Swal.fire({ ...swalFire, html: '로그인 성공' });
        navigate('/');
      })
      .catch((err) => {
        if (err.code === 409) {
          Swal.fire({
            ...swalFire,
            html: '등록되지 않은 이메일입니다',
          });
        }
        if (err.code === 401) {
          Swal.fire({
            ...swalFire,
            html: '잘못된 정보입니다',
          });
        }
      });
  }; // 로그인 submit 시 백엔드한테 post

  return (
    <Sign page="login">
      <CardBody
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="1.25rem"
        boxShadow="10px 10px 30px #c2c2c2"
      >
        <form onSubmit={handleSubmit}>
          <Box
            w="xl"
            h="sm"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <FormControl
              w="xl"
              h="15rem"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box sx={groupStyle}>
                <Text sx={TextStyle}>Email</Text>
                <Box sx={inputGroupStyle}>
                  <Input
                    name="email"
                    w="28.125rem"
                    placeholder="이메일을 입력해주세요"
                    sx={inputStyle}
                    _focusVisible={{ borderColor: 'black' }}
                    _hover={{ borderColor: 'black' }}
                  />
                </Box>
              </Box>
              <Box sx={groupStyle}>
                <Text sx={TextStyle}>Password</Text>
                <Box sx={inputGroupStyle}>
                  <Input
                    name="password"
                    w="28.125rem"
                    placeholder="비밀번호를 입력해주세요"
                    sx={inputStyle}
                    _focusVisible={{ borderColor: 'black' }}
                    _hover={{ borderColor: 'black' }}
                  />
                </Box>
              </Box>
            </FormControl>
            <Button
              _hover={{ backgroundColor: '#3182CE', opacity: '0.8' }}
              mb="1.25rem"
              type="submit"
              id="submit"
              sx={buttonColor}
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
