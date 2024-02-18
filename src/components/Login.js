import React, { useRef, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext'
const Login = () => {
    const { showAlert } = useContext(noteContext);
    const host = "http://localhost:5000"
    const email = useRef(null);
    const pass = useRef(null);
    const navigate = useNavigate();
    const login = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/auth/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email.current.value, password: pass.current.value })

        });
        const jsondata = await response.json();

        if (jsondata.errors) {
            showAlert(jsondata.errors, "danger")
        }
        else {
            localStorage.setItem("token", jsondata.token);
            navigate("/")
            showAlert("Login Sucsess", "success")
        }

    }
    return (
        <section className="vh-100   gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card  bg-light" style={{ "borderRadius": "1rem" }}>
                            <div className="card-body p-5 text-center">
                                <div className=" mt-md-2 pb-5">
                                    <form onSubmit={login}>
                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <div className="form-outline form-white mb-4 mt-4">
                                            <input type="email" id="Email" className="form-control form-control-lg" placeholder='Enter Email here' ref={email} required />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="password" id="Pass" className="form-control form-control-lg" placeholder='Enter Password here' ref={pass} required minLength={5} />
                                        </div>
                                        <button className="btn btn-outline-dark btn-lg px-5" type="submit" >Login</button>
                                    </form>
                                </div>
                                <div>
                                    <p className="mb-0">Don't have an account? <Link to="/register" className=" fw-bold">Sign Up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Login
