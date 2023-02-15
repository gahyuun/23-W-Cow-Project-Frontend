import * as React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import Board from '../component/Board';

function Main( { title, list }) {
  const handleClickBtn= async () => {
    await axios
    .get(`/api/portfolio/`)
    .then((res) => {
     console.log(res)
    })
    .catch(() => {
      console.log("실패")
    });
	};
  return  <Box maxW='1500px' mx='auto' my='10'>
        <Text onClick={handleClickBtn}fontSize='4xl' as='b' mx='10px'> {title} 모아보기 </Text>
        <Flex  justifyContent="space-around" wrap="wrap">
        {list.map((index) => (
          <div  key={`mainpage__board-${index}`}>
            <Board />
          </div>
        ))}
  </Flex>
</Box>
}
Main.defaultProps = {
  title: '최신 프로젝트',
  list: [1,2,3]
};
export default Main;
