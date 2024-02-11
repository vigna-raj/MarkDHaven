import React from 'react'

const View = () => {
    return (
        <>
            <div className='container mt-5'><i class="fa-solid fa-arrow-left h-100"></i></div>
            <div className="container d-flex">

                <div className="left mx-auto border border-dark px-3 container-fluid h-100">
                    <h1 className='text-center'>Title</h1>
                    <textarea disabled style={{ "min-width": "500px", "max-width": "100%", "min-height": "500px", "height": "100%", "width": "100%" }}></textarea>
                    <div className='d-flex justify-content-between my-2'>
                        <button className="btn btn-outline-danger " type="button">Delete Note</button>
                        <button className="btn  btn-outline-primary me-2" type="button">Edit Note</button>

                    </div>
                </div>

            </div>
        </>
    )
}

export default View
