import * as React from 'react';
import {
  Box,
  Flex,
  Text,
  StackDivider,
  VStack,
  Icon,
  Button,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import Information from '../component/Information';
import Board from '../component/Board';

function My() {
  const testarr=[1,2,3];
  return (
    <Box w="60%" m="auto" mt="20" mb="5">
      <Flex >
        <Information />
        <Box  maxW="80%">
          <Box ml="10">
            <VStack
              divider={<StackDivider border="solid 1px grey" />}
              spacing={4}
              w='fit-content'
              align="stretch"
            >
              <Box display="flex">
                <Text fontSize="4xl" as="b">
                  My Portfolio
                </Text>
                <Button mt="auto" ml="auto" colorScheme="black" variant="ghost">
                  <Icon w="7" h="7" ml="auto" as={EditIcon} />
                </Button>
                <Button mt="auto" colorScheme="black" variant="ghost">
                  <Icon w="7" h="7" as={DeleteIcon} />
                </Button>
              </Box>
              <Flex mx={3} justifyContent='space-around' wrap='wrap'>{testarr.map((index)=>
                    <Box my={5} key={`mypage__board-${index}`}><Board/></Box>)}
              </Flex>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default My;
