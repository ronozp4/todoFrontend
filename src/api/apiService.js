// api/apiService.js
import ENDPOINTS from './endpints';
import { httpService } from './httpService';


const fetchData = async () => {
  try {
    const response = await httpService.get(ENDPOINTS.GET_TODOLIST);
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const postData = async (payload) => {
  try {
    const response = await httpService.post(ENDPOINTS.POST_DATA, payload);
    return response;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

export { fetchData, postData };