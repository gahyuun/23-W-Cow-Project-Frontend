import * as React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import Board from '../component/Board';

function Main() {
  const testarr=[1,2,3];
  return  <Box maxW='1500px' mx='auto' my='10'>
        <Text fontSize='4xl' as='b' mx='10'> 최신 프로젝트 </Text>
        <Flex  justifyContent="space-around" wrap="wrap">
        {testarr.map((index) => (
          <div  key={`mainpage__board-${index}`}>
            <Board />
          </div>
        ))}
  </Flex>
</Box>
}

export default Main;
