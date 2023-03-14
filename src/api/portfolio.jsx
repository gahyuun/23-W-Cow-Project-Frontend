import axios from 'axios';

export const getBoardList = async () => {
  const { data } = await axios.get('/api/portfolio/');
  return data.data;
};
export const getMyBoardList = async () => {
  const { data } = await axios.get('/api/my');
  return data;
};
export const getStackBoardList = async (searchValue) => {
  const { data } = await axios.get(`/api/search?searchWord=${searchValue}`);
  return data.data;
};
export const getBoard = async (id) => {
  const { data } = await axios.get(`/api/portfolio/${id}`);
  return data.data;
};
export const deleteBoard = async (id) => {
  const res = await axios.delete(`/api/portfolio/${id}`);
  return res;
};
export const updateBoard = async (id, form) => {
  const res = await axios.put(`/api/portfolio/${id}`, form);
  return res;
};
export const uploadBoard = async (form) => {
  const res = await axios.post('/api/portfolio/write', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};
