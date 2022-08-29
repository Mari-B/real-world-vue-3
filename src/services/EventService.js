import axios from 'axios'
const apiClient = axios.create({
  //single axios instance for our app
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
  //base url for all calls to use
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    //authentication and configuration to communicate with server
  },
})
export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
}
