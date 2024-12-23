// import React, { useContext } from 'react';
// import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import img from '../../assets/images/login/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    // Importing signIn function from AuthContext in AuthProvider jsx file
    const {signIn} = useAuth();
    // const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    // Getting data from user signin form
    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // const user = {email, password};
        // console.log(user);

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser, "Successfully Logged In");
                //   navigate(location?.state ? location?.state : '/');
                // Get access token
                // const user = { email };
                axios.post('http://localhost:5000/jwt')
                .then(res => {
                    console.log(res.data);
                    if(res.data.success){
                        navigate(location?.state ? location?.state : '/');
                    }
                })

                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Logged In!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                
            })
            .catch(error => {
                console.error(error.message);
                Swal.fire({
                    title: 'Oppps!',
                    text: 'Email or Password Not Matched!',
                    icon: 'error',
                    confirmButtonText: 'Tray Again'
                  })
            });
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="text-center lg:text-left w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div className='mt-3 text-center'>
                            <p>Don't have an account? <Link to='/signup' className='text-yellow-400 underline'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;