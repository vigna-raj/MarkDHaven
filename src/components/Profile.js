import React from 'react'

const Profile = () => {
    return (
        <>
            <div className="container mt-5 d-flex justify-content-center">
                <div className="card p-3">
                    <div className="d-flex align-items-center">
                        <div className="image">
                            <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" className="rounded" width="155" />
                        </div>
                        <div className="ml-3 w-100">
                            <h4 className="mb-0 mt-0">Name</h4>
                            <span>Email</span>
                            <div className="button mt-2 d-flex flex-row align-items-center">
                                <button className="btn btn-sm btn-outline-danger w-100  mx-2">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
