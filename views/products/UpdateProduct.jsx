import React, { useEffect, useState } from 'react'
import ProductServices from '../../services/ProductServices'

import {useParams} from "react-router-dom"


const UpdateProduct = () => {

 
    const [data,setData] = useState({})

    const {id} = useParams() 

    const handleChange = (e)=>{
        setData({
          ...data,
          [e.target.name]:e.target.value
        })
      }


      const onSubmitHandler = (e)=>{
        e.preventDefault()
    
        ProductServices.update(id,data).then(res=>{
          console.log("response=====>",res)
          setData(res.data.data)
          window.location='/getallproducts'
        }).catch(err=>{
          console.log(err)
        })
        
        
        }




// fetch the data from backend and collect it in res
useEffect(() => {
    ProductServices.getbyid(id).then(res=>{
    console.log(res)
    setData(res.data.data)
 }).catch(err=>{
    console.log(err)
 })
}, [])



  return (
    <div>
      <div class="page-content-wrap">
                
                <div class="row">
                    <div class="col-md-12">
                        
                        <form class="form-horizontal" onSubmit={onSubmitHandler} >
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><strong>update</strong>product</h3>
                                <ul class="panel-controls">
                                    <li><a href="!#" class="panel-remove"><span class="fa fa-times"></span></a></li>
                                </ul>
                            </div>
                            <div class="panel-body">
                                
                            </div>
                            <div class="panel-body">                                                                        
                                
                                <div class="form-group">
                                    <label class="col-md-3 col-xs-12 control-label">refProduct</label>
                                    <div class="col-md-6 col-xs-12">                                            
                                        <div class="input-group">
                                            <span class="input-group-addon"><span class="fa fa-pencil"></span></span>
                                            <input type="text" class="form-control" value={data.refProduct} name="refProduct" onChange={handleChange} />
                                        </div>                                            
                                       
                                    </div>
                                </div>


                                <div class="form-group">
                                    <label class="col-md-3 col-xs-12 control-label">description</label>
                                    <div class="col-md-6 col-xs-12">                                            
                                        <div class="input-group">
                                            <span class="input-group-addon"><span class="fa fa-pencil"></span></span>
                                            <input type="text" class="form-control"  value={data.description} name="description" onChange={handleChange}/>
                                        </div>                                            
                                        
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-3 col-xs-12 control-label">price</label>
                                    <div class="col-md-6 col-xs-12">                                            
                                        <div class="input-group">
                                            <span class="input-group-addon"><span class="fa fa-pencil"></span></span>
                                            <input type="text" class="form-control"  value={data.price} name="price" onChange={handleChange}/>
                                        </div>                                            
                                       
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-3 col-xs-12 control-label">stock</label>
                                    <div class="col-md-6 col-xs-12">                                            
                                        <div class="input-group">
                                            <span class="input-group-addon"><span class="fa fa-pencil"></span></span>
                                            <input type="text" class="form-control"  value={data.stock} name="stock" onChange={handleChange}/>
                                        </div>                                            
                                        
                                    </div>
                                </div>

                              
                              
                                
                               
                                
                                
                                
                                

                            </div>
                            <div class="panel-footer">
                                <button class="btn btn-default">Clear Form</button>                                    
                                <button class="btn btn-primary pull-right" type='submit'>Submit</button>
                            </div>
                        </div>
                        </form>
                        
                    </div>
                </div>                    
                
            </div>

    </div>
  )
}

export default UpdateProduct