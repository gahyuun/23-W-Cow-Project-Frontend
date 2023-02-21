import * as React from 'react';
import {
  Text,
  Card,
  Image,
  Heading,
  CardBody,
  Divider,
  Stack,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  Accordion,
  Box,
} from '@chakra-ui/react';
 import { useLocation } from 'react-router';
import StackItem from '../component/StackItem';

function Detail() {
   const { state } = useLocation();
   const arr =[];
   arr.push({title:'Stack', content:state.techStack.map((stack)=>(<StackItem stack={stack}/>))});
   arr.push({title:'Period', content: `${state.startDate} ~ ${state.endDate}`});
   arr.push({title:'Author', content:state.nickname})

  return (
    <Card w='850px' m='auto'>
    <CardBody >
        <Box display="flex" alignItems="center" justifyContent="center" w="800px" h="500px">
          <Image
                    src={state.image}
                    w="auto"
                    h="auth"
                    maxW="800px"
                    maxH="500px"
                    m="auto"
                  />
          </Box>
          <Stack mt='6' spacing='3'>
            <Heading size='lg'>{state.title}</Heading>
            <Text fontSize='xl'>{state.summary}</Text>
            <Text> {state.detail} </Text>
            <Box display="flex" flexFlow="row-reverse"> {state.date}  </Box>
          </Stack>
    </CardBody>
    <Divider />
    <Accordion defaultIndex={[0]} allowMultiple>
            {arr.map((item)=>(
              <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                        {item.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} display="flex" flexWrap="wrap" overflow="scroll">
                    {item.content}
              </AccordionPanel>
            </AccordionItem>
          
            ))}
    </Accordion>
  </Card>
  );
}

export default Detail;
