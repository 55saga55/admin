import axios from "axios";

const authFetchData = axios.create( {
baseURL : "http://localhost:4000"
     
})



  
authFetchData.interceptors.request.use(
    (request) => {

      var myToken = JSON.parse(localStorage.getItem("token"));
      request.headers.common['Accept'] = 'application/json';
      request.headers.common['Authorization'] = `bearer ${myToken}` 
      console.log('request sent');
      return request;
    },
    (error) => {
      //to handle or save data in cloud
      return Promise.reject(error);
    }
  );
  
  authFetchData.interceptors.response.use(
    (response) => {
      console.log('got response');
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 404) {
        // do something
        console.log('NOT FOUND');
      }
      if (error.response.status === 401) {
        // do something
        console.log('NOT FOUND');
      }
      return Promise.reject(error);
    }
  );
  

export default authFetchData;