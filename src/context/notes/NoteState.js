import { useState } from "react";
import noteContext from "./noteContext";
const Notestate = (props) => {
    const sample = [
        {
            "_id": "65d05be4eb02ef1ec3c605fa",
            "owner_id": "65d057b8eb02ef1ec3c605f2",
            "title": "Binary search tree",
            "description": "This note is to store notes on bs",
            "note": "Binary search is a searching algorithm",
            "date": "2024-02-17T07:10:28.423Z",
            "__v": 0
        },
        {
            "_id": "65d05c12eb02ef1ec3c605ff",
            "owner_id": "65d057b8eb02ef1ec3c605f2",
            "title": "Binary search tree",
            "description": "This note is to store notes on bs",
            "note": "Binary search is a searching algorithm",
            "date": "2024-02-17T07:11:14.191Z",
            "__v": 0
        },
        {
            "_id": "65d05c12eb02ef1ec3c60601",
            "owner_id": "65d057b8eb02ef1ec3c605f2",
            "title": "Binary search tree",
            "description": "This note is to store notes on bs",
            "note": "Binary search is a searching algorithm",
            "date": "2024-02-17T07:11:14.811Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(sample)
    const [noteid, setNoteid] = useState("");
    const addNote = (title, description, note) => {
        setNotes(notes.concat({
            "_id": "65d05c12eb02ef1ec3c6060",
            "owner_id": "65d057b8eb02ef1ec3c605f2",
            "title": title,
            "description": description,
            "note": note,
            "date": "2024-02-17T07:11:14.811Z",
            "__v": 0
        }));
    }
    const delNote = (id) => {
        const newNotes = notes.filter(note => note._id !== id);
        setNotes(newNotes)
    }
    const updateNote = (id, title, description, note) => {
        var newNotes = notes;
        var objIndex = newNotes.findIndex(obj => obj._id === id)
        // console.log(newNotes);
        // console.log(objIndex);
        newNotes[objIndex].title = title;
        newNotes[objIndex].description = description;
        newNotes[objIndex].note = note;
        setNotes(newNotes);
    }
    return (
        <noteContext.Provider value={{ notes, noteid, setNoteid, addNote, delNote, updateNote }}>
            {props.children}
        </noteContext.Provider>
    )
}
export default Notestate;