import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react';
import * as React from 'react';
import none from '../img/none.png';
import Stack from './Stack';

function Board() {
  const content = {
    title: '프로폴리오 Pro-Folio',
    image: '이미지 주소',
    period: '20200104 ~ 20201220',
    summary:
      '포트폴리오 저장소를 구현한 웹 사이트입니다. 혹시 엄청엄청 이 내용이 길어지면 어떻게 될까?',
    techstack: ['java', 'JavaScipt', 'AWS', 'Python', 'node'],
    detail: '2022년 12월 ~ 2023년 1월 까지 진행한 사이드 프로젝트',
  };

  return (
    <Box w="400px" h="430px" p="4" boxShadow="2xl" rounded="md">
      <Box h="200px" mb="5">
        <Image src={none} objectFit="fill" w="100%" h="100%" />
      </Box>
      <Heading size="md" textTransform="uppercase" noOfLines={1}>
        {content.title}
      </Heading>
      <Text pt="2" fontSize="s" mb="10">
        {content.summary}
      </Text>
      <Flex pt="2" fontSize="sm" maxH="70px" overflow="hidden" wrap="wrap">
        {content.techstack.map((stack) => (
          <Box key={`board-${stack}`}>
            <Stack stack={stack} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default Board;
