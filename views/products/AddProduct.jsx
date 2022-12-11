import React, { useEffect, useState } from 'react'
import ProductServices from '../../services/ProductServices'
import SubcategServices from '../../services/SubgategServices'

import AxiosContext from '../../services/AxiosContext'


/*  METHOD 2
const AddProduct = () => {
    const OnsubmitHundler=(e)=>{
        ProductServices.AddProduct(data)

        //axios.post ("http://localhost:4000/clients/create" ) methode 2
    } */

//setdata fct AddProduct the user data in data thanks to the hook useState //
const AddProduct = () => {
  const[data, setData]= useState({          
    refProduct:"",
    description:"",
    price:"",
    stock:""
  })
  const[image, setimage]= useState("")
  const[subcategs, setsubcateg] = useState([])



  const getAllSubcategs = ()=>{
    SubcategServices.getall().then(res =>{
      console.log(res)
      setsubcateg(res.data.data)                         
    }).catch(err =>{ 
      console.log(err) 
    })
  }

  useEffect(()=> {             // hook to get data from DB
    getAllSubcategs()
  },[])


  const handleChange = (e) => {
    setData({
      ...data ,  //spread operator , previous state of data
      [e.target.name]:e.target.value 
    })
  }

const OnsubmitHundler=(e)=>{
  e.preventDefault()

const formdata= new FormData()

formdata.append("refProduct",data.refProduct)
formdata.append("description",data.description)
formdata.append("price",data.price)
formdata.append("stock",data.stock)
formdata.append("subcateg",data.subcateg)
formdata.append("photo",image)

ProductServices.create(formdata).then(res=>{       //function of promess if the value corrspondes well ,it put the data in res , else its gives the err
  setData(res.data.data)                          // sometimes it doesnt work without this , he just display the data sent by the user without saving it , cuz axios got a data & the backend got data aswell
  console.log(res)
  window.location='/getallproducts'                        // we can add a flashdata  "Registration done !"
}).catch(err =>{ 
  console.log(err) 
})
}

const handleimage =(e) =>{
  setimage(e.target.files[0])
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
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Product</p>
                <form className="mx-1 mx-md-4" onSubmit={OnsubmitHundler} >
                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example1c">refProduct</label>
                      <input type="text" id="form3Example1c" className="form-control" name='refProduct' onChange={handleChange} />
                    </div> 
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4"> 
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example2c" >description</label>
                      <input type="text" id="form3Example3c" className="form-control" name='description' onChange={handleChange} />
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4"> 
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example3c" >price</label>
                      <input type="price" id="form3Example3c" className="form-control"  name='price' onChange={handleChange}/>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4c">stock</label>
                      <input type="stock" id="form3Example4c" className="form-control"  name='stock' onChange={handleChange}/>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4cd" >subcateg</label>
                      <select type="text" id="form3Example4cd" className="form-control" name='subcateg' onChange={handleChange}>
                      <option>Add Subcategory</option>
                      {subcategs.map((item)=>{
                        return(
                          <option key={item._id} value={item._id}>
                            {item.name}
                          </option>
                        )
                      })}
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4cd" >image</label>
                      <input type="file" id="form3Example4cd" className="form-control" name='image'  onChange={handleimage}/>
                    </div>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">AddProduct</button>
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

export default AddProduct