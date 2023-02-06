import * as React from 'react';
import {
  Select,
  Text,
  Box,
  Input,
  Button,
  Grid,
  GridItem,
  Card,
  FormControl,
  Textarea,
} from '@chakra-ui/react';
import axios from 'axios';
import { stacks } from '../helper/types';

function Write() {
  const [formData, setFormData] = React.useState({
    title: '',
    detail: '',
    summary: '',
    period: '',
    techstack: '',
  });

  const handleChange = (e) => {
    const newForm = {
      ...formData,
      [e.target.id]: e.target.value,
    };
    console.log(newForm);
    setFormData(newForm);
  };

  React.useEffect(() => {}, [formData]);
  const onSubmit = async () => {
    await axios
      .post('/', {
        formData,
      })
      .then((res) => {
        console.log(res);
        navigator('/mypage');
      })
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    <Box w="850px" m="auto" mb="5">
      <Box mt="10" mb="10">
        <Text fontSize="3xl" as="b">
          프로젝트를 작성해주세요.
        </Text>
      </Box>
      <Box w="850px">
        <FormControl onSubmit={onSubmit}>
          <Grid color="white" gap={1}>
            <Box>
              <Card borderRadius="15px" w="350px" h="300px">
                <Box colSpan={2} m="auto">
                  <Button w="55px">이미지</Button>
                </Box>
              </Card>
            </Box>
            <GridItem colSpan={2} color="black">
              <Box ml="4" mt="6" w="480px">
                <Input
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  mb="5"
                  placeholder="프로젝트 명을 입력해주세요."
                  size="lg"
                />
                <Input
                  id="period"
                  value={formData.period}
                  onChange={handleChange}
                  mb="5"
                  placeholder="프로젝트 기간을 입력해주세요. ex. 220503~220603"
                  size="lg"
                />
                <Input
                  id="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  mb="5"
                  placeholder="프로젝트 소개를 입력해주세요."
                  size="lg"
                />
                <Select
                  id="teckstack"
                  value={formData.techstack}
                  onChange={handleChange}
                  mb="5"
                  placeholder="스택을 입력해주세요."
                  size="lg"
                >
                  {stacks.map((stack) => (
                    <option key={stack} value={stack}>
                      {stack}
                    </option>
                  ))}
                </Select>
              </Box>
            </GridItem>
            <GridItem colSpan={4}>
              <Box color="black">
                <Textarea
                  id="detail"
                  value={formData.detail}
                  onChange={handleChange}
                  mt="5"
                  mb="5"
                  p="5"
                  h="350px"
                  w="850px"
                  resize="none"
                  placeholder="프로젝트 설명을 입력해주세요."
                />
              </Box>
              <Box w="350px" h="50px" m="auto">
                <Button
                  w="350px"
                  h="50px"
                  type="submit"
                  onClick={onSubmit}
                  colorScheme="blue"
                  variant="outline"
                >
                  등록
                </Button>
              </Box>
            </GridItem>
          </Grid>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Write;
