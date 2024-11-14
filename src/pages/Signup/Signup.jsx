// import React, { useContext } from 'react';
// import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import img from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signup = () => {

    // Importing crateUser function from AuthContext in AuthProvider jsx file
    const {createUser} = useAuth();
    // const {createUser} = useContext(AuthContext);

    // Getting data from form input value
    const handleSignup = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = {name, email, password};
        console.log(newUser);

        // Creating New User
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="text-center lg:text-left w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignup} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                        <div className='mt-3 text-center'>
                            <p>Already have an account? <Link to='/login' className='text-yellow-400 underline'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;