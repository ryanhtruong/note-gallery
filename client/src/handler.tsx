import { Note } from './components/Note';

let expressURL = 'http://localhost:3000/notes/'

// function to get all notes from the database
export const getAllNotes = async () => {
    const response = await fetch(expressURL);
    const data = await response.json();
    console.log(data);
    return data;
}

// function that generates notes for each note in database
// returns an array of Note components to be rendered
export const generateNotes = async () => {
    let noteList = [];
    const notes = await getAllNotes();
    for (let i = 0; i < notes.length; i++) {
        noteList.push(<Note key={i} name={notes[i].name} message={notes[i].message} />);
    }
    return noteList.map((note) => <Note key={note.props.key} name={note.props.name} message={note.props.message} />);
}

// function that creates a note in the database from form data
export const createNote = async (name: string, message: string) => {
    const response = await fetch(expressURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message }),
    });
    const data = await response.json();
    console.log(data);
}

// function to get a note from the database
export const getNote = async (id: string) => {
    const response = await fetch(expressURL + id);
    const data = await response.json();
    console.log(data);
    return (<Note name={data.name} message={data.message} />);
}