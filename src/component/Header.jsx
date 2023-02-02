import { Box, Image, Text, Input, InputGroup } from '@chakra-ui/react';

import * as React from 'react';
import logo from '../img/LOGO.png';

function Header(isLogin) {
  return (
    <Box h="8.125rem" display="flex" justifyContent="space-around" alignItems="center">
      <Box border="1px solid black">
        <Image src={logo} alt="logo" />
      </Box>
      <Box>
        <InputGroup size="sm">
          <Input placeholder="검색" />
        </InputGroup>
      </Box>

      <Box>
        {isLogin ? (
          <Box display="flex" justifyContent="space-betwwen" alignItems="center">
            <Text>rr</Text>
          </Box>
        ) : (
          <Box>
            <Text>ru</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Header;
