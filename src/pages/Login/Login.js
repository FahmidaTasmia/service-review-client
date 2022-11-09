import React, { useContext, useEffect, useRef, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import Lottie from 'lottie-web';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {

    const [error, setError]=useState(' ');
    const{signIn}=useContext(AuthContext);
    const {providerLogin}=useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location =useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, {replace:true});
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
           
    }

    const handleGoogleSignIn=()=>{
      providerLogin(googleProvider)
      .then(result=>{
          const user = result.user;
          console.log(user);
      })
      .catch(error=>console.error(error));

  }


    const container =useRef(null);
    useEffect(()=>{
        const instance = Lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
          
            autoplay:true,
            animationData:require('./login.json')
        })
        return () => instance.destroy();
     
    },[])
    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">

            <div className="text-center lg:text-left"
            ref={container}
            >
            </div>

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:py-20 py-5">
                <h1 className="md:text-5xl text-2xl text-center font-bold text-blue-500">Login</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn  border-none bg-blue-500 hover:bg-blue-500" type="submit" value="Login" />
                    </div>
                </form>

                <div className='grid justify-items-stretch my-3' >
              <button onClick={handleGoogleSignIn} className='rounded-full btn justify-self-center border-none bg-blue-500 hover:bg-white hover:text-blue-500 '><FaGoogle></FaGoogle></button>
            </div>

                <p className='text-center'>New to <span className='text-blue-500 font-bold '>iDot</span> services ? Please <Link className='text-blue-500 font-bold ' to="/signup">Sign Up</Link> </p>
            </div>
        </div>
    </div> 
    );
};

export default Login;