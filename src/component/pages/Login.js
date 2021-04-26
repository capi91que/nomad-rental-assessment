import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

function Login({ setToken }) {
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = async e => {
	    e.preventDefault();
	    const token = await loginUser({
	      username,
	      password
	    });
	    setToken(token);
	  }

    return (
		<div className="container-fluid h-100 px-0">
			<div className="login-wrapper d-flex align-items-stretch">
				<div className="login-form-wrapper">
		            <div className="login-top">
		                <div className="bg-white p-3 p-md-5">
		                    <div className="login-logo mb-4">
		                        <img src={process.env.PUBLIC_URL + '/images/login-logo.svg'}  alt="Login Logo" width="70px" />
		                    </div>
		                    <h5 className="mb-4">Hi there!</h5>
		                    <p className="mb-4">Sign in to manage your listings and booking requests on Nomad Rental</p>
		                    <a href="#"><i className="fas fa-chevron-right"></i> Learn more about our premium subscription</a>
		                </div>
		                <div className="p-3 p-md-5">
		                    <form method="POST" onSubmit={handleSubmit}>
		                        <div className="mb-3">
		                            <label for="exampleInputEmail1" className="form-label font-weight-bold small">Email address</label>
		                            <input type="email" className="form-control rounded" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setUserName(e.target.value)} />
		                        </div>
		                        <div className="mb-3">
		                            <div className="row">
		                                <div className="col-5">
		                                    <label for="exampleInputPassword1" className="form-label small font-weight-bold">Password</label>
		                                </div>
		                                <div className="col-7 text-right">
		                                    <a href="#" className="small">Forgot your password?</a>
		                                </div>
		                            </div>
		                            <input type="password" className="form-control rounded" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} />
		                        </div>
		                        <button type="submit" className="btn btn-primary btn-block rounded">Submit</button>
		                    </form>
		                </div>
		            </div>
		            <div className="login-bottom text-center border-top small">
		                <div className="py-3 px-3 px-md-5">Don’t have an account? <a href="#">Sign up now</a></div>
		            </div>
		        </div>
		        <div className="landing-img-wrapper" style={{ backgroundImage: 'url("'+process.env.PUBLIC_URL + '/images/Mask-Group-4.jpg'+'")' }}></div>
			</div>
		</div>
    )
}

export default Login


Login.propTypes = {
  setToken: PropTypes.func.isRequired
}