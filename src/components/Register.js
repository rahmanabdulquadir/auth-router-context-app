import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../contexts/UserContext';

const Register = () => {
  const [user, setUser] = useState('')
  const {createUser, googleSignIn} = useContext(authContext)
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
    .then(result => {
      const user = result.user
      form.reset()
    })
    .catch(err => console.error(err))
    console.log(name, email, password);
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(res => {
      const user = res.user
      console.log(user)
    })
    .catch(err => console.error(err))
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-4">Please Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to={'/login'} className="label-text-alt link link-hover">
                    Already have an account?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <button onClick={handleGoogleSignIn} className="btn btn-ghost mt-3">Sign In with Google</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;