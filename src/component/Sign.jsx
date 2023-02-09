import * as React from 'react';
import { Box, Card, CardHeader } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Sign({ children, page }) {
  const navigate = useNavigate();
  const notShowHeaderStyle = {
    borderRadius: ' md',
    w: 'xl',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #D9D9D9',
    fontSize: 'xl',
    fontWeight: '600',
  }; // 보여지는 컴포넌트가 아닌 헤더 스타일
  const showHeaderStyle = {
    w: 'xl',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3182CE',
    opacity: '0.6',
    h: '6rem',
    borderRadius: 'md',
    blendMode: 'normal',
    fontSize: 'xl',
    fontWeight: '600',
    color: '#fff',
  }; // 보여지는 컴포넌트의 헤더 스타일
  const hoverStyle = {
    boxShadow: '10px 10px 30px #c2c2c2',
  };
  return (
    <Box display="flex" justifyContent="center">
      <Card w="2xl" mt="120px" border="1px solid red">
        <CardHeader w="2xl" h="6rem" display="flex" padding="0px">
          <Box
            sx={page === 'login' ? showHeaderStyle : notShowHeaderStyle}
            onClick={() => {
              navigate('/login');
            }}
            _hover={hoverStyle}
          >
            로그인
          </Box>

          <Box
            sx={page === 'join' ? showHeaderStyle : notShowHeaderStyle}
            onClick={() => {
              navigate('/join');
            }}
            _hover={hoverStyle}
          >
            회원가입
          </Box>
        </CardHeader>
        {children}
      </Card>
    </Box>
  );
}

export default Sign;
