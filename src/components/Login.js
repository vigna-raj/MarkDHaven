import React from 'react'

const Login = () => {
    return (
        <section class="vh-100   gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card  bg-light" style={{ "border-radius": "1rem" }}>
                            <div class="card-body p-5 text-center">

                                <div class=" mt-md-2 pb-5">

                                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>


                                    <div class="form-outline form-white mb-4 mt-4">
                                        <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder='Enter Email here' />
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder='Enter Password here' />
                                    </div>


                                    <button class="btn btn-outline-dark btn-lg px-5" type="submit">Login</button>


                                </div>

                                <div>
                                    <p class="mb-0">Don't have an account? <a href="#!" class=" fw-bold">Sign Up</a>
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

export default Login
