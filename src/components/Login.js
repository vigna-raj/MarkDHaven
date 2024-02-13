import React from 'react'

const Login = () => {
    return (
        <section className="vh-100   gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card  bg-light" style={{ "border-radius": "1rem" }}>
                            <div className="card-body p-5 text-center">
                                <div className=" mt-md-2 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <div className="form-outline form-white mb-4 mt-4">
                                        <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder='Enter Email here' />
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder='Enter Password here' />
                                    </div>
                                    <button className="btn btn-outline-dark btn-lg px-5" type="submit">Login</button>
                                </div>
                                <div>
                                    <p className="mb-0">Don't have an account? <a href="#!" className=" fw-bold">Sign Up</a></p>
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
