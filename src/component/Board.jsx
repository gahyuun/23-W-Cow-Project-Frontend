import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react';
import * as React from 'react';
// import Stack from './Stack';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { editMode, swalFire } from '../helper/types';
import BoardApi from '../api/portfolio';

function Board({ edit, setEdit, board }) {
  const navigate = useNavigate();
  // const [techStack, setTechStack] = React.useState([]);
  const getBoard = async (id) => {
    const res = await BoardApi.getBoard(id);
    navigate('/detail', { state: res });
  };

  const deleteBoard = (id) => {
    Swal.fire({
      ...swalFire,
      html: `해당 프로젝트를 삭제합니다.`,
    }).then(async () => {
      await BoardApi.deleteBoard(id);
      setEdit(editMode.unEdit);
    });
  };
  const modifyBoard = async (id) => {
    const res = await BoardApi.getBoard(id);
    navigate('/write', { state: res });
  };

  const handleClickBtn = () => {
    console.log(edit, board.id);
    edit
      ? edit === editMode.delete
        ? deleteBoard(board.id)
        : modifyBoard(board.id)
      : getBoard(board.id);
  };
  console.log(board.techStack);

  // React.useEffect(() => {
  //   setTechStack(JSON.parse(board.techStack));
  // }, []);
  // console.log(techStack);
  return (
    <Box
      w="450px"
      h="400px"
      p={5}
      m={5}
      boxShadow="2xl"
      rounded="md"
      style={{ cursor: 'pointer' }}
      onClick={handleClickBtn}
      _hover={{ fontWeight: 'semibold', boxShadow: 'dark-lg' }}
    >
      <Box mb="5" display="flex" alignItems="center" justifyContent="center">
        <Image
          src={board.image}
          w="auto"
          h="auto"
          maxW="400px"
          maxH="200px"
          objectFit="contain"
        />
      </Box>
      <Heading size="md" textTransform="uppercase" noOfLines={1}>
        {board.title}
      </Heading>
      <Text pt="2" fontSize="s" mb="10">
        {board.summary}
      </Text>
      {/* <Flex pt="2" fontSize="sm" maxH="70px" overflow="hidden" wrap="wrap">
        {board.techstack.map((stack) => (
          <Box key={`board-${stack}`}>
            <Stack stack={stack} />
          </Box>
        ))}
      </Flex> */}
      <Flex pt="2" fontSize="sm" maxH="70px" overflow="hidden" wrap="wrap">
        {board.techStack.map((stack) => (
          <Box>
            <div>{stack}</div>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
Board.defaultProps = {
  edit: false,
  setEdit: false,
  board: {
    title: '프로폴리오 Pro-Folio',
    image: '이미지 주소',
    period: '20200104 ~ 20201220',
    summary:
      '포트폴리오 저장소를 구현한 웹 사이트입니다. 혹시 엄청엄청 이 내용이 길어지면 어떻게 될까?',
    techstack: ['java', 'JavaScipt', 'AWS', 'Python', 'node'],
    detail: '2022년 12월 ~ 2023년 1월 까지 진행한 사이드 프로젝트',
    id: 6,
  },
};

export default Board;
