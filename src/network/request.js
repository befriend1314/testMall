import axios from "axios"
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  return instance(config)
}

//http://123.207.32.32:8000/home/multidata
// baseURL = "http://152.136.185.210:7878/api/m5" +recommend
// baseURL = "http://152.136.185.210:7878/api/m5" +home/data?type=pop&page=1
// type(sell/pop/new)和page(page从1开始)
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res);
// })