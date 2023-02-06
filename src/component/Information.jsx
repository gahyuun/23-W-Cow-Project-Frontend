import * as React from 'react';
import {
  Box,
  Center,
  Stack,
  StackDivider,
  Text,
  Card,
  CardHeader,
  Heading,
  CardBody,
} from '@chakra-ui/react';

function Information() {
  return (
    <Box w="850px">
      <Center w="250px">
        <Card w="250px">
          <CardHeader>
            <Heading size="md">Information</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs">Email</Heading>
                <Text pt="2" fontSize="sm">
                  sebin0580@gmail.com
                </Text>
              </Box>
              <Box>
                <Heading size="xs">Nickname</Heading>
                <Text pt="2" fontSize="sm">
                  세빈공주
                </Text>
              </Box>
              <Box>
                <Heading size="xs">Stack</Heading>
                <Text pt="2" fontSize="sm">
                  JavaScript
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
}
export default Information;
