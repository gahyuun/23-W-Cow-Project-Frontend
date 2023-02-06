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

function My() {
  return (
    <Box w="850px" m="auto" mt="20" mb="5">
      <Flex>
        <Information />
        <Box w="600px">
          <Box ml="10" w="600px">
            <VStack
              w="560px"
              divider={<StackDivider border="solid 1px grey" />}
              spacing={4}
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
              <Box>프로젝트</Box>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default My;
