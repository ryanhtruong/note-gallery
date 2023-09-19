import React, { useState } from 'react'

interface FormProps {
    onSubmit: (name: string, message: string) => void,
    clickHandler: () => void
}

// React component that displays a form
export const Form: React.FC<FormProps> = (props: FormProps) => {

    // setup states for the name and message
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    // setup functions to update the states
    const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const updateMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    return (
        <div className="Form">
            <form>
                <label htmlFor="Name"> What is your name? <br />
                    <input type="text" placeholder="Your name..." onChange={updateName}/> <br/>
                </label>
                <label htmlFor="Message"> What would you like to say? <br />
                    <input type="text" placeholder="Your message here..." onChange={updateMessage}/> <br/>
                </label>
                <input type="submit" onClick={(e) => {
                    // update the clicks state from the App component's updateClicks prop
                    props.clickHandler();
                    e.preventDefault();
                    props.onSubmit(name, message);
                    console.log(props.onSubmit)
                }}/>
            </form>
        </div>
    )
}