import axios from 'axios';
import { SERVER_URI } from '../Constants';

export default axios.create({
  baseURL: SERVER_URI
});