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
   arr.push({title:'Stack', content:state.techStack.map((stack)=>(<StackItem key={`detail-stack-${state.id}-${stack}`}stack={stack}/>))});
   arr.push({title:'Period',content: `${state.startDate} ~ ${state.endDate}`});
   arr.push({title:'Author', content:state.nickname})

  return (
    <Card w={{ sm: 'lg', md: '3xl', lg: '5xl' }} m='auto'>
    <CardBody >
        <Box display="flex" alignItems="center" justifyContent="center"w={{ sm: 'lg', md: '3xl', lg: '5xl' }}  h={{ sm: '300px', md: '400px', lg: '500px' }}>
          <Image
                    src={state.image}
                    w="auto"
                    h='auto'
                    maxW={{ sm: '400px', md: '600px', lg: '800px' }}
                    maxH={{ sm: '300px', md: '400px', lg: '500px' }}
                    objectFit="contain"
                  />
          </Box>
          <Stack mt='6' spacing='3'>
            <Heading fontSize={{ sm: 'lg', md: '2xl', lg: '4xl' }}>{state.title}</Heading>
            <Text fontSize={{ sm: 'md', md: 'lg', lg: 'xl' }} as='b'>{state.summary}</Text>
            <Text fontSize={{ sm: 'sm', md: 'md', lg: 'lg' }}> {state.detail} </Text>
            <Box display="flex" flexFlow="row-reverse"> {state.date}  </Box>
          </Stack>
    </CardBody>
    <Divider />
    <Accordion defaultIndex={[0]} allowMultiple>
            {arr.map((item)=>(
              <AccordionItem key={`detail-item-${state.id}-${item.title}`}>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'> {item.title}</Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} display="flex" flexWrap="wrap" overflow="scroll"> {item.content} </AccordionPanel>
            </AccordionItem>
            ))}
    </Accordion>
  </Card>
  );
}

export default Detail;
