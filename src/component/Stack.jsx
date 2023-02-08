import { Box} from '@chakra-ui/react';
import * as React from 'react';
import PropTypes from 'prop-types';
import { stacks } from '../helper/types';

function Stack({stack}) {
  return  <Box  mx="2" my="1" px="4" rounded='md' bg={stacks[stack]} color={stacks[stack]==='yellow'?'black':'white'} >
    {stack}
  </Box>;
}
Stack.defaultProps = {
  stack: "java",
};
Stack.propTypes = {
  stack: PropTypes.string,
};

export default Stack;
