import React from 'react'

const View = () => {
    return (
        <div className='container mt-3'>
            <div>
                <h1 className='text-center'>Title</h1>
            </div>
            <div className='mx-2' style={{
                'height': "80vh",
                "display": "grid",
                "grid-template-areas": '."',
                "grid-template-rows": '100% 100%',
                "grid-gap": "10px",
                "padding": '10px 0',
            }}>
                <div className="left mx-auto border border-dark px-3 container-fluid h-100" style={{
                    'height': "100vh",
                    "display": "grid",
                    "grid-template-areas": '"."',
                    "grid-template-rows": '100% 100%',
                    "background-color": "#90EE90",
                    "grid-gap": "10px",
                    "padding": '10px 0',
                }}>

                    <iframe style={{ "width": "100%", "height": "100%" }} srcdoc={"<html><body bgcolor='white'>" + '' + "</body></html>"}></iframe></div>
            </div>
            <div className='d-flex justify-content-end my-2 px-5'>
                <button className="btn  btn-outline-primary me-2 btn-sm px-5" type="button">Edit Note</button>
                <button className="btn btn-outline-danger btn-sm px-5" type="button">Delete Note</button>


            </div>

        </div>

    )
}

export default View
