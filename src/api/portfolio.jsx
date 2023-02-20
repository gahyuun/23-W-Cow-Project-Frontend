import axios from 'axios';
import { getCookie } from '../helper/cookie';

const Authorization= getCookie();
// 에러처리하기

const BoardApi = {
  async getBoardList() {
    const res = await axios.get('/api/portfolio/');
    return res.data.data;
  },
  async getMyBoardList() {
    const res = await axios.get('/api/my',{ headers:{ Authorization }});
    return res.data;
  },
  async getBoard(id) {
    const res = await axios.get(`/api/portfolio/${id}`);
    return res.data.data;
  },
  async deleteBoard(id) {
    const res = await axios.delete(`/api/portfolio/${id}`, { headers:{ Authorization }});
    return res;
  },
  async updateBoard(id, form) {
    const res = await axios.put(`/api/portfolio/${id}`,form,{headers:{Authorization}});
    return res.data.code;
  },
  async uploadBoard(form) {
    const res = await axios.post('/api/portfolio/write', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization,
      },
    });
  
    return res.data.code;
  },
};

export default BoardApi;
