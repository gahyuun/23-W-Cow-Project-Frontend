import { Box} from '@chakra-ui/react';
import * as React from 'react';
import { stacks } from '../helper/types';

function StackItem({stack}) {
  return (
    <Box
      mx="2"
      my="1"
      px="4"
      rounded="md"
      bg={stacks[stack]}
      color={stacks[stack] === 'yellow' ? 'black' : 'white'}
    >
      {stack}
    </Box>
  );
}

export default StackItem;
