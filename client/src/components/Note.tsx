// React component that displays a note
import React from 'react'

interface NoteProps {
    name: string,
    message: string
}

export const Note: React.FC<NoteProps> = ({name, message}) => {
    return (
        <div className="Note">
            <p className="Message">{message}</p>
            <p className="GuestName">by {name}</p>
        </div>
    )
}