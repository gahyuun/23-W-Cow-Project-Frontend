import * as React from 'react';
import {
  Text,
  Box,
  Grid,
  GridItem,
  Card,
  Image,
  CardHeader,
  Heading,
  CardBody,
  StackDivider,
  Stack,
} from '@chakra-ui/react';
 import { useLocation } from "react-router";
 import StackItem  from '../component/StackItem';

function Detail() {
  const { state } = useLocation();
 console.log(state)

  return (
    <Box w="850px" m="auto" mb="5" key={`detailpage-${state.id}`}>
      <Box my="10">
        <Text fontSize="3xl" as="b">
          {state.title}
        </Text>
      </Box>

      <Box w="850px">
        <Grid color="white" gap={1} templateColumns="repeat(4, 1fr)">
          <GridItem colSpan={1} w="350px" h="300px">
            <Image src={state.image} objectFit="fill" w="100%" h="100%" />
          </GridItem>
          <GridItem colSpan={3}>
            <Card>
              <CardHeader>
                <Heading size="md">{state.title}</Heading>
              </CardHeader>
              <CardBody>
                <Stack divider={<StackDivider />}>
                  <Box>
                    <Heading size="s" textTransform="uppercase">
                      period
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {state.startDate} ~ {state.endDate}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="s" textTransform="uppercase">
                      summary
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {state.summary}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="s" textTransform="uppercase">
                      techstack
                    </Heading>
                    <Box pt="2" fontSize="sm" display="flex">
                      {state &&
                        state.techStack.map((stack) => (
                          <StackItem key={`detial-key-${stack}`} stack={stack}/>
                        ))}
                    </Box>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem colSpan={4}>
            <Card
              borderRadius="15px"
              my="5"
              p="5"
              h="350px"
              w="850px"
              id="detail"
            >
              {state.detail}
            </Card>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default Detail;
