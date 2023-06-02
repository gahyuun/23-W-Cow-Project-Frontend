import {
  Box,
  Button,
  CardBody,
  Input,
  Text,
  InputGroup,
  FormHelperText,
  FormControl,
  FormLabel,
  Icon,
} from '@chakra-ui/react';
import * as React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import Sign from '../component/Sign.jsx';
import { signStyle } from '../helper/style.js';
import { emailRegrex, passwordRegrex } from '../helper/types.js';

function Join() {
  // select에 들어갈 내용 예시
  const [nickname, setNickname] = React.useState('');
  const [showPW, setShowPW] = React.useState(false); // 비밀번호 보여주기 여부
  const [nicknameCheck, setNicknameCheck] = React.useState(false); // 중복버튼 클릭 여부
  const [nicknameError, setNicknameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const navigate = useNavigate();

  const handleNickNameChange = (e) => {
    setNickname(e.target.value);
    setNicknameCheck(false);
    setNicknameError('');
  }; // 닉네임이 바뀌면 다시 중복을 확인해야 하도록 변경하는 함수

  const handlenicknameCheck = async () => {
    if (nickname === '') {
      setNicknameError('닉네임을 입력해주세요');
      return;
    } // 닉네임 입력을 안했을 시
    await axios
      .get(`/auth/register/${nickname}`)
      .then(() => {
        setNicknameCheck(true);
        setNicknameError('사용가능한 닉네임입니다');
      })
      .catch(() => {
        setNicknameCheck(false);
        setNicknameError('존재하는 닉네임입니다');
      });
  }; // 닉네임 중복 확인

  const handlePost = async (joinData) => {
    await axios
      .post('/auth/register', joinData)
      .then(() => {
        Swal.fire({ ...signStyle.swalFire, html: '회원가입 성공' });
        navigate('/login');
      })
      .catch(() => {
        Swal.fire({
          ...signStyle.swalFire,
          html: '이미 사용중인 이메일입니다',
        });
      });
  }; // 백엔드 post 하는 함수

  const formValidate = (event) => {
    event.preventDefault();
    if (!nicknameCheck) {
      Swal.fire({
        ...signStyle.swalFire,
        html: '닉네임 중복을 먼저 확인해주세요',
      });
      return;
    } // 현재 닉네임으로 닉네임 체크 안한 경우

    const data = new FormData(event.currentTarget);
    const joinData = {
      email: data.get('email'),
      password: data.get('password'),
      nickname: data.get('nickname'),
    };

    !emailRegrex.test(joinData.email)
      ? setEmailError('이메일 형식이 올바르지 않습니다')
      : setEmailError('');

    !passwordRegrex.test(joinData.password)
      ? setPasswordError('영문 숫자포함 7자 이상의 비밀번호를 설정해주세요')
      : setPasswordError('');

    if (
      nicknameCheck &&
      emailRegrex.test(joinData.email) &&
      passwordRegrex.test(joinData.password)
    ) {
      handlePost(joinData);
    }
  };
  // 유효성 검사

  return (
    <Sign page="join">
      <CardBody sx={signStyle.cardBody}>
        <form onSubmit={formValidate}>
          <Box
            w={{ sm: '18rem', md: '20rem', lg: 'xl' }}
            h={{ sm: '18rem', md: '20rem', lg: 'sm' }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <FormControl
              w={{ sm: '18rem', md: '20rem', lg: 'xl' }}
              h="18.75rem"
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
                    placeholder="이메일 입력 ex)abc@gmail.com"
                    sx={signStyle.inputStyle}
                    _focusVisible={{ borderColor: 'black' }}
                    _hover={{ borderColor: 'black' }}
                  />
                  <FormHelperText sx={signStyle.FormHelperStyle}>
                    {emailError}
                  </FormHelperText>
                </Box>
              </Box>
              <Box sx={signStyle.groupStyle}>
                <Text sx={signStyle.TextStyle}>Password</Text>
                <Box sx={signStyle.inputGroupStyle}>
                  <InputGroup w={{ sm: '12rem', md: '18rem', lg: '28.125rem' }}>
                    <Input
                      name="password"
                      placeholder="영문 숫자 포함 7자 이상"
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
                  <FormHelperText sx={signStyle.FormHelperStyle}>
                    {passwordError}
                  </FormHelperText>
                </Box>
              </Box>
              <Box sx={signStyle.groupStyle}>
                <FormLabel sx={signStyle.TextStyle}>Nickname</FormLabel>
                <Box sx={signStyle.inputGroupStyle}>
                  <Box
                    w={{ sm: '12rem', md: '18rem', lg: '28.125rem' }}
                    display="flex"
                  >
                    <Input
                      value={nickname}
                      onChange={handleNickNameChange}
                      name="nickname"
                      placeholder="닉네임을 입력해주세요"
                      sx={signStyle.inputStyle}
                      _focusVisible={{ borderColor: 'black' }}
                      _hover={{ borderColor: 'black' }}
                    />
                    <Button
                      _hover={{ backgroundColor: '#3182CE', opacity: '0.8' }}
                      sx={signStyle.buttonColor}
                      fontWeight={{ sm: '200', md: '300', lg: '500' }}
                      onClick={handlenicknameCheck}
                      isDisabled={nicknameCheck}
                      w={{ sm: '0.7rem', md: '2rem', lg: '3.5rem' }}
                    >
                      중복
                    </Button>
                  </Box>
                  <FormHelperText
                    color={nicknameCheck ? '#0AA322' : '#ff0000'}
                    fontWeight={{ sm: '300', md: '500', lg: '500' }}
                    fontSize={{ sm: '0.2rem', md: '0.6rem', lg: '0.813rem' }}
                  >
                    {nicknameError}
                  </FormHelperText>
                </Box>
              </Box>
            </FormControl>
            <Button
              _hover={{ backgroundColor: '#3182CE', opacity: '0.8' }}
              mb="20px"
              type="submit"
              id="submit"
              sx={signStyle.buttonColor}
            >
              Join
            </Button>
          </Box>
        </form>
      </CardBody>
    </Sign>
  );
}

export default Join;
