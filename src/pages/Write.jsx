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
  Stack,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import Swal from 'sweetalert2';
import { MultiSelect } from 'react-multi-select-component';
import { ko } from 'date-fns/esm/locale';
import { stacks } from '../helper/types';
import 'react-datepicker/dist/react-datepicker.css';

function Write() {
  const dateStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 5,
    fontSize: '16',
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
    imageUrl: '',
    startDate: '',
    endDate: '',
  });

  const navigate = useNavigate();
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [techStack, setTechStack] = React.useState([]);
  const [file, setFile] = React.useState(null);
  const [imageUrl, setImageUrl] = React.useState(null);

  const handleList = (e) => {
    const temp = [];
    setTechStack(...setTechStack, e.target.value) // 중복배열 제거 
    techStack.map((stack) => temp.push(stack.label));
    console.log(temp);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    console.log(`시발1 :${file}`);
    const fileUrl = URL.createObjectURL(selectedFile);
    setImageUrl(fileUrl);
    console.log(`시발2 :${fileUrl}`);
  };

  const options = [];
  Object.keys(stacks).map((stack) =>
    options.push({ label: stack, value: stack }),
  );

  const isError =
    techStack === [''] ||
    imageUrl === '' ||
    formData.title === '' ||
    formData.detail === '' ||
    formData.summary === '' ||
    startDate === '' ||
    endDate === '';

  const handleChange = (e) => {
    const newForm = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    console.log(newForm);
    setFormData(newForm);
  };

  const onSubmit = async () => {
    if (isError) {
      Swal.fire({
        ...swalFire,
        html: '모든 항목을 입력해주세요!',
      });
    }
    await axios
      .post(
        '/api/portfolio/write',
        {
          ...formData,
          imageUrl,
          techStack,
          startDate,
          endDate,
        },
        {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        },
      )
      .then((res) => {
        console.log(res);
        navigate('/my');
      })
      .catch((err) => {
        if (err.code === 419) {
          Swal.fire({
            ...swalFire,
            html: '토큰이 만료되었습니다.',
          });
        }
        if (err.code === 500) {
          Swal.fire({
            ...swalFire,
            html: '포트폴리오 작성에 실패하였습니다.',
          });
        }
        console.log(err);
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
        <FormControl>
          <Grid color="white" gap={1}>
            <Box>
              <Card borderRadius="15px" w="350px" h="300px">
                <Box colSpan={2} m="auto">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept="image/*"
                    textDecoration="none"
                    style={{ color: 'white', borderBox: 'white' }}
                    required
                    onChange={handleFileChange}
                  />
                  {file && <img src={imageUrl} alt="selected" />}
                </Box>
              </Card>
            </Box>
            <GridItem colSpan={2} color="black">
              <Box ml="4" mt="6" w="480px">
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  mb="5"
                  placeholder="프로젝트 명을 입력해주세요."
                  size="lg"
                  maxLength={20}
                  fontSize="16"
                  border="1px solid #ccc;"
                  _focusVisible={{
                    border: '2px solid #4285f4',
                  }}
                />
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
                      name='start'
                      id='start'
                      startDate={startDate}
                      endDate={endDate}
                      placeholderText="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;시작일"
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
                      id='endDate'
                      name="endDate"
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      placeholderText="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;종료일"
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
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  mb="5"
                  maxLength={30}
                  placeholder="프로젝트 소개를 입력해주세요."
                  border="1px solid #ccc;"
                  size="lg"
                  fontSize="16"
                  _focusVisible={{ border: '2px solid #4285f4' }}
                />
                <MultiSelect
                  value={techStack}
                  options={options}
                  onChange={handleList}
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
                  name='detail'
                  value={formData.detail}
                  onChange={handleChange}
                  mt="5"
                  mb="5"
                  p="5"
                  h="350px"
                  w="850px"
                  border="1px solid #ccc;"
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
