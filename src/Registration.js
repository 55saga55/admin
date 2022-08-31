import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
// import RegistrationForm from './Reducer/AdminReducer';
import {Registration1} from "./Action"

export default function Registration() {

const dispatch = useDispatch();

const { username,
name,
email,
password,
passwordConfirmation,
role,
phone,
address,
companyName,
image
} =  useSelector(y=>y.RegistrationForm);

useEffect(()=>{
      
    const formData = new FormData();

       formData.append("username", username);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password)
        formData.append("passwordConfirmation", passwordConfirmation);
        formData.append("role", role);
        formData.append("phone", phone);
        formData.append("address", address)
        formData.append("companyName", companyName);
        formData.append("image", image);

    axios.post("http://localhost:8002/api/auth/register" , formData)
    .than(y=>{
        console.log(y)
    })

})

dispatch(Registration1())

  return (
    <div>
          <form >
                <div className='form-group col-md-4 '>
                    <label htmlFor="" className='my-2'>UserName:</label>
                    <input type="text" name='username' className='form-control' onChange={Registration1()} />
                </div>
                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>Name:</label>
                    <input type="text" name='name'  className='form-control'/>
                </div>
                <div className='form-group col-md-4' >
                    <label htmlFor="" className='my-2'>Email:</label>
                    <input type="text" name='email'   className='form-control'/>
                </div>

                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>Password</label>
                    <input type="text" name='password'  className='form-control'/>
                </div>
                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>ConfirmPassword:</label>
                    <input type="text" name='passwordConfirmation'  className='form-control'/>
                </div>

                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>UserRole:</label>
                    <select name='role'   className='form-control'>
                        <option value="admin" >admin</option>
                        <option value="user">user</option>
                        <option value="seller">seller</option>
                    </select>
                </div>
                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>Phone-No:</label>
                    <input type="text" name='phone'   className='form-control'/>
                </div>
                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>Address:</label>
                    <input type="text" name='address'  className='form-control'/>

                </div>
                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>CompanyName:</label>
                    <input type="text" name='companyName'  className='form-control'/>
                </div>

                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>Upload-Image:</label>
                    <input type="file" name="image"   className='form-control'/>
                </div>

                <div>
                    <input type="submit" value="save" className='btn btn-primary my-2 ' />
                </div>

            </form>

    </div>
  )
}
