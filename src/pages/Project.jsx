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
  Stack,
  StackDivider
} from '@chakra-ui/react';
 import none from '../img/none.png';

function Project() {
  const stackStyle = {
    'margin-right': '0.2rem',
  }
  const content = {
    title: '프로폴리오 Pro-Folio',
    image: '이미지 주소',
    period: '20200104 ~ 20201220',
    summary: '포트폴리오 저장소를 구현한 웹 사이트입니다.',
    techstack: ['JAVA','javascript','sql','python'],
    detail: '2022년 12월 ~ 2023년 1월 까지 진행한 사이드 프로젝트',
  };

  return (
  <Box w="850px" m="auto" mb="5">
    <Box my="10">
      <Text fontSize="3xl" as="b">
        {content.title}
      </Text>
    </Box>

    <Box w="850px">
        <Grid color="white" gap={1} templateColumns='repeat(4, 1fr)'>
          <GridItem colSpan={1} w="350px" h="300px" >
                 <Image src={none} objectFit="fill" w="100%" h="100%" />
          </GridItem >
          <GridItem colSpan={3}>
              <Card>
                  <CardHeader >
                    <Heading size='md'>{content.title}</Heading>
                  </CardHeader>
                  <CardBody >
                    <Stack divider={<StackDivider />} >
                      <Box>
                        <Heading size='s' textTransform='uppercase'> period </Heading>
                        <Text pt='2' fontSize='sm'> {content.period} </Text>
                      </Box>
                      <Box>
                        <Heading size='s' textTransform='uppercase'> summary</Heading>
                        <Text pt='2' fontSize='sm'>{content.summary} </Text>
                      </Box>
                      <Box>
                        <Heading size='s' textTransform='uppercase' > techstack</Heading>
                        <Text pt='2' fontSize='sm' display="flex">{content.techstack.map((stack)=>
                            <div style={stackStyle}>{stack}</div>)}</Text>
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
                    id="detail">
                  {content.detail}  
                </Card>
          </GridItem>
        </Grid>
    </Box>
</Box>
);
}

export default Project;
