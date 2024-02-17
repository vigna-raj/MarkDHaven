import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import { useNavigate } from 'react-router-dom';
const AccordionItem = (props) => {
    const { setNoteid } = useContext(noteContext);
    const navigate = useNavigate();
    const viewNote = () => {
        setNoteid(props.id.slice(1));
        navigate("/view")
    }
    const editNote = () => {
        setNoteid(props.id.slice(1));
        navigate("/edit")
    }
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={props.target} aria-expanded="" aria-controls={props.id}>
                        {props.title}
                    </button>
                </h2>
                <div id={props.id} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">{props.description}
                        <div className='d-flex justify-content-end'>
                            <i className="fa-solid fa-eye fa-2x mx-3" onClick={viewNote}></i>
                            <i className="fa-solid fa-pen-to-square fa-2x" onClick={editNote}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AccordionItem
