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
  Flex,
  Textarea,
  Image,
  FormLabel,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { MultiSelect } from 'react-multi-select-component';
import { useLocation } from 'react-router';
import Swal from 'sweetalert2';
import { stacks } from '../helper/types';
import StackItem from '../component/StackItem';
import BoardApi from '../api/portfolio';
import imageIcon from '../img/BsImage.png';
import { signStyle } from '../helper/style.js';

function Write() {
  const { state } = useLocation();
  const buttonRef = React.useRef();
  const dateStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 5,
    fontSize: '16',
    alignItems: 'center',
  };

  const style = {
    fontSize: '16',
    border: '1px solid #ccc;',
  };
  const [formData, setFormData] = React.useState(
    state || {
      title: '',
      detail: '',
      summary: '',
      startDate: '',
      endDate: '',
    },
  );

  const navigate = useNavigate();
  const [stack, setStack] = React.useState([]);
  const [file, setFile] = React.useState(null);
  const [imageUrl, setImageUrl] = React.useState(null);
  const data = new FormData();
  const techStack = [];
  const date = new Date();
  const today = `${date.getFullYear()}-${0}${
    date.getMonth() + 1
  }-${date.getDate()}`;

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

  const handleChange = (e) => {
    const newForm = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newForm);
  };

  async function fetchUploadBoard() {
    data.append('portfolioimg', file);
    stack.map((stackitem) => techStack.push(stackitem.value));

    const form = {
      ...formData,
      portfolioimg: file,
      techStack,
    };
    const res = await BoardApi.uploadBoard(form);

    res ? navigate('/my') : console.log(res);
  }
  const fetchUpdateBoard = async () => {
    const res = await BoardApi.updateBoard(state.id, formData);
    res ? navigate('/my') : console.log(res);
  };
  const onSubmit = async () => {
    buttonRef.current.disabled = true;
    state ? fetchUpdateBoard() : fetchUploadBoard();
  };

  const required =
    techStack === [''] ||
    file === '' ||
    formData.title === '' ||
    formData.detail === '' ||
    formData.summary === '' ||
    formData.startDate === '' ||
    formData.endDate === '';

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
                  {!state ? (
                    <Box>
                      <FormLabel htmlFor="imageinput">
                        <Box
                          width="350"
                          height="280"
                          display="flex"
                          justifyContent="center"
                        >
                          <Input
                            type="file"
                            id="imageinput"
                            name="file"
                            accept="image/*"
                            display="none"
                            onChange={handleFileChange}
                            objectFit="scale-down"
                          />
                          <Image m="auto" src={imageIcon} alt="image" />
                          {file && <Image src={imageUrl} alt="selected" />}
                        </Box>
                      </FormLabel>
                    </Box>
                  ) : (
                    <Image src={state.image} alt="selected" />
                  )}
                </Box>
              </Card>
            </Box>
            <GridItem colSpan={2} color="black">
              <Box ml="4" mt="6" w="480px">
                <Input
                  name="title"
                  size="lg"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="프로젝트 명을 입력해주세요(최대 20자)"
                  maxLength={20}
                  mb="5"
                  sx={style}
                  _focusVisible={{
                    border: '2px solid #4285f4',
                  }}
                />
                <Box sx={dateStyle}>
                  <Input
                    name="startDate"
                    type="date"
                    size="lg"
                    max={today}
                    value={formData.startDate}
                    onChange={handleChange}
                    sx={style}
                    _focusVisible={{ border: '2px solid #4285f4' }}
                  />
                  ~
                  <Input
                    name="endDate"
                    type="date"
                    size="lg"
                    min={formData.startDate}
                    max={today}
                    value={formData.endDate}
                    onChange={handleChange}
                    sx={style}
                    _focusVisible={{ border: '2px solid #4285f4' }}
                  />
                </Box>
                <Input
                  name="summary"
                  size="lg"
                  value={formData.summary}
                  onChange={handleChange}
                  placeholder="프로젝트 소개를 입력해주세요(최대 30자)"
                  maxLength={30}
                  mb="5"
                  sx={style}
                  _focusVisible={{ border: '2px solid #4285f4' }}
                />
                {state ? (
                  <Flex
                    pt="2"
                    fontSize="sm"
                    overflow="scroll"
                    wrap="wrap"
                    maxH="70px"
                  >
                    {state &&
                      state.techStack.map((stackitem) => (
                        <StackItem
                          key={`detial-key-${stackitem}`}
                          stack={stackitem}
                        />
                      ))}
                  </Flex>
                ) : (
                  <MultiSelect
                    value={stack}
                    options={options}
                    onChange={setStack}
                    mb="5"
                    selectSomeItems="선택"
                    overrideStrings={{
                      selectSomeItems: '스택을 입력해주세요.',
                    }}
                  />
                )}
              </Box>
            </GridItem>
            <GridItem colSpan={4}>
              <Box color="black">
                <Textarea
                  name="detail"
                  value={formData.detail}
                  onChange={handleChange}
                  w="850px"
                  h="350px"
                  mt="5"
                  mb="5"
                  p="5"
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
                  ref={buttonRef}
                  onClick={() => {
                    required
                      ? Swal.fire({
                          ...signStyle.swalFire,
                          html: '모든 항목을 입력해주세요.',
                        })
                      : onSubmit();
                  }}
                  colorScheme="blue"
                  variant="outline"
                >
                  {state ? `수정` : `등록`}
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
