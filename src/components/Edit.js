import React, { useState } from 'react'
import { marked } from 'marked';
const Edit = () => {
    var [srcDoc, setSrcdoc] = useState("")
    return (
        <>
            <div style={{
                "display": "grid",
                "grid-template-areas": '". ."',
                "grid-template-rows": '100% 100%'
            }}><h1 className='text-center'>Edit</h1>
                <h1 className='text-center'>Preview</h1>
            </div>


            <div className='mx-2' style={{
                'height': "80vh",
                "display": "grid",
                "grid-template-areas": '". ."',
                "grid-template-rows": '100% 100%',
                "grid-gap": "10px",
                "padding": '10px 0',
            }}>
                <div className="left mx-auto border border-dark px-3 container-fluid h-100" style={{
                    'height': "100vh",
                    "display": "grid",
                    "grid-template-areas": '"."',
                    "grid-template-rows": '100% 100%',
                    "background-color": "#C5C5C5",
                    "grid-gap": "10px",
                    "padding": '10px 0',
                }}>
                    <textarea id="edit" class="px-2 py-2" style={{ "resize": "none" }} onChange={() => {
                        setSrcdoc(marked.parse(document.getElementById("edit").value));
                    }}></textarea></div>
                <div className="left mx-auto border border-dark px-3 container-fluid h-100" style={{
                    'height': "100vh",
                    "display": "grid",
                    "grid-template-areas": '"."',
                    "grid-template-rows": '100% 100%',
                    "background-color": "#90EE90",
                    "grid-gap": "10px",
                    "padding": '10px 0',
                }}>

                    <iframe style={{ "width": "100%", "height": "100%" }} srcdoc={"<html><body bgcolor='white'>" + srcDoc + "</body></html>"}></iframe></div>
            </div >
            <div className='d-flex justify-content-end px-5'>
                <button className="btn btn-outline-danger mx-3  btn-lg px-5" type="button">Revert</button>
                <button className="btn btn-outline-success me-3 btn-lg px-5" type="button">Save</button>
            </div>
        </>
    )
}

export default Edit