import React, { useState } from 'react'
import UserServices from '../../services/UserServices'
//import AxiosContext from '../../services/AxiosContext'


/*  METHOD 2
const register = () => {
    const OnsubmitHundler=(e)=>{
        UserServices.register(data)

        //axios.post ("http://localhost:4000/clients/create" ) methode 2
    } */

//setdata fct register the user data in data thanks to the hook useState //
const Register = () => {
  const[data, setData]= useState({          
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    DelivAddress:""
  })
  const[image, setImage]= useState("")

const handleChange = (e) => {
  setData({
    ...data ,  //spread operator , previous state of data
    [e.target.name]:e.target.value 
  })
}


const OnsubmitHundler=(e)=>{
  e.preventDefault()

const formdata= new FormData()

formdata.append("firstname",data.firstname)
formdata.append("lastname",data.lastname)
formdata.append("email",data.email)
formdata.append("password",data.password)
formdata.append("DelivAddress",data.DelivAddress)
formdata.append("photo",image)

UserServices.register(formdata).then(res=>{       //function of promess if the value corrspondes well ,it put the data in res , else its gives the err
  setData(res.data.data)                          // sometimes it doesnt work without this , he just display the data sent by the user without saving it , cuz axios got a data & the backend got data aswell
  console.log(res)
  window.location='/login'                        // we can add a flashdata  "Registration done !"
}).catch(err =>{ 
  console.log(err) 
})
}

const handleImage =(e) =>{
  setImage(e.target.files[0])
}





return (
  <div>
      <section className="vh-100" style={{backgroundColor: '#eee'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: 25}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                <form className="mx-1 mx-md-4" onSubmit={OnsubmitHundler} >
                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example1c">firstname</label>
                      <input type="text" id="form3Example1c" className="form-control" name='firstname' onChange={handleChange} />
                    </div> 
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4"> 
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example2c" >lastname</label>
                      <input type="text" id="form3Example3c" className="form-control" name='lastname' onChange={handleChange} />
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4"> 
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example3c" >email</label>
                      <input type="email" id="form3Example3c" className="form-control"  name='email' onChange={handleChange}/>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                      <input type="password" id="form3Example4c" className="form-control"  name='password' onChange={handleChange}/>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4cd" >image</label>
                      <input type="file" id="form3Example4cd" className="form-control" name='image'  onChange={handleImage}/>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4cd" >DelivAddress</label>
                      <input type="text" id="form3Example4cd" className="form-control" name='DelivAddress' onChange={handleChange}/>
                    </div>
                  </div>
                  
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Register