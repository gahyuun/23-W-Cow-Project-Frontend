import * as React from 'react';
import { useNavigate, useLocation } from 'react-router';
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Button,
} from '@chakra-ui/react';
// eslint-disable-next-line import/no-named-as-default
import Board from '../component/Board';
import BoardApi from '../api/portfolio';
import { stackparser } from '../helper/parse';

function Main() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [list, setList] = React.useState([]);

  const fetchBoardList = async () => {
    const res = await BoardApi.getBoardList();
    res ? setList(res) : console.log(res);
  };
  const fetchStackBoardList = async () => {
    const res = await BoardApi.getStackBoardList(state);
    const parsedRes = stackparser(res);
    res ? setList(parsedRes) : console.log(res);
  };
  React.useEffect(() => {
    state ? fetchStackBoardList() : fetchBoardList();
  }, [state]);

  return (
    <Box maxW="1500px" mx="auto" my="10">
      <Flex mx="10">
        <Heading mb={4} flex="1" textAlign="left">
          {state ? `${state} 프로젝트 모아보기` : '최신 프로젝트'}
        </Heading>
        {state && (
          <Button
            size="lg"
            colorScheme="green"
            onClick={() => navigate('/', { state: false })}
          >
            최신 프로젝트 살펴보기
          </Button>
        )}
      </Flex>
      <Divider my={5} />
      <Grid
        templateColumns={{
          sm: 'repeat(1, 12fr)',
          md: 'repeat(2, 6fr)',
          lg: 'repeat(3, 4fr)',
        }}
      >
        {list.map((board) => (
          <GridItem key={`mainpage-board-${board.id}`}>
            <Board board={board} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default Main;
