/* eslint-disable no-restricted-syntax */
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
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { MultiSelect } from 'react-multi-select-component';
import { useLocation } from "react-router";
import { stacks , swalFire } from '../helper/types';
import 'react-datepicker/dist/react-datepicker.css';



function Write() {
  const { state } = useLocation();
  const dateStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 5,
    fontSize: '16',
    alignItems: 'center',
  };


  const [formData, setFormData] = React.useState(state || {
    title: '',
    detail: '',
    summary: '',
    startDate: '',
    endDate: '',
  });
  const navigate = useNavigate();
  // const [stack, setStack] = React.useState([]);
  const [file, setFile] = React.useState(null);
  const [imageUrl, setImageUrl] = React.useState(null);
  // const temp = [];
  // const handleList = (e) => {
  //   console.log(stack);
  //   console.log(e);
  //   setStack(e.target.value);
  //   temp.push(stack.label);
  //   console.log(temp);
  // };
  // console.log(stack);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    const fileUrl = URL.createObjectURL(selectedFile);
    setImageUrl(fileUrl);
  };

  const options = [];
  // eslint-disable-next-line no-shadow
  Object.keys(stacks).map((stack) =>
    options.push({ label: stack, value: stack }),
  );

  // const isError =
  //   stack === [''] ||
  //   file === '' ||
  //   formData.title === '' ||
  //   formData.detail === '' ||
  //   formData.summary === '' ||
  //   startDate === '' ||
  //   endDate === '';

  const handleChange = (e) => {
    const newForm = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    console.log(newForm);
    setFormData(newForm);
  };
  // eslint-disable-next-line prefer-const
  let data = new FormData();
  const onSubmit = async () => {
    data.append('portfolioimg', file);
    // eslint-disable-next-line no-restricted-syntax
    // for (const key of data.keys()) {
    //   console.log(key);
    // }
    // // eslint-disable-next-line no-restricted-syntax
    // for (const value of data.values()) {
    //   console.log(value);
    // }
    // console.log(file);

    // if (isError) {
    //   Swal.fire({
    //     ...swalFire,
    //     html: '모든 항목을 입력해주세요!',
    //   });
    // }
    // eslint-disable-next-line guard-for-in
    const techStack = [];
    // eslint-disable-next-line guard-for-in
    // for (const i in stack) {
    //   console.log(stack[i].value);
    //   techStack.push(stack[i].value);
    // }
    // console.log(techStack);
    await axios
      .post(
        '/api/portfolio/write',
        {
          ...formData,
          portfolioimg: file,
          techStack,
        },
        {
          headers: {
            Authorization: localStorage.getItem('token'),
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      .then((res) => {
        console.log(res);
        navigate('/');
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
                  <Input
                    id="startDate"
                    name="startDate"
                    size="lg"
                    type="date"
                    fontSize="16"
                    value={formData.startDate}
                    // sx={inputDate}
                    onChange={handleChange}
                    border="1px solid #ccc;"
                    _focusVisible={{ border: '2px solid #4285f4' }}
                  />
                  ~
                  <Input
                    id="endDate"
                    name="endDate"
                    size="lg"
                    type="date"
                    fontSize="16"
                    value={formData.endDate}
                    // sx={inputDate}
                    onChange={handleChange}
                    border="1px solid #ccc;"
                    _focusVisible={{ border: '2px solid #4285f4' }}
                  />
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
                {/* <MultiSelect
                  value={stack}
                  options={options}
                  onChange={setStack}
                  mb="5"
                  selectSomeItems="선택"
                  overrideStrings={{
                    selectSomeItems: '스택을 입력해주세요.',
                  }}
                /> */}
              </Box>
            </GridItem>
            <GridItem colSpan={4}>
              <Box color="black">
                <Textarea
                  id="detail"
                  name="detail"
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
