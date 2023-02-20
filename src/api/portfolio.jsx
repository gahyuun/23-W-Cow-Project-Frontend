import axios from 'axios';
import { getCookie } from '../helper/cookie';

const BoardApi = {
  async getBoardList() {
    const res = await axios.get('/api/portfolio/');
    return res.data.data;
  },
  async getMyBoardList() {
    console.log(getCookie());
    const res = await axios.get('/api/my');
    return res.data;
  },
  async getBoard(id) {
    const res = await axios.get(`/api/portfolio/${id}`);
    return res.data.data;
  },
  async deleteBoard(id) {
    const res = await axios.delete(`/api/portfolio/${id}`);
    return res;
  },
  async updateBoard(id, form) {
    const res = await axios.put(`/api/portfolio/${id}`, form);
    return res.data.data;
  },
  async uploadBoard(form) {
    const res = await axios.post('/api/portfolio/write', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res;
  },
};

export default BoardApi;
