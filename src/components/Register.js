import React from 'react'

const Register = () => {
    return (
        <section class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card  bg-light" style={{ "border-radius": "1rem" }}>
                            <div class="card-body p-5 text-center">

                                <div class=" mt-md-2 pb-5">

                                    <h2 class="fw-bold mb-2 text-uppercase">Register</h2>

                                    <div class="form-outline form-white mb-4 mt-4">
                                        <input type="text" id="typenameX" class="form-control form-control-lg" placeholder='Name' />
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder='Email' />
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder='Password' />
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordconfirm" class="form-control form-control-lg" placeholder='Re-type Password' />
                                    </div>


                                    <button class="btn btn-outline-dark btn-lg px-5" type="submit">Register</button>


                                </div>

                                <div>
                                    <p class="mb-0">Already have an account? <a href="#!" class=" fw-bold">Login</a>
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
