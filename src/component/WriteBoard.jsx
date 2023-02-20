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
      w="450px"
      h="420px"
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
