import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react';
import * as React from 'react';
import axios from 'axios';
import none from '../img/none.png';
import Stack from './Stack';
// import { editMode } from '../helper/types';



function Board({ edit }) {
  const content = {
    title: '프로폴리오 Pro-Folio',
    image: '이미지 주소',
    period: '20200104 ~ 20201220',
    summary:
      '포트폴리오 저장소를 구현한 웹 사이트입니다. 혹시 엄청엄청 이 내용이 길어지면 어떻게 될까?',
    techstack: ['java', 'JavaScipt', 'AWS', 'Python', 'node'],
    detail: '2022년 12월 ~ 2023년 1월 까지 진행한 사이드 프로젝트',
    id: 1,
  };

  const handleClickBtn= async () => {
    // 상태값으로 action 설정
    console.log(edit, content.id);
    await axios
    .get(`/api/portfolio/${content.id}`)
    .then(() => {
     console.log("성공")
    })
    .catch(() => {
      console.log("실패")
    });
    // 수정
    // 삭제
    // 상세페이지로 이동
	};

  return <Box w="450px"  h='450px' p={5} m={5} boxShadow='2xl' rounded='md' onClick={handleClickBtn}  _hover={{ fontWeight: 'semibold', boxShadow:'dark-lg' }}>
            <Box mb="5" display='flex' alignItems='center' justifyContent='center'>
                <Image src={none}  w='auto' h='auto' maxW='400px' maxH='200px' objectFit='contain'/>
            </Box>
                <Heading size='md' textTransform='uppercase' noOfLines={1}> {content.title} </Heading>
                <Text pt='2' fontSize='s' mb='10'> {content.summary} </Text>
                <Flex pt='2' fontSize='sm' maxH='70px' overflow='hidden' wrap='wrap'>{content.techstack.map((stack)=>
                           <Box key={`board-${stack}`}><Stack stack={stack}/></Box>)}</Flex>
          </Box>;
}
Board.defaultProps = {
  edit: false,
};

export default Board;
