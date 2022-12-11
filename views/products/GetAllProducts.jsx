import React, { useEffect, useState } from 'react'
import ProductServices from '../../services/ProductServices'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'


const GetAllProducts = () => {

const [Products , setProducts] = useState([])

const GetAllProducts = ()=>{
    ProductServices.getall().then(res=>{
        console.log(res)
        setProducts(res.data.data)
    }).catch(err=>{
        console.log(err)
    })
}

useEffect(()=> {            
    GetAllProducts()
} , [])






/* const search = value =>{
  axios.get(ProductServices.getbyname(value), {params: {
    refProduct:value
  }}).then(res=>{
    console.log(res)
    setProducts(res.data.data)
})
} */

const search =value =>{       // we can do the search with react query 
  axios.get("http://localhost:4000/products/getbyname", {params: {  // bad habit , better just use one file and declare the backend port on it
      refProduct:value
  }}).then(res=>{
      console.log(res)
      setProducts(res.data.data)
  })
}


const onDelete =(id) => {
  // using swal to add better and faster alert boxes
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      ProductServices.remove(id).then(res=>{
          console.log(res)
          GetAllProducts()
      }).catch(err=>{
          console.log(err)
      })
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
    )}

    })
}


return (
  <div>

<li className="xn-search">
    <form role="form">
      <input onChange={(e)=>search(e.target.value)} type="text" name="search" placeholder="Search..." /> 
    </form>
</li>  

<div className="row">
  <div className="col-md-12">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Products tables</h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}>id</th>
                <th width={50}>refProduct</th>
                <th width={50}>description</th>
                <th width={50}>price</th>
                <th width={50}>stock</th>
                <th width={50}>image</th>
                <th width={50}>Actions</th>
              </tr>
            </thead>
            <tbody>                                            
                {Products.map((item,index)=>{          //index (id of table , number of the row)
                return (
                <tr id="trow_1">
                <td className="text-center">{index}</td>
                <td><strong>{item.refProduct}</strong></td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td><img src={"http://localhost:4000/getImg/" + item.image } alt="" width={50} className="rounded-circle" /></td>
                <td>
                <Link to={`/updateproduct/${item._id}`} >
                <button class="btn btn-default btn-rounded btn-sm"><span class="fa fa-pencil"></span></button>
                </Link>
                <button class="btn btn-danger btn-rounded btn-sm" onClick={()=>onDelete(item._id)}><span class="fa fa-times"></span></button>
                </td>
              </tr>
                )
                })}
            </tbody>
          </table>
        </div>                                
      </div>
    </div>                                                
  </div>
</div>


    </div>
  )
}

export default GetAllProducts