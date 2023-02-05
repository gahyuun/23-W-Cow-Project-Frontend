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

  const options = ['javascript', 'java', 'express'];
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [stack, setStack] = React.useState('');
  const [showPW, setShowPW] = React.useState(false); // 비밀번호 보여주기 여부
  const [isSame, setIsSame] = React.useState(false); // 중복버튼 클릭 여부
  const [nameError, setNameError] = React.useState(''); // 닉네임 에러 text

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlepasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsSame(false);
    setNameError('');
  };

  const handleStackChange = (e) => {
    setStack(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPW(!showPW);
  };
  const handleIsSame = () => {
    setIsSame(true);
    // axios
    //   .post('/auth/nicknameSame , name')
    //   .then(
    //          setNameError('사용 가능한 닉네임입니다')
    //  )
    //   .catch(function (error) {
    //     setNameError('존재하는 닉네임입니다')
    //     setIsSame(false);
    //   });
    // 중복 확인
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
            borderRadius=" 10px"
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
          borderRadius="20px"
          boxShadow="10px 10px 30px #c2c2c2"
        >
          <Box w="xl" h="sm" display="flex" flexDirection="column" justifyContent="space-between">
            <Box w="xl" h="18.75rem" display="flex" flexDirection="column" justifyContent="space-around">
              <Box sx={groupStyle}>
                <Text sx={TextStyle}>Email</Text>
                <Input
                  type="email"
                  value={email}
                  w="450px"
                  onChange={handleEmailChange}
                  placeholder="이메일 입력 ex)abc@gmail.com"
                  sx={inputStyle}
                  _focusVisible={{ borderColor: 'black' }}
                  _hover={{ borderColor: 'black' }}
                />
              </Box>
              <Box sx={groupStyle}>
                <Text sx={TextStyle}>Password</Text>
                <InputGroup w="450px">
                  <Input
                    value={password}
                    onChange={handlepasswordChange}
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
              </Box>
              <FormControl sx={groupStyle}>
                <FormLabel sx={TextStyle}>NickName</FormLabel>
                <Box display="flex" flexDirection="column" alignItems="flex-end">
                  <Box w="450px" display="flex">
                    <Input
                      type="email"
                      value={name}
                      onChange={handleNameChange}
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
                    {nameError}
                  </FormHelperText>
                </Box>
              </FormControl>
              <Box sx={groupStyle}>
                <Text sx={TextStyle}>Stack</Text>

                <Select
                  value={stack}
                  onChange={handleStackChange}
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
              </Box>
            </Box>
            <Button _hover={{ backgroundColor: '#3182CE', opacity: '0.8' }} mb="20px" sx={buttonColor}>
              Join
            </Button>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}

export default Join;
