import * as React from 'react';
import { Select, Text, Box, Input, Textarea, Button, Flex, Center } from '@chakra-ui/react';

function Write() {
  const [title, setTitle] = React.useState('');
  const [detail, setDetail] = React.useState('');
  const [summary, setSummary] = React.useState('');
  const [date, setDate] = React.useState('');
  const [techstack, setTechstack] = React.useState([]);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDetail = (e) => {
    setDetail(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleSummary = (e) => {
    setSummary(e.target.value);
  };
  const handletechStack = (e) => {
    setTechstack(e.target.value);
  };

  // const onSubmit = async () => {
  //   await axios
  //     .post('/write', {
  //       title,
  //       detail,
  //       summary,
  //       stack,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       navigator('/');
  //     })
  //     .catch((e) => {
  //       console.error(e);
  //     });
  // };
  return (
    <Box w="850px" m="auto" mb="5">
      <Box mt="10" mb="20">
        <Text fontSize="3xl" as="b">
          프로젝트를 작성해주세요.
        </Text>
      </Box>
      <Box w="850px">
        <Flex color="white">
          <Center border="2px solid black" borderRadius="15px" w="350px">
            <Box>
              <Button w="55px">이미지</Button>
            </Box>
          </Center>
          <Box ml="5">
            <Input value={title} onChange={handleTitle} mb="5" placeholder="프로젝트 명을 입력해주세요." size="lg" />
            <Input
              value={date}
              onChange={handleDate}
              mb="5"
              placeholder="프로젝트 기간을 입력해주세요. ex. 220503~220603"
              size="lg"
            />
            <Input
              value={summary}
              onChange={handleSummary}
              mb="5"
              placeholder="프로젝트 소개를 입력해주세요."
              size="lg"
            />
            <Select value={techstack} onChange={handletechStack} mb="5" placeholder="스택을 입력해주세요." size="lg" />
            <Input
              value={detail}
              onChange={handleDetail}
              mb="5"
              placeholder="프로젝트 설명을 입력해주세요."
              size="lg"
            />
          </Box>
        </Flex>
      </Box>
      <Textarea mt="5" mb="5" h="250px" resize="none" placeholder="Here is a sample placeholder" />
      <Box display="flex">
        <Button w="350px" h="50px" m="auto" colorScheme="blue" variant="outline">
          등록
        </Button>
      </Box>
    </Box>
  );
}

export default Write;
