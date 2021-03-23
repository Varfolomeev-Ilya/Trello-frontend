import axios from 'axios';

async function makeGetRequest () {
  let res = await axios.get('http://127.0.0.1:3000/home')
  let data = res.data;
  console.log(data);
};

export default makeGetRequest();

