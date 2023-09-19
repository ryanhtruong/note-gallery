import './App.css';
import { Form } from './components/Form';
import { Gallery } from './components/Gallery';
import * as Handler from './handler';
import React from 'react';


function App() {

  // setup state for number of times the form has been submitted
  // each time the form is submitted increment clicks such that gallery updates in response
  const [clicks, setClicks] = React.useState(0);

  // setup function to update the clicks state from the Form component's onSubmit prop
  const updateClicks = () => {
    setClicks(clicks + 1);
    console.log("CLICKS " + clicks)
  }

  return (
    <>
      <div className="App">
        <header>
          Note Gallery
        </header>
        <p>
          Feel free to leave a note using the form here!
        </p>
          <div>
            <Form onSubmit={Handler.createNote} clickHandler={updateClicks}/>
          </div>
        <p>
          Below is a gallery of notes left here.
        </p>
        <Gallery clicks={clicks}/>
      </div>
    </>
  )
}

export default App;
