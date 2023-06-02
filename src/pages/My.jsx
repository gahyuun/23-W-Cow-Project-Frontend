/* eslint-disable import/no-named-as-default-member */
import * as React from 'react';
import {
  Box,
  Flex,
  Text,
  StackDivider,
  VStack,
  Icon,
  Button,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import Information from '../component/Information';
// eslint-disable-next-line import/no-named-as-default
import Board from '../component/Board';
import { editMode } from '../helper/types';
import WriteBoard from '../component/WriteBoard';
import BoardApi from '../api/portfolio';

function My() {
  const [edit, setEdit] = useState(editMode.unEdit);
  const [myList, setList] = useState([]);
  const [info, setInfo] = useState({});

  const fetchMyBoardList = async () => {
    const res = await BoardApi.getMyBoardList();
    res ? (setList(res.data), setInfo(res.userData)) : console.log(res);
  };

  useEffect(() => {
    fetchMyBoardList();
  }, [edit]);

  const style = edit
    ? {
        animation: 'shakingBoard 1s infinite',
        color: 'grey',
        backgroundColor: 'rgba(0, 0, 0, 0.01)',
      }
    : {};

  return (
    <Box width={['md', 'xl', '3xl', '5xl']} m="auto" mt="20" mb="5">
      <Flex>
        <Box display={{ base: 'none', xl: 'block' }}>
          <Information info={info} />
        </Box>
        <Box m="auto">
          <Box>
            <VStack
              divider={<StackDivider border="solid 1px grey" />}
              spacing={4}
              w={{ sm: 'md', md: '3xl', lg: '4xl' }}
              align="stretch"
            >
              <Box display="flex">
                <Text fontSize={{ sm: 'lg', md: '2xl', lg: '4xl' }} as="b">
                  My Portfolio
                </Text>
                {edit ? (
                  <Button
                    mt="auto"
                    ml="auto"
                    onClick={() => setEdit(editMode.unEdit)}
                  >
                    선택 취소
                  </Button>
                ) : (
                  <Box mt="auto" ml="auto">
                    <Button
                      colorScheme="black"
                      variant="ghost"
                      onClick={() => setEdit(editMode.modify)}
                    >
                      <Icon w="7" h="7" ml="auto" as={EditIcon} />
                    </Button>
                    <Button
                      colorScheme="black"
                      variant="ghost"
                      onClick={() => setEdit(editMode.delete)}
                    >
                      <Icon w="7" h="7" as={DeleteIcon} />
                    </Button>
                  </Box>
                )}
              </Box>

              <Grid
                templateColumns={{
                  lg: 'repeat(2, 1fr)',
                  md: 'repeat(2, 1fr)',
                  sm: 'repeat(1, 1fr)',
                }}
                m="auto"
              >
                {myList.map((list) => (
                  <GridItem style={style} key={`mypage__board-${list.id}`}>
                    <Board edit={edit} setEdit={setEdit} board={list} />
                  </GridItem>
                ))}
                {!edit && <WriteBoard />}
              </Grid>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default My;
