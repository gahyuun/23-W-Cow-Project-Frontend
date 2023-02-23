import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

function WriteBoard() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/write');
  };
  return (
    <Box
    w={{ sm: '20rem', md: '23rem', lg: '26rem' }}
    h={{ sm: '22rem', md: '22.5rem', lg: '24rem' }}
      p={5}
      m={5}
      display="flex"
      justifyContent="center"
      boxShadow="2xl"
      rounded="md"
      style={{ cursor: 'pointer' }}
      _hover={{ fontWeight: 'semibold', boxShadow: 'dark-lg' }}
      onClick={onClick}
    >
      <AddIcon w={50} h={50} m="auto" />
    </Box>
  );
}
export default WriteBoard;
