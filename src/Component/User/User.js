import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faLocationDot,faMars} from '@fortawesome/free-solid-svg-icons'
const User = (props) => {
   const {id,first_name,last_name ,email,gender,number,address,salary,bio,img }= props.user
   const salaryHandel = props.salaryHandel ;
    return (
        <div className="col-xl-4 user">

        <div className='user-content'>

         <div className="img-and-name d-flex align-items-center justify-content-center">
          <img className='image' src={img} alt="" />
          <h3>{first_name} {last_name}</h3>
         </div>
         <div className="all-details">
           
            <div className="gender  d-flex align-items-center">
            <FontAwesomeIcon className='icon' icon={faMars} />
            <h3 className='mb-0'>{gender}</h3>
            </div>

            <div className="email d-flex align-items-center ">
            <FontAwesomeIcon className='icon' icon={faEnvelope} />
            <h4> {email}</h4>
            </div>

            <div className="address  d-flex align-items-center">
            <FontAwesomeIcon className='icon' icon={faLocationDot} />
            <h5 className='mb-0'>{address}</h5>
            </div>
            
            <div className="btns">
            <button className='more mr-3'>More Info</button>
            <button className='salary' onClick={ () => salaryHandel(props.user)}>Salary</button>
            </div>
            
           </div>
        </div>

        </div>
        
    );
};

export default User;