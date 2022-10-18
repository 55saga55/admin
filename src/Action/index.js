// import { RegistrationData } from "../const";
import axios from "axios"
import { POSTDATAREQUEST, POSTDATASUC, POSTDATAERROR} from "../const/index"
// export const  Registration1 = (payload) => ({
//   type: RegistrationData,
//   payload 
// })

export const PostUserData = (data)=> {

  
  return distpatch=> {

    distpatch({
      type : POSTDATAREQUEST,
      
    })
  

   
      axios.post("http://localhost:8002/api/auth/register",data).then(y=> {
          
          
       
          distpatch({
            type : POSTDATASUC,
            payload: y.data
          })
     
      }).catch(y=> {
          console.log(y);
          distpatch({
            type : POSTDATAERROR,
            payload: y.data
          })
      })

  }

}