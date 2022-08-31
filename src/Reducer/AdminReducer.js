
import {RegistrationData} from "../const/index"

const initialState = {
  
username: "",
name: "",
email: "",
password: "",
passwordConfirmation: "",
role: "",
phone: "",
address: "",
companyName: "",
image: ""

}

const RegistrationForm = (state = initialState, { type, payload }) => {
  switch (type) {

  case RegistrationData:
    return { ...state, ...payload }

  default:
    return state
  }
}

export default RegistrationForm;