import ENDPOINTS from './endpints';
import { httpService } from './httpService';


const getTodolist = async () => {
  try {
    const response = await httpService.get(ENDPOINTS.GET_TODOLIST);
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const postTask = async (payload) => {
  try {
    const response = await httpService.post(ENDPOINTS.POST_TASK, payload);
    return response;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

const updateTask = async (payload, taskId) => {
    try {
      if(!taskId){
        throw new Error('missing id')
      }
      const response = await httpService.put(ENDPOINTS.UPDATE_TASK + taskId , payload);
      return response;
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  };

  const deleteTask = async (taskId) => {
    try {
      if(!taskId){
        throw new Error('missing id')
      }
      const response = await httpService.delete(ENDPOINTS.DELETE_TASK + taskId);
      return response;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };

export { getTodolist, postTask, updateTask, deleteTask };