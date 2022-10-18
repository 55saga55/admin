import React, { useEffect , useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
// import axios from "axios"
// import RegistrationForm from './Reducer/AdminReducer';
// import {Registration1} from "./Action"
import {PostUserData} from "./Action/index"

export default function Registration() {

    const [data,setData] = useState({
        username : "",
        name : "",
        email : "",
        password: "",
        passwordConfirmation : "",
        role : "",
        phone : "",
        address : "",
        companyName : "",
        image : ""

    });

const dispatch = useDispatch();

const data1  =  useSelector(y=>y.admin);
console.log(data1)


useEffect(()=> {

    if(data1.isSucc)
    {

        toast("Save data");

    }   

},[data1])

const changSet = (e)=> {

    if(e.target.type === "file")
    setData({...data, [e.target.name] : e.target.files[0]});
    else
    setData({...data, [e.target.name] : e.target.value});
}
const  mySaveData = (e)=>{

    e.preventDefault();
    var formData = new FormData();
    formData.append("username",data.username);
    formData.append("name",data.name);
    formData.append("email",data.email);
    formData.append("password",data.password) 
    formData.append("passwordConfirmation",data.passwordConfirmation);
    formData.append("role",data.role) ;
    formData.append("phone",data.phone);
    formData.append("address",data.address)
    formData.append("companyName",data.companyName);
    formData.append("image",data.image);


    dispatch(PostUserData(formData))

    // toast(data.message)

    if(data1.isSucc)
    {

        toast("Save data");

    }   

}
  return (

    <div>
          
        <form  onSubmit={mySaveData}>
                <div className='form-group col-md-4 '>
                    <label htmlFor="" className='my-2'>UserName:</label>
                    <input type="text" name='username' className='form-control' onChange={changSet} />
                </div>
                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>Name:</label>
                    <input type="text" name='name'  className='form-control' onChange={changSet}/>
                </div>
                <div className='form-group col-md-4' >
                    <label htmlFor="" className='my-2'>Email:</label>
                    <input type="text" name='email'   className='form-control' onChange={changSet}/>
                </div>

                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>Password</label>
                    <input type="text" name='password'  className='form-control' onChange={changSet}/>
                </div>
                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>ConfirmPassword:</label>
                    <input type="text" name='passwordConfirmation'  className='form-control' onChange={changSet}/>
                </div>

                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>UserRole:</label>
                    <select name='role'   className='form-control' onChange={changSet}>
                        <option value="admin" >admin</option>
                        <option value="user">user</option>
                        <option value="seller">seller</option>
                    </select>
                </div>
                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>Phone-No:</label>
                    <input type="text" name='phone'   className='form-control' onChange={changSet}/>
                </div>
                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>Address:</label>
                    <input type="text" name='address'  className='form-control' onChange={changSet}/>

                </div>
                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>CompanyName:</label>
                    <input type="text" name='companyName'  className='form-control' onChange={changSet}/>
                </div>

                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>Upload-Image:</label>
                    <input type="file" name="image"   className='form-control' onChange={changSet}/>
                </div>

                <div>
                    <input type="submit"  onClick={mySaveData} value="save" className='btn btn-primary my-2 ' />
                </div>

            </form>

    </div>
  )
}
