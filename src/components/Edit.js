import React from 'react'

const Edit = () => {
    return (
        <>
            <div className="container d-flex my-5">
                <div className="left mx-auto border border-dark px-3 container-fluid h-100">
                    <h1 className='text-center'>Edit</h1>
                    <textarea style={{ "min-width": "500px", "max-width": "100%", "min-height": "500px", "height": "100%", "width": "100%" }}></textarea>
                    <div className='d-flex justify-content-between my-2'>
                        <button className="btn btn-outline-danger " type="button">Revert</button>
                        <button className="btn  btn-outline-success me-2" type="button">Save</button>

                    </div>
                </div>
                <div className="mx-3 h-100"></div>
                <div className="left mx-auto border border-dark px-3 container-fluid h-100">
                    <h1 className='text-center'>Preview</h1>
                    <textarea disabled style={{ "min-width": "500px", "max-width": "100%", "min-height": "500px", "height": "100%", "width": "100%" }}></textarea>

                </div>

            </div>
        </>
    )
}

export default Edit