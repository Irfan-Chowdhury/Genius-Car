import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);
    
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err));

    }
    return (
        <div className="container col-xl-10 col-xxl-8 px-4 py-5 bg-light">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <img src={login} alt="" />
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <form onSubmit={handleSignUp} className="p-4 p-md-5 border rounded-3 bg-light">
                        <h3 className='text-center mb-5'>Sign Up</h3>

                        <div className="form-floating mb-3">
                            <input type="text" name='name' className="form-control" id="floatingInput" placeholder="Your Name" />
                            <label htmlFor="floatingInput">Your Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" name='email' className="form-control" id="floatingInput" placeholder="Email" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">SIGN UP</button>
                        <hr className="my-4" />
                        <small className="text-muted">Already have an account ? Please <Link to='/login'>Login</Link></small>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;