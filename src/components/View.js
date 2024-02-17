import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import { useNavigate } from 'react-router-dom';
import { marked } from 'marked';
const View = (props) => {
    const { notes, delNote, showAlert } = useContext(noteContext);
    const cnote = notes.filter(cnote => cnote._id === props.id);
    const desc = cnote.length !== 0 ? marked.parse(cnote[0].note) : "";
    const tit = cnote.length !== 0 ? cnote[0].title : "Title";
    const navigate = useNavigate();
    const editNote = () => {
        navigate("/edit")
    }
    const deleteNote = () => {
        delNote(props.id);
        navigate("/")
        showAlert("Note Deleted", "warning")
    }
    return (
        <div className='container mt-3' >
            <div>
                <h1 className='text-center'>{tit}</h1>
            </div>
            <div className='mx-2' style={{
                'height': "80vh",
                "display": "grid",
                "gridTemplateAreas": '."',
                "gridTemplateRows": '100% 100%',
                "gridGap": "10px",
                "padding": '10px 0',
            }}>
                <div className="left mx-auto border border-dark px-3 container-fluid h-100" style={{
                    'height': "100vh",
                    "display": "grid",
                    "gridTemplateAreas": '"."',
                    "gridTemplateRows": '100% 100%',
                    "backgroundColor": "#90EE90",
                    "gridGap": "10px",
                    "padding": '10px 0',
                    "borderRadius": "1rem"
                }}>
                    <iframe style={{ "width": "100%", "height": "100%", "borderRadius": "1rem" }} srcDoc={"<html><body bgcolor='white'>" + desc + "</body></html>"}></iframe></div>
            </div>
            <div className='d-flex justify-content-end my-2 px-5'>
                <button className="btn  btn-outline-primary me-2 btn-sm px-5" type="button" onClick={editNote}>Edit Note</button>
                <button className="btn btn-outline-danger btn-sm px-5" type="button" onClick={deleteNote}>Delete Note</button>
            </div>
        </div>
    )
}

export default View
