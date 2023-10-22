import React, { useContext } from 'react';
import LoginSvg from '../../assets/assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
const Signup = () => {
  const { createUser } = useContext(AuthContext)
  const handleRegister = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value

    createUser(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        form.reset()
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left relative">
          <img src={LoginSvg} alt="" />

        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-3xl font-bold text-center text-[#444]" >Signup!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#444]">Email</span>
              </label>
              <input type="text" placeholder="Your name" name='name' className="input input-bordered border-black bg-inherit" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#444]">Email</span>
              </label>
              <input type="email" placeholder="email" name='email' className="input input-bordered border-black bg-inherit" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#444]">Password</span>
              </label>
              <input type="password" placeholder="password" name='password' className="input input-bordered border-black bg-inherit" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-[#444]">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className='btn btn-error' value="Signup" />
            </div>
          </form>
          <p className='ml-8 mb-5'>Already have an account? <Link className='text-error' to="/Login">Login</Link></p>
        </div>
      </div >
    </div >
  );
};

export default Signup;