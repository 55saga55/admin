
import {POSTDATAREQUEST,POSTDATASUC,POSTDATAERROR} from "../const/index"

const initialState = {
  isError : false,
  isSucc : false,
  Message : {},
  isLoadding: false
  

}

const admin = (state = initialState, { type, payload }) => {
switch (type) {

  
case POSTDATAREQUEST:
  return { ...state, isLoadding: true }

case POSTDATASUC :

return {...state, isLoadding : false ,isSucc : true,Message : payload};

case POSTDATAERROR : 

return {...state, isLoadding : false, isError: true, Message : payload}

default:
  return state
}
}
export default admin;
 