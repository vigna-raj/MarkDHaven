import { useState } from "react";
import noteContext from "./noteContext";
const Notestate = (props) => {
    const host = "http://localhost:5000"
    const [notes, setNotes] = useState([])
    const [noteid, setNoteid] = useState("");
    const [uname, setUname] = useState("")
    const [umail, setUmail] = useState("")
    //Fetch notes
    const fetchNotes = async () => {
        //API CALL
        const response = await fetch(`${host}/note/fetchnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        });
        const jsondata = await response.json();
        setNotes(jsondata);
    }
    //Fetch user data
    const fetchUser = async () => {
        //API CALL
        const response = await fetch(`${host}/auth/api/fetchdata`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        });
        const jsondata = await response.json();
        setUname(jsondata.name);
        setUmail(jsondata.email);

    }

    // Add new note
    const addNote = async (title, description, note) => {
        //API CALL
        const response = await fetch(`${host}/note/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ title, description, note }),
        });
        fetchNotes();
    }
    // Delete a note
    const delNote = async (id) => {
        //API CALL
        const response = await fetch(`${host}/note/deletenote`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ id }),
        });
        fetchNotes();

    }
    // Update a note
    const updateNote = async (id, title, description, note) => {
        //API CALL
        const response = await fetch(`${host}/note/editnote`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ id, title, description, note }),
        });
        fetchNotes();
    }

    // Alert function
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    return (
        <noteContext.Provider value={{ notes, noteid, setNoteid, addNote, delNote, updateNote, fetchNotes, showAlert, alert, fetchUser, uname, umail }}>
            {props.children}
        </noteContext.Provider>
    )
}
export default Notestate;