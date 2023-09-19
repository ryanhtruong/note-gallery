import Express from 'express';
import * as db from './database.js';
import cors from 'cors';
const app = Express();
const port = 3000;
// setup CORS to allow for cross-origin requests
app.use(cors());
app.use(Express.json());
// function to check if server is running
app.get('/', async (req, res) => {
    res.send('Server is running');
});
// function to get all notes from the database
app.get('/notes/', async (req, res) => {
    db.getAllNotes().then((result) => {
        res.send(result[0]);
    });
});
// function to get a note from the database
app.get('/notes/:id', async (req, res) => {
    const id = req.params.id;
    db.getNote(id).then((result) => {
        res.send(result[0]);
    });
});
// function to delete a note from the database
app.delete('/notes/:id', async (req, res) => {
    const id = req.params.id;
    db.deleteNote(id).then((result) => {
        res.send(result[0]);
    });
});
// function to add a note to the database
app.post('/notes/', async (req, res) => {
    const name = req.body.name;
    const message = req.body.message;
    6;
    db.createNote(name, message).then((result) => {
        res.send(result[0]);
    });
});
app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
});
