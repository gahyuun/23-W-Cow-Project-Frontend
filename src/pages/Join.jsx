import { Box, Button, Card, CardBody, CardHeader, FormErrorMessage, Input, Text } from '@chakra-ui/react';
import * as React from 'react';

function Join() {
  const [emailInput, setEmailInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');
  //   const [nameInput, setNameInput] = React.useState('');
  //   const [stack, setStackInput] = React.useState('');
  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  return (
    <Box display="flex" justifyContent="center">
      <Card border="1px solid red" w="2xl" h="xl" mt="140px">
        {/* mt적용이안됨 */}

        <CardHeader w="2xl" h="6rem" display="flex" padding="0px">
          <Box
            border="1px solid #D9D9D9"
            borderRadius=" 10px"
            w="xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="xl" fontWeight="500">
              로그인
            </Text>
          </Box>
          <Box
            backgroundColor="#3182CE"
            w="xl"
            opacity="0.8"
            h="6rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
            blendMode="normal"
            borderRadius=" 10px"
          >
            <Text fontSize="xl" fontWeight="500" color="#fff">
              회원가입
            </Text>
          </Box>
        </CardHeader>
        <CardBody border="1px solid red" display="flex" justifyContent="center" alignItems="center">
          <Box
            border="1px solid green"
            w="xl"
            h="sm"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box
              border="1px solid blue"
              w="xl"
              h="18.75rem"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Text fontSize="xl" fontWeight="500" mr="10px">
                  Email
                </Text>
                <Input
                  type="email"
                  value={emailInput}
                  onChange={handleEmailChange}
                  placeholder="이메일 입력 ex)abc@gmail.com"
                  borderBottom="1px solid black"
                  w="450px"
                />
                <FormErrorMessage>Email is required.</FormErrorMessage>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Text fontSize="xl" fontWeight="500" mr="10px">
                  Password
                </Text>
                <Input
                  type="email"
                  value={passwordInput}
                  onChange={handlePasswordChange}
                  placeholder="영문 숫자 포함 7자 이상"
                  borderBottom="1px solid black"
                  w="450px"
                />
                <FormErrorMessage>Email is required.</FormErrorMessage>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Text fontSize="xl" fontWeight="500" mr="10px">
                  NickName
                </Text>
                <Input
                  type="email"
                  value={emailInput}
                  onChange={handleEmailChange}
                  placeholder="이메일 입력 ex)abc@gmail.com"
                  borderBottom="1px solid black"
                  w="450px"
                />
                <FormErrorMessage>Email is required.</FormErrorMessage>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Text fontSize="xl" fontWeight="500" mr="10px">
                  Stack
                </Text>
                <Input
                  type="email"
                  value={emailInput}
                  onChange={handleEmailChange}
                  placeholder="이메일 입력 ex)abc@gmail.com"
                  borderBottom="1px solid black"
                  w="450px"
                />
                <FormErrorMessage>Email is required.</FormErrorMessage>
              </Box>
            </Box>
            <Button mb="20px" backgroundColor="#3182CE" color="#ffff">
              Join
            </Button>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}

export default Join;
