import axios from 'axios';

const service = axios.create('https://www.random.org/integers/?num=1&min=0&max=2&col=1&base=10&format=plain&rnd=new')

const errHandler = err => {
  console.error(err.response.data);
  throw err.response.data;
};

export default {
  getNumber() {
    return service.get('https://www.random.org/integers/?num=1&min=0&max=2&col=1&base=10&format=plain&rnd=new').then(res => res.data).catch(errHandler)
  }
}