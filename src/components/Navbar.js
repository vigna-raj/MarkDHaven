import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand mx-10  "><span className="badge fs-5 bg-light text-dark rounded-pill">MarkDHaven</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/about" >About</Link>
                        </li></ul>
                    {!localStorage.getItem("token") ? <div>
                        <Link to="/Login" ><button className="btn btn-outline-success me-2" type="button">Login</button></Link>
                        <Link to="/register" ><button className="btn btn-outline-primary" type="button">Signup</button></Link>
                    </div> : <Link to="/lo" ><button className="btn btn-outline-primary" type="button">Signup</button></Link>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
