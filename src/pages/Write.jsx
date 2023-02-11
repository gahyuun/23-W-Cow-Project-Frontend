import * as React from 'react';
import {
  Text,
  Box,
  Input,
  Button,
  Grid,
  GridItem,
  Card,
  FormControl,
  Textarea,
  Image,
  Stack,
} from '@chakra-ui/react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import Swal from 'sweetalert2';
import { MultiSelect } from 'react-multi-select-component';
import { ko } from 'date-fns/esm/locale';
import { stacks } from '../helper/types';
import image from '../img/BsImage.png';
import 'react-datepicker/dist/react-datepicker.css';

function Write() {
  const dateStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 5,
    fontSize: 'lg',
    alignItems: 'center',
  };
  const inputdate = {
    width: 200,
    height: 10,
    padding: 1.5,
    border: '1px solid #ccc',
    borderRadius: 4,
  };
  const swalFire = {
    width: 400,
    height: 260,
    showConfirmButton: false,
    cancelButtonText: '확인',
    cancelButtonColor: '#CF5E53',
    showCancelButton: true,
    timer: 3000,
  };
  const [formData, setFormData] = React.useState({
    title: '',
    detail: '',
    summary: '',
  });
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [techstack, setTechstack] = React.useState([]);
  const options = [];
  Object.keys(stacks).map((stack) =>
    options.push({ label: stack, value: stack }),
  );
  console.log(options);

  const isError =
    techstack === [] ||
    formData.title === '' ||
    formData.detail === '' ||
    formData.summary === '' ||
    startDate === '' ||
    endDate === '';
  const handleChange = (e) => {
    const newForm = {
      ...formData,
      [e.target.id]: e.target.value,
    };
    console.log(newForm);
    setFormData(newForm);
  };

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
      <Box my="10">
        <Text fontSize="3xl" as="b">
          프로젝트를 작성해주세요.
        </Text>
      </Box>
      <Box w="850px">
        <FormControl isRequired>
          <Grid color="white" gap={1}>
            <Box>
              <Card borderRadius="15px" w="350px" h="300px">
                <Box colSpan={2} m="auto">
                  <Button w="55px">
                    <Image src={image} alt="logo" />
                  </Button>
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
                  _focusVisible={{
                    border: '2px solid #4285f4',
                  }}
                />
                {/* <Input
                  id="period"
                  value={formData.period}
                  onChange={handleChange}
                  mb="5"
                  placeholder="프로젝트 기간을 입력해주세요. ex. 220503~220603"
                  size="lg"
                /> */}
                <Box sx={dateStyle}>
                  <Stack
                    sx={inputdate}
                    _hover={{
                      border: '2px solid #4285f4',
                    }}
                  >
                    <DatePicker
                      locale={ko}
                      dateFormat="yyyy/MM/dd"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      placeholderText="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;시작일"
                      customInput={
                        <FormControl
                          as="input"
                          rows={1}
                          style={{
                            width: '100px',
                            marginLeft: '40px',
                            outline: 'none',
                          }}
                        />
                      }
                    />
                  </Stack>
                  ~
                  <Stack
                    sx={inputdate}
                    _hover={{
                      border: '2px solid #4285f4',
                    }}
                  >
                    <DatePicker
                      dateFormat="yyyy/MM/dd"
                      locale={ko}
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      placeholderText="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;종료일"
                      customInput={
                        <FormControl
                          as="input"
                          rows={1}
                          style={{
                            width: '100px',
                            marginLeft: '40px',
                            outline: 'none',
                          }}
                        />
                      }
                    />
                  </Stack>
                </Box>
                <Input
                  id="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  mb="5"
                  maxLength="30"
                  placeholder="프로젝트 소개를 입력해주세요."
                  size="lg"
                  _focusVisible={{ border: '2px solid #4285f4' }}
                />
                <MultiSelect
                  value={techstack}
                  options={options}
                  onChange={setTechstack}
                  mb="5"
                  selectSomeItems="선택"
                  overrideStrings={{
                    selectSomeItems: '스택을 입력해주세요.',
                  }}
                />
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
                  _focusVisible={{
                    border: '2px solid #4285f4',
                  }}
                />
              </Box>
              <Box w="350px" h="50px" m="auto">
                <Button
                  w="350px"
                  h="50px"
                  type="submit"
                  onClick={() =>
                    isError
                      ? Swal.fire({
                          ...swalFire,
                          html: '모든 항목을 입력해주세요!',
                        })
                      : onSubmit
                  }
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
