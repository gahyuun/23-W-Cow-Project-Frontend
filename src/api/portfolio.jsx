import axios from 'axios';
import { getCookie } from '../helper/cookie';

const BoardApi = {
  async getBoardList() {
    const res = await axios.get('/api/portfolio/');
    return res.data.data;
  },
  async getMyBoardList() {
    const res = await axios.get('/api/my',{headers:{
      Authorization:getCookie()
    }});
    return res.data;
  },
  async getStackBoardList(searchValue) {
    const res = await axios.get(`/api/search?searchWord=${searchValue}`,{headers:{
      Authorization:getCookie()
    }});
    return res.data.data;
  },
  async getBoard(id) {
    const res = await axios.get(`/api/portfolio/${id}`);
    return res.data.data;
  },
  async deleteBoard(id) {
    const res = await axios.delete(`/api/portfolio/${id}`,{headers:{
      Authorization:getCookie()
    }});
    return res;
  },
  async updateBoard(id, form) {
    const res = await axios.put(`/api/portfolio/${id}`, form,{headers:{
      Authorization:getCookie()
    }});
    return res;
  },
  async uploadBoard(form) {
    const res = await axios.post('/api/portfolio/write', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization:getCookie()
      },
    });
    return res;
  },
};

export default BoardApi;
