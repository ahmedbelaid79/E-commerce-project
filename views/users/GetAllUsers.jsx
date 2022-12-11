import React, { useEffect, useState } from 'react'
import UserServices from '../../services/UserServices'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'


const GetAllUsers = () => {

const [users , setUsers] = useState([])

const getallusers = ()=>{
    UserServices.getall().then(res=>{
        console.log(res)
        setUsers(res.data.data)
    }).catch(err=>{
        console.log(err)
    })
}

useEffect(()=> {             // hook to get data from DB
    getallusers()
} , [])






/* const search = value =>{
  axios.get(UserServices.getbyname(value), {params: {
    firstname:value
  }}).then(res=>{
    console.log(res)
    setUsers(res.data.data)
})
} */

const search =value =>{       // we can do the search with react query 
  axios.get("http://localhost:4000/client/getbyname", {params: {
        firstname:value
  }}).then(res=>{
      console.log(res)
      setUsers(res.data.data)
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
      Swal.fire(
          UserServices.remove(id).then(res=>{
              console.log(res)
              getallusers()
          }).catch(err=>{
              console.log(err)
          })
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
        <h3 className="panel-title">Users tables</h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}>id</th>
                <th width={50}>firstname</th>
                <th width={50}>lastname</th>
                <th width={50}>email</th>
                <th width={50}>DelivAddress</th>
                <th width={50}>Actions</th>
              </tr>
            </thead>
            <tbody>                                            
                {users.map((item,index)=>{          //index (id of table , number of the row)
                return (
                <tr id="trow_1">
                <td className="text-center">{index}</td>
                <td><strong>{item.firstname}</strong></td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.DelivAddress}</td>
                <td>
                <Link to={`/updateuser/${item._id}`} >
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

export default GetAllUsers