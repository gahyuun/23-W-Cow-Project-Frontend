import * as React from 'react';
import { useNavigate } from 'react-router';
import { Flex, Box, Text } from '@chakra-ui/react';
// eslint-disable-next-line import/no-named-as-default
import Board from '../component/Board';

import BoardApi from '../api/portfolio';

function Main({ title }) {
  const navigate = useNavigate();
  const [list, setList] = React.useState([]);
  const fetchBoardList = async () => {
    const res = await BoardApi.getBoardList();
    res ? setList(res) : console.log(res);
  };
  React.useEffect(() => {
    fetchBoardList();
  }, [navigate]);

  return (
    <Box maxW="1500px" mx="auto" my="10">
      <Text fontSize="4xl" as="b" mx="10px">
        {title} 모아보기
      </Text>
      <Flex justifyContent="space-around" wrap="wrap">
        {list.map((board) => (
          <div key={`mainpage__board-${board.id}`}>
            <Board board={board} />
          </div>
        ))}
      </Flex>
    </Box>
  );
}
Main.defaultProps = {
  title: '최신 프로젝트',
  list: [1, 2, 3],
};
export default Main;
