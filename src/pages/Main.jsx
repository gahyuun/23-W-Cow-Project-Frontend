import * as React from 'react';
import { useNavigate } from 'react-router';
import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
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
      <Grid
        templateColumns={{
          sm: 'repeat(1, 12fr)',
          md: 'repeat(2, 6fr)',
          lg: 'repeat(3, 4fr)',
        }}
      >
        {list.map((board) => (
          <GridItem key={board.id}>
            <Board board={board} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
Main.defaultProps = {
  title: '최신 프로젝트',
  list: [1, 2, 3],
};
export default Main;
