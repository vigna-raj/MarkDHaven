import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import { useNavigate } from 'react-router-dom';
import { marked } from 'marked';
const View = (props) => {
    const { notes, delNote } = useContext(noteContext);
    const cnote = notes.filter(cnote => cnote._id === props.id);
    const desc = cnote.length !== 0 ? marked.parse(cnote[0].note) : "";
    const tit = cnote.length !== 0 ? cnote[0].title : "Title";
    const navigate = useNavigate();
    const editNote = () => {
        navigate("/edit")
    }
    const deleteNote = () => {
        delNote(props.id);
        navigate("/home")
    }
    return (
        <div className='container mt-3' >
            <div>
                <h1 className='text-center'>{tit}</h1>
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
                    "border-radius": "1rem"
                }}>
                    <iframe style={{ "width": "100%", "height": "100%", "border-radius": "1rem" }} srcdoc={"<html><body bgcolor='white'>" + desc + "</body></html>"}></iframe></div>
            </div>
            <div className='d-flex justify-content-end my-2 px-5'>
                <button className="btn  btn-outline-primary me-2 btn-sm px-5" type="button" onClick={editNote}>Edit Note</button>
                <button className="btn btn-outline-danger btn-sm px-5" type="button" onClick={deleteNote}>Delete Note</button>
            </div>
        </div>
    )
}

export default View
