import axios from 'axios';
// 에러처리하기

const BoardApi = {
  async getBoardList() {
    const res = await axios.get('/api/portfolio/');
    return res.data.data;
  },
  async getMyBoardList() {
    const Authorization = localStorage.getItem('token');
    const res = await axios.get('/api/my', {
      headers: { Authorization },
    });
    return res.data.data;
  },
  async getBoard(id) {
    const res = await axios.get(`/api/portfolio/${id}`);
    return res.data.data;
  },
  async deleteBoard(id) {
    const Authorization = localStorage.getItem('token');
    const res = await axios.delete(`/api/portfolio/${id}`, {
      headers: { Authorization },
    });
    return res;
  },
  async updateBoard(id, form) {
    const Authorization = localStorage.getItem('token');
    const res = await axios.put(`/api/portfolio/${id}`, form, {
      headers: { Authorization },
    });
    return res.data.data;
  },
  async uploadBoard(form) {
    const Authorization = localStorage.getItem('token');
    const res = await axios.post('/api/portfolio/write', form, {
      headers: {
        Authorization,
        'Content-Type': 'multipart/form-data',
      },
    });
    return res;
  },
};

export default BoardApi;
