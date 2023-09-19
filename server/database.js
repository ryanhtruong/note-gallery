import * as MySQL from "mysql2";
export const db = MySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "note_gallery"
}).promise();
export async function getAllNotes() {
    console.log("Getting all notes");
    return await db.query(`SELECT * FROM note`);
}
export async function getNote(id) {
    console.log("Getting note with id: " + id);
    return await db.query(`SELECT * FROM note WHERE note_id = ?`, id);
}
// function to delete note from id
// this query is a prepared statement where ? is a placeholder for the id input
// this is a security measure to prevent SQL injection
export async function deleteNote(id) {
    console.log("Deleting note with id: " + id);
    return await db.query(`DELETE FROM note WHERE note_id = ?`, id);
}
export async function createNote(name, message) {
    console.log("Creating note with name: " + name + " and message: " + message);
    return await db.query(`INSERT INTO note (name, message) VALUES (?, ?)`, [name, message]);
}
