import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import user from '../../userData/user.json';
import User from '../User/User';
const Users = () => {
    const user15 = user.slice(0,15)
    const salaryHandel = (salary) => {
        let sal =0;
        for(const i   =0 ; i < salary.length ; i++){
           const element =salary[i].salary;
           sal = sal + element ;
        }
        console.log(sal);
    }
    return (
        <div className="container-xl">
         <div className='row m-auto'>
            {
                user15.map(user => <User user={user}  salaryHandel={salaryHandel}></User>)
            }
        </div>
        </div>
       
    );
};

export default Users;