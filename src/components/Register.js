import React, { useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext'
import { Link } from 'react-router-dom'
const Register = () => {
    const { showAlert } = useContext(noteContext);
    const host = "http://localhost:5000"
    const name = useRef(null);
    const email = useRef(null);
    const pass = useRef(null);
    const navigate = useNavigate();
    const signup = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/auth/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: name.current.value, email: email.current.value, password: pass.current.value })

        });
        const jsondata = await response.json();
        console.log(jsondata);
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
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card  bg-light" style={{ "borderRadius": "1rem" }}>
                            <div className="card-body p-5 text-center">
                                <form onSubmit={signup}>
                                    <div className=" mt-md-2 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                                        <div className="form-outline form-white mb-4 mt-4">
                                            <input type="text" id="typenameX" className="form-control form-control-lg" placeholder='Name' ref={name} required minLength={5} />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder='Email' ref={email} required />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder='Password' ref={pass} required minLength={5} />
                                        </div>

                                        <button className="btn btn-outline-dark btn-lg px-5" type="submit">Register</button>
                                    </div>
                                </form>
                                <div>
                                    <p className="mb-0">Already have an account? <Link to="/login" className=" fw-bold">Login</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register
