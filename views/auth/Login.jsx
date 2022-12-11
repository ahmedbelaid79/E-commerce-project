import React, { useEffect, useState } from 'react'
import Authservices from '../../services/Authservices'
//import AxiosContext from '../../services/AxiosContext' // methode 2 


const Login = () => {
/*const initialValues = {email: "",password:""}
 const[data, setData]= useState(initialValues)  2END METHOD   */
const[data, setData]= useState({          
  email:"",
  password:"",
})
const [formErrors, setFormErrors] = useState({})
const [isSubmit, setIsSubmit] = useState(false)


const handleChange = (e) => {
  /* const {name , value} = e.target 
  setData'{ ...data,[name]:value } 2END METHOD */
    setData({
        ...data ,  //spread operator , previous state of data
        [e.target.name]:e.target.value 
    })
    }

const OnsubmitHundler=(e)=>{
    e.preventDefault()

    Authservices.login(data).then(res=>{
        setData(res.data.data)
        window.location='/profile'                                         // redirect to Home
        localStorage.setItem("user", JSON.stringify(res.data.data))       // save the information in the localstorage so we can use later
    }).catch(err=>{
        console.log(err)
        setFormErrors(validate(data,err))
        setIsSubmit(true)
    })
    
}
  
useEffect(() => {
  console.log(formErrors);
  if (Object.keys(formErrors).length === 0 && isSubmit) {
    console.log(data);
  }
}, [formErrors]);
const validate = (values,err) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
if(err.response.status === 406)
{
  errors.email = err.response.data.message
}
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if(err.response.status === 403)
  {
    errors.password = err.response.data.message
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  } else if (values.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters";
  }
  return errors;
};
  
  
  
  
  
  
  
    return (
    <div>

    <div className="login-container">
  <div className="login-box animated fadeInDown">
    <div className="login-logo" />
    <div className="login-body">
      <div className="login-title"><strong>Log In</strong> to your account</div>
      <form className="form-horizontal" onSubmit={OnsubmitHundler}>
        <div className="form-group">
          <div className="col-md-12">
            <input type="text" className="form-control" placeholder="E-mail" value={data.email} name='email' onChange={handleChange}  />
          </div>
          <div style={{color:'yellow'}}>
            <p>{formErrors.email}</p>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <input type="password" className="form-control" placeholder="Password" value={data.password} name='password' onChange={handleChange}  />
          </div>
          <div style={{color:'yellow'}}>
            <p>{formErrors.password}</p>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-6">
            <a href="!#" className="btn btn-link btn-block">Forgot your password?</a>
          </div>
          <div className="col-md-6">
            <button type="submit" className="btn btn-info btn-block">Log In</button> {/* type="submit" ++*/}
          </div>
        </div>
        <div className="login-or">OR</div>
        <div className="form-group">
          <div className="col-md-4">
            <button className="btn btn-info btn-block btn-twitter"><span className="fa fa-twitter" /> Twitter</button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-info btn-block btn-facebook"><span className="fa fa-facebook" /> Facebook</button>
          </div>
          <div className="col-md-4">                            
            <button className="btn btn-info btn-block btn-google"><span className="fa fa-google-plus" /> Google</button>
          </div>
        </div>
        <div className="login-subtitle">
          Don't have an account yet? <a href={"register"}>Create an account</a>
        </div>
      </form>
    </div>
    <div className="login-footer">
      <div className="pull-left">
        © 2022 AppName
      </div>
      <div className="pull-right">
        <a href="!#">About</a> |
        <a href="!#">Privacy</a> |
        <a href="!#">Contact Us</a>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Login