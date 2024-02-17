import React, { useContext, useEffect } from 'react'
import AccordionItem from './AccordionItem'
import noteContext from '../context/notes/noteContext'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const { notes, setNoteid, fetchNotes } = useContext(noteContext);
    useEffect(() => {
        if (localStorage.getItem("token")) {
            fetchNotes();
        }
        else {
            navigate("/login")
        }
        // eslint-disable-next-line
    }, []);
    const navigate = useNavigate();
    const addNote = () => {
        setNoteid("")
        navigate("/edit")
    }
    return (
        <>
            <div >
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '25px' }}>Hi Vignaraj </h1>
                <div className='mx-auto  container  d-flex  justify-content-end'><i className="fa-solid fa-file-circle-plus fa-3x" onClick={addNote}></i></div>
            </div>
            <div className="container  "><h4>Your Notes</h4>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="container">{notes.length === 0 ? "No Notes! Add a note now." : ""}</div>
                    {notes.map((item) => {
                        return <AccordionItem key={item._id} id={"i" + item._id} target={"#i" + item._id} title={item.title} description={item.description} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Home
