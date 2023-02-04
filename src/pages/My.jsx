import * as React from 'react';
import {
  Box,
  Flex,
  Center,
  Text,
  Card,
  CardHeader,
  Heading,
  CardBody,
  StackDivider,
  Stack,
  VStack,
  Icon,
  Button,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

function My() {
  return (
    <Box w="850px" m="auto" mt="20" mb="5">
      <Flex>
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
                    <Heading size="xs" textTransform="uppercase">
                      Nickname
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      세빈공주
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Stack
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      JavaScript
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </Center>
        </Box>
        <Box w="600px">
          <Box ml="10" w="600px">
            <VStack w="560px" divider={<StackDivider border="solid 1px grey" />} spacing={4} align="stretch">
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
