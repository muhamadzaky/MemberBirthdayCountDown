import axios from 'axios'

export const api = axios.create({
  baseURL: "https://private-c56272-membercountdown.apiary-mock.com/info/",
  headers: {
    'Access-Control-Allow-Origin': "http://localhost:3000/",
    'Access-Control-Allow-Headers': "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    'Content-Type': 'application/json',
    'Accept': '*/*'
  }
})