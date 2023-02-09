import {
  Box,
  Button,
  CardBody,
  Input,
  Text,
  FormControl,
} from '@chakra-ui/react';
import * as React from 'react';

import Sign from '../component/Sign.jsx';

function Login() {
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

  return (
    <Sign page="join">
      <CardBody
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="1.25rem"
        boxShadow="10px 10px 30px #c2c2c2"
      >
        <form>
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
                    w="450px"
                    placeholder="이메일 입력 ex)abc@gmail.com"
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
                    name="email"
                    w="450px"
                    placeholder="이메일 입력 ex)abc@gmail.com"
                    sx={inputStyle}
                    _focusVisible={{ borderColor: 'black' }}
                    _hover={{ borderColor: 'black' }}
                  />
                </Box>
              </Box>
            </FormControl>
            <Button
              _hover={{ backgroundColor: '#3182CE', opacity: '0.8' }}
              mb="20px"
              type="submit"
              id="submit"
              sx={buttonColor}
            >
              Join
            </Button>
          </Box>
        </form>
      </CardBody>
    </Sign>
  );
}

export default Login;
