import React, { useState } from 'react'
import { Note } from './Note';
import * as Handler from '../handler';

// interface for Gallery props
interface GalleryProps {
    clicks: number
}

// setup Gallery component
export const Gallery: React.FC<GalleryProps> = (props: GalleryProps) => {
    
        // setup state for the notes to be displayed
        const [notes, setNotes] = useState(<Note name="" message="Getting notes..." />);

        // setup function to update the notes state
        const updateNotes = async () => {
            let noteList = [];
            const notes = await Handler.getAllNotes();
            for (let i = 0; i < notes.length; i++) {
                noteList.push(<Note key={i} name={notes[i].name} message={notes[i].message} />);
            }
            // @ts-ignore to make noteList assignable to JSX.Element []
            setNotes(noteList);
        }

        // call updateNotes on component mount
        React.useEffect(() => {
            updateNotes();
        }, []);

        // call updateNotes on props.clicks change
        React.useEffect(() => {
            updateNotes();
        }, [props.clicks]);
    
        return (
            <div className="Gallery">
                {notes}
            </div>
        )
    }
