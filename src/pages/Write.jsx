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
  Icon,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
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
    border: '1px solid #ccc;',
    marginBottom: 5,
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
    <Box
      w={{ sm: '31.25rem', md: '46.875rem', lg: '53.125rem' }}
      m="auto"
      mb="5"
    >
      <Box my="10">
        <Text fontSize={{ sm: 'md', md: 'xl', lg: '3xl' }} as="b">
          프로젝트를 작성해주세요.
        </Text>
      </Box>
      <FormControl>
        <Grid color="white" gap={1}>
          <Box>
            <Card
              w={{ sm: '14rem', md: '18.75rem', lg: '21rem' }}
              h={{ sm: '14.75rem', md: '17.5rem', lg: '20rem' }}
              borderRadius="15px"
            >
              <Box m="auto">
                {!state ? (
                  <FormLabel htmlFor="imageinput" m="0">
                    <Box justifyContent="center" objectFit="contain">
                      <Input
                        id="imageinput"
                        name="file"
                        type="file"
                        accept="image/*"
                        display="none"
                        objectFit="scale-down"
                        onChange={handleFileChange}
                      />
                      {imageUrl ? (
                        <Icon
                          w={[3, 4, 5]}
                          h={[3, 4, 5]}
                          mr="2"
                          float="right"
                          cursor="pointer"
                          as={EditIcon}
                        />
                      ) : (
                        <Image cursor="pointer" src={imageIcon} alt="image" />
                      )}
                      {file && (
                        <Image
                          w={{ sm: '16rem', md: '18.75rem', lg: '21.25rem' }}
                          h={{ sm: '12rem', md: '15rem', lg: '17.5rem' }}
                          m="auto"
                          src={imageUrl}
                          alt="selected"
                          objectFit="scale-down"
                        />
                      )}
                    </Box>
                  </FormLabel>
                ) : (
                  <Box
                    w={{ sm: '16rem', md: '18.75rem', lg: '21.25rem' }}
                    h={{ sm: '12rem', md: '15rem', lg: '17.5rem' }}
                    display="flex"
                    justifyContent="center"
                    alignContent="center"
                    objectFit="scale-down"
                  >
                    <Image src={state.image} alt="selected" />
                  </Box>
                )}
              </Box>
            </Card>
          </Box>
          <GridItem m="auto" color="black">
            <Box
              ml={[1, 3, 4]}
              w={{ sm: '16rem', md: '26.675rem', lg: '30rem' }}
            >
              <Input
                name="title"
                sx={style}
                maxLength={20}
                fontSize={[10, 12, 16]}
                value={formData.title}
                onChange={handleChange}
                size={{ sm: 'sm', md: 'md', lg: 'lg' }}
                _focusVisible={{
                  border: '2px solid #4285f4',
                }}
                placeholder="프로젝트 명을 입력해주세요. (최대 20자)"
              />
              <Box sx={dateStyle}>
                <Input
                  type="date"
                  name="startDate"
                  max={today}
                  fontSize={[10, 13, 16]}
                  value={formData.startDate}
                  onChange={handleChange}
                  border="1px solid #ccc"
                  size={{ sm: 'sm', md: 'md', lg: 'lg' }}
                  _focusVisible={{ border: '2px solid #4285f4' }}
                />
                ~
                <Input
                  type="date"
                  name="endDate"
                  max={today}
                  min={formData.startDate}
                  fontSize={[10, 13, 16]}
                  value={formData.endDate}
                  onChange={handleChange}
                  border="1px solid #ccc"
                  size={{ sm: 'sm', md: 'md', lg: 'lg' }}
                  _focusVisible={{ border: '2px solid #4285f4' }}
                />
              </Box>
              <Input
                name="summary"
                sx={style}
                maxLength={30}
                fontSize={[10, 13, 16]}
                value={formData.summary}
                onChange={handleChange}
                size={{ sm: 'sm', md: 'md', lg: 'lg' }}
                _focusVisible={{ border: '2px solid #4285f4' }}
                placeholder="프로젝트 소개를 입력해주세요. (최대 30자)"
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
                w={{ sm: '31rem', md: '46.875rem', lg: '53.125rem' }}
                h={{ sm: '12rem', md: '18.75rem', lg: '21rem' }}
                name="detail"
                sx={style}
                mt="5"
                p="5"
                resize="none"
                value={formData.detail}
                onChange={handleChange}
                _focusVisible={{
                  border: '2px solid #4285f4',
                }}
                placeholder="프로젝트 설명을 입력해주세요."
              />
            </Box>
            <Box textAlign="center">
              <Button
                w={{ sm: '14rem', md: '18rem', lg: '21.875rem' }}
                h={{ sm: '2rem', md: '2.5rem', lg: '3.125rem' }}
                ref={buttonRef}
                colorScheme="blue"
                variant="outline"
                fontSize={['xs', 'sm', 'lg']}
                onClick={() => {
                  required
                    ? Swal.fire({
                        ...signStyle.swalFire,
                        html: '모든 항목을 입력해주세요.',
                      })
                    : onSubmit();
                }}
              >
                {state ? `수정` : `등록`}
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </FormControl>
    </Box>
  );
}

export default Write;
