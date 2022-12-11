import React from 'react'
import profile from './profile.css'

const Profile = () => {


const user = JSON.parse(localStorage.getItem("user"))
console.log(user)








  return (
    <div>

<head>
<link href={profile}  rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin="anonymous"></script>
</head>


<div className="container mt-5">
  <div className="row d-flex justify-content-center">
    <div className="col-md-7">
      <div className="card p-3 py-4">
        <div className="text-center">
          <img src={"http://localhost:4000/getImg/" + user.image } alt="" width={200} className="rounded-circle" />
        </div>
        <div className="text-center mt-3">
          <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
          <h5 className="mt-2 mb-0">{user.firstname} {user.lastname}</h5>
          <span>UI/UX Designer</span>
          <div className="px-4 mt-1">
            <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          <ul className="social-list">
            <li><i className="fa fa-facebook" /></li>
            <li><i className="fa fa-dribbble" /></li>
            <li><i className="fa fa-instagram" /></li>
            <li><i className="fa fa-linkedin" /></li>
            <li><i className="fa fa-google" /></li>
          </ul>
          <div className="buttons">
            <button className="btn btn-outline-primary px-4">Message</button>
            <button className="btn btn-primary px-4 ms-3">Contact</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Profile