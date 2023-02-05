import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Text,
  Image,
  InputGroup,
  Select,
  FormHelperText,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import * as React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import hidepw from '../img/hidePW.png';
import showpw from '../img/showPW.png';

function Join() {
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
  const boxHeaderStyle = {
    borderRadius: ' 10px',
    w: 'xl',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }; // 로그인과 회원가입을 나타내는 스타일
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
  const FormHelperStyle = {
    fontWeight: '500',
    fontSize: '0.813rem',
    color: '#ff0000',
  };
  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  }; // input 그룹과 formhelpertext를 그룹으로 묶는 스타일

  const options = ['javascript', 'java', 'express'];
  const [nickname, setNickname] = React.useState('');
  const [showPW, setShowPW] = React.useState(false); // 비밀번호 보여주기 여부
  const [isSame, setIsSame] = React.useState(false); // 중복버튼 클릭 여부
  const [nicknameError, setNicknameError] = React.useState(''); // 닉네임 에러 text
  const [emailError, setEmailError] = React.useState(''); // 이메일 에러 text
  const [passwordError, setPasswordError] = React.useState(''); // 비밀번호 에러 text
  const [stackError, setStackError] = React.useState(''); // 스택 에러 text

  const handlenicknameChange = (e) => {
    setNickname(e.target.value);
    setIsSame(false);
    setNicknameError('');
  };

  const handleShowPassword = () => {
    setShowPW(!showPW);
  };
  const handleIsSame = async () => {
    if (nickname === '') {
      setNicknameError('닉네임을 입력해주세요');
    } // 닉네임 입력을 안했을 시
    else {
      setIsSame(true);
      await axios
        .get(`/auth/register/:${nickname}`)
        .then(() => {
          setNicknameError('사용 가능한 닉네임입니다');
        })
        .catch(() => {
          setNicknameError('존재하는 닉네임입니다');
          setIsSame(false);
        });
    }
  }; // 중복 확인

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSame) {
      const data = new FormData(event.currentTarget);
      const joinData = {
        email: data.get('email'),
        password: data.get('password'),
        stack: data.get('stack'),
      };
      const emailRegrex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      const passwordRegrex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{7,}$/;
      if (!emailRegrex.test(joinData.email)) setEmailError('이메일 형식이 올바르지 않습니다');
      else setEmailError('');
      if (!passwordRegrex.test(joinData.password)) setPasswordError('영문 숫자포함 7자 이상의 비밀번호를 설정해주세요');
      else setPasswordError('');
      if (joinData.stack === '') setStackError('스택을 선택해주세요');
      else setStackError('');
    } else {
      Swal.fire({
        width: 400,
        height: 260,
        html: '닉네임 중복을 먼저 확인해주세요',
        showConfirmButton: false,
        cancelButtonText: '확인',
        cancelButtonColor: '#CF5E53',
        showCancelButton: true,
        timer: 3000,
      });
    }
  };

  return (
    <Box display="flex" justifyContent="center">
      <Card w="2xl" h="xl" mt="120px">
        <CardHeader w="2xl" h="6rem" display="flex" padding="0px">
          <Box border="1px solid #D9D9D9" sx={boxHeaderStyle}>
            <Text fontSize="xl" fontWeight="600">
              로그인
            </Text>
          </Box>
          <Box
            backgroundColor="#3182CE"
            opacity="0.6"
            h="6rem"
            sx={boxHeaderStyle}
            borderRadius=" 0.625rem"
            blendMode="normal"
          >
            <Text fontSize="xl" fontWeight="600" color="#fff">
              회원가입
            </Text>
          </Box>
        </CardHeader>
        <CardBody
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="1.25rem"
          boxShadow="10px 10px 30px #c2c2c2"
        >
          <form onSubmit={handleSubmit}>
            <Box w="xl" h="sm" display="flex" flexDirection="column" justifyContent="space-between">
              <FormControl w="xl" h="18.75rem" display="flex" flexDirection="column" justifyContent="space-around">
                <Box sx={groupStyle}>
                  <Text sx={TextStyle}>Email</Text>
                  <Box sx={inputGroupStyle}>
                    <Input
                      id="email"
                      name="email"
                      w="450px"
                      placeholder="이메일 입력 ex)abc@gmail.com"
                      sx={inputStyle}
                      _focusVisible={{ borderColor: 'black' }}
                      _hover={{ borderColor: 'black' }}
                    />
                    <FormHelperText sx={FormHelperStyle}>{emailError}</FormHelperText>
                  </Box>
                </Box>
                <Box sx={groupStyle}>
                  <Text sx={TextStyle}>Password</Text>
                  <Box sx={inputGroupStyle}>
                    <InputGroup w="450px">
                      <Input
                        id="password"
                        name="password"
                        placeholder="영문 숫자 포함 7자 이상"
                        sx={inputStyle}
                        type={showPW ? 'text' : 'password'}
                        _focusVisible={{ borderColor: 'black' }}
                        _hover={{ borderColor: 'black' }}
                      />

                      <Image
                        src={showPW ? showpw : hidepw}
                        alt="눈"
                        onClick={handleShowPassword}
                        h="30px"
                        mt="12px"
                        w="30px"
                      />
                    </InputGroup>
                    <FormHelperText sx={FormHelperStyle}>{passwordError}</FormHelperText>
                  </Box>
                </Box>
                <Box sx={groupStyle}>
                  <FormLabel sx={TextStyle}>Nickname</FormLabel>
                  <Box sx={inputGroupStyle}>
                    <Box w="450px" display="flex">
                      <Input
                        value={nickname}
                        onChange={handlenicknameChange}
                        placeholder="닉네임을 입력해주세요"
                        sx={inputStyle}
                        _focusVisible={{ borderColor: 'black' }}
                        _hover={{ borderColor: 'black' }}
                      />
                      <Button
                        _hover={{ backgroundColor: '#3182CE', opacity: '0.8' }}
                        sx={buttonColor}
                        fontWeight="400"
                        onClick={handleIsSame}
                        isDisabled={isSame}
                      >
                        중복
                      </Button>
                    </Box>
                    <FormHelperText color={isSame ? '#0AA322' : '#ff0000'} fontWeight="500" fontSize="0.813rem">
                      {nicknameError}
                    </FormHelperText>
                  </Box>
                </Box>
                <Box sx={groupStyle}>
                  <Text sx={TextStyle}>Stack</Text>
                  <Box sx={inputGroupStyle}>
                    <Select
                      id="stack"
                      name="stack"
                      placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Stack"
                      variant="unstyled"
                      sx={inputStyle}
                      color="#718096"
                      w="450px"
                    >
                      {options.map((item) => (
                        <option key={item} value={item}>
                          &nbsp;&nbsp;&nbsp;&nbsp;{item}
                        </option>
                      ))}
                    </Select>
                    <FormHelperText sx={FormHelperStyle}>{stackError}</FormHelperText>
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
      </Card>
    </Box>
  );
}

export default Join;
