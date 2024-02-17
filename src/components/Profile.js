import React, { useState } from 'react'

const Profile = () => {
    const [showModal, setShowModal] = useState(true);
    return (
        <>  <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>
            Open Modal
        </button>

            {showModal && (
                <div className="modal fade show" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Profile</h5>
                                <button type="button" className="close" onClick={() => setShowModal(false)} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container mt-1 d-flex justify-content-center">
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <div className="image">
                                                <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" className="rounded" width="155" />
                                            </div>
                                            <div className="ml-3 w-100">
                                                <h4 className="mb-0 mt-0">Vignaraj G</h4>
                                                <span>vignaraj5000@gmail.com</span>
                                                <div className="button mt-2 d-flex flex-row align-items-center">
                                                    <button className="btn btn-sm btn-outline-danger w-100  mx-2">Logout</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default Profile
