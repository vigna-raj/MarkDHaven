import React from 'react'

const Register = () => {
    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card  bg-light" style={{ "border-radius": "1rem" }}>
                            <div className="card-body p-5 text-center">
                                <div className=" mt-md-2 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                                    <div className="form-outline form-white mb-4 mt-4">
                                        <input type="text" id="typenameX" className="form-control form-control-lg" placeholder='Name' />
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder='Email' />
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder='Password' />
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordconfirm" className="form-control form-control-lg" placeholder='Re-type Password' />
                                    </div>
                                    <button className="btn btn-outline-dark btn-lg px-5" type="submit">Register</button>
                                </div>
                                <div>
                                    <p className="mb-0">Already have an account? <a href="#!" className=" fw-bold">Login</a>
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
