import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

import { marked } from 'marked';
import { useNavigate } from 'react-router-dom';
const Edit = (props) => {
    const { notes, addNote, updateNote } = useContext(noteContext);
    const cnote = notes.filter(cnote => cnote._id === props.id);
    const [desc, setDesc] = useState(cnote.length !== 0 ? cnote[0].description : "");
    const [tit, setTit] = useState(cnote.length !== 0 ? cnote[0].title : "");
    const [note, setNote] = useState(cnote.length !== 0 ? cnote[0].note : "");
    var [srcDoc, setSrcdoc] = useState(marked.parse(note))
    const navigate = useNavigate();
    const revert = () => {
        navigate("/home");
    }
    const save = () => {
        if (cnote.length === 0) {
            addNote(tit, desc, note);
        }
        else {
            updateNote(props.id, tit, desc, note);
        }
        navigate("/home");
    }
    return (
        <>
            <div className="container mb-5">
                <div class="form-group my-3">
                    <label className='mx-2'><b>Title</b></label>
                    <input type="text" class="form-control form-control-lg my-2" id="title" aria-describedby="emailHelp" placeholder="Enter Title " value={tit} onChange={() => { setTit(document.getElementById("title").value) }} />
                </div>
                <div class="form-group">
                    <label className='mx-2'><b>Description</b></label>
                    <input type="text" class="form-control form-control-lg my-2" id="desc" aria-describedby="emailHelp" placeholder="Enter Description" value={desc} onChange={() => { setDesc(document.getElementById("desc").value) }} />
                </div>
            </div>
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
                    "border-radius": "1rem"
                }}>
                    <textarea id="edit" className="px-2 py-2" style={{ "resize": "none", "border-radius": "1rem" }} onChange={() => {
                        setNote(document.getElementById("edit").value);
                        setSrcdoc(marked.parse(document.getElementById("edit").value));
                    }}>{note}</textarea></div>
                <div className="left mx-auto border border-dark px-3 container-fluid h-100" style={{
                    'height': "100vh",
                    "display": "grid",
                    "grid-template-areas": '"."',
                    "grid-template-rows": '100% 100%',
                    "background-color": "#90EE90",
                    "grid-gap": "10px",
                    "padding": '10px 0',
                    "border-radius": "1rem"
                }}>
                    <iframe style={{ "width": "100%", "height": "100%", "border-radius": "1rem" }} srcdoc={"<html><body bgcolor='white'>" + srcDoc + "</body></html>"}></iframe></div>
            </div >
            <div className='d-flex justify-content-end px-5'>
                <button className="btn btn-outline-danger mx-3  btn-lg px-5" type="button" onClick={revert}>Revert</button>
                <button className="btn btn-outline-success me-3 btn-lg px-5" type="button" onClick={save}>Save</button>
            </div>
        </>
    )
}

export default Edit