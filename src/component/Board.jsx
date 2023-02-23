import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react';
import * as React from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { editMode, swalFire } from '../helper/types';
import BoardApi from '../api/portfolio';
import StackItem from './StackItem';

function Board({ edit, setEdit, board }) {
  const navigate = useNavigate();
  const getBoard = async (id) => {
    const res = await BoardApi.getBoard(id);
    navigate('/detail', { state: res });
  };

  const deleteBoard = (id) => {
    Swal.fire({
      ...swalFire,
      html: `해당 프로젝트를 삭제합니다.`,
    }).then(async (result) => {
      result.isConfirmed && (await BoardApi.deleteBoard(id));
      setEdit(editMode.unEdit);
    });
  };
  const modifyBoard = async (id) => {
    const res = await BoardApi.getBoard(id);
    navigate('/write', { state: res });
  };

  const handleClickBtn = () => {
    edit
      ? edit === editMode.delete
        ? deleteBoard(board.id)
        : modifyBoard(board.id)
      : getBoard(board.id);
  };

  return (
    <Box
      w={{ sm: '20rem', md: '23rem', lg: '26rem' }}
      h={{ sm: '22rem', md: '22.5rem', lg: '24rem' }}
      p={5}
      m={5}
      boxShadow="2xl"
      rounded="md"
      style={{ cursor: 'pointer' }}
      onClick={handleClickBtn}
      _hover={{ fontWeight: 'semibold', boxShadow: 'dark-lg' }}
    >
      <Box
        mb="5"
        display="flex"
        alignItems="center"
        justifyContent="center"
        w={{ sm: '300', md: '300', lg: '400' }}
        h={{ sm: '10rem', base: '200px' }}
      >
        <Image
          src={board.image}
          w="auto"
          h={{ sm: '10rem', base: '200px' }}
          maxW={{ sm: '17rem', base: '300px' }}
          objectFit="contain"
        />
      </Box>
      <Heading
        fontSize={{ sm: 's', md: 'md', lg: 'lg' }}
        textTransform="uppercase"
        noOfLines={1}
      >
        {board.title}
      </Heading>
      <Text
        pt="2"
        fontSize={{ sm: 'xs', md: 's', lg: 'md' }}
        mb={{ sm: '5', md: '10', lg: '10' }}
      >
        {board.summary}
      </Text>

      <Flex pt="2" fontSize="sm" maxH="70px" overflow="hidden" wrap="wrap">
        {board.techStack.map((stack) => (
          <StackItem key={`board-${board.id}-${stack}`} stack={stack} />
        ))}
      </Flex>
    </Box>
  );
}
Board.defaultProps = {
  edit: false,
  setEdit: false,
};

export default Board;
