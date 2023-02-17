 import axios from 'axios';
// 에러처리하기
const Authorization= localStorage.getItem('token');

const BoardApi = {
    async getBoardList ()  { 
            const res = await axios.get('/api/portfolio/');
            return res.data.data;
    },
    async getMyBoardList ()  { 
        const res = await axios.get('/api/my',{
            headers:{ Authorization }
        });
        return res.data.data;
    },
    async getBoard (id)  { 
        const res = await axios.get(`/api/portfolio/${id}`);
        return res.data.data;
    },
    async deleteBoard (id)  { 
        const res = await axios.delete(`/api/portfolio/${id}`,{
            headers:{ Authorization }
        });
        return res;
    },
    // async modifyBoard (id)  { 
    //     const res = await axios.put(`/api/portfolio/${id}`,{
    //         headers:{ Authorization }
    //     });
    //     return res;
    // },
};

  export default BoardApi;