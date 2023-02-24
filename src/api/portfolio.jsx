import axios from 'axios';

const BoardApi = {
  async getBoardList() {
    const {data} = await axios.get('/api/portfolio/');
    return data.data;
  },
  async getMyBoardList() {
    const  {data} = await axios.get('/api/my');
    return data;
  },
  async getStackBoardList(searchValue) {
    const {data} = await axios.get(`/api/search?searchWord=${searchValue}`);
    return data.data;
  },
  async getBoard(id) {
    const {data} = await axios.get(`/api/portfolio/${id}`);
    return data.data;
  },
  async deleteBoard(id) {
    const res = await axios.delete(`/api/portfolio/${id}`);
    return res;
  },
  async updateBoard(id, form) {
    const res = await axios.put(`/api/portfolio/${id}`, form);
    return res;
  },
  async uploadBoard(form) {
    const res = await axios.post('/api/portfolio/write', form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });
    return res;
  },
};

export default BoardApi;
