import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import noteContext from '../context/notes/noteContext'
const Navbar = () => {
    const navigate = useNavigate();
    const { uname, umail } = useContext(noteContext);
    const logout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }
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
                    </div> : <>  <button type="button" className="btn btn-primary" data-bs-target="#exampleModal" data-bs-toggle="modal" >
                        <i className="fa-solid fa-user"></i>
                    </button>


                        <div className="modal fade" id="exampleModal" data-bs-theme="light" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Profile</h5>
                                        <button type="button" className="btn btn-sm btn-outline-danger" data-bs-dismiss="modal" aria-label="Close">X</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="container my-2 d-flex justify-content-center">
                                            <div className="card p-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="image">
                                                        <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" className="rounded" width="155" />
                                                    </div>
                                                    <div className="ml-3 w-100">
                                                        <h4 className="mb-0 mt-0">{uname}</h4>
                                                        <span>{umail}</span>
                                                        <div className="button mt-2 d-flex flex-row align-items-center">
                                                            <button className="btn btn-sm btn-outline-danger w-100  mx-2" data-bs-dismiss="modal" onClick={logout}>Logout</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
