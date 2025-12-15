import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Button, Container, Form, FormGroup, Input, Label, ListGroup, ListGroupItem } from "reactstrap";
import { v4 as uuidv4 } from "uuid"; // notlara id vermek için

function MyNotes() {
  const [notes, setNotes] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const selectedNote = notes.find((note) => note.id === selectedId);

  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      title: "New Note",
      content: "",
    };
    setNotes([newNote, ...notes]);
    setSelectedId(newNote.id);
  };

  const deleteNote = (id) => {
    const filtered = notes.filter((note) => note.id !== id);
    setNotes(filtered);
    if (id === selectedId && filtered.length > 0) {
      setSelectedId(filtered[0].id);
    } else if (filtered.length === 0) {
      setSelectedId(null);
    }
  };

  const updateContent = (newContent) => {
    const updated = notes.map((note) =>
      note.id === selectedId ? { ...note, content: newContent } : note
    );
    setNotes(updated);
  };

  const updateTitle = (newTitle) => {
    const updated = notes.map((note) =>
      note.id === selectedId ? { ...note, title: newTitle } : note
    );
    setNotes(updated);
  };

  return (
    <div style={styles.app}>
      <div style={styles.sidebar}>
        <Button color="primary" outline onClick={addNote}>Add New Note</Button>
        <ListGroup>
          {notes.map((note) => (
            <ListGroupItem
              key={note.id}
              onClick={() => setSelectedId(note.id)}
              style={{
                padding: "8px",
                cursor: "pointer",
                backgroundColor: note.id === selectedId ? "#eef" : "transparent",
              }}
            >
              {note.title}
              {' '}
              <Button
                color="danger" outline
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteNote(note.id);
                }}
              >
                Delete
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>

      <div style={styles.editor}>
        {selectedNote ? (
          <>
            <Form>
                <FormGroup>
                    <Label for="noteTitle"> Note Title </Label>
                    <Input
                      id="noteTitle"
                      value={selectedNote.title}
                      onChange={(e) => updateTitle(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="noteContent"> Note Content </Label>
                    <Input
                      id="noteContent"
                      type="textarea"
                      style={styles.textarea}
                      value={selectedNote.content}
                      onChange={(e) => updateContent(e.target.value)}
                    />
                </FormGroup>
            </Form>
            <div style={styles.preview}>
                <ReactMarkdown>{selectedNote.content}</ReactMarkdown>
            </div>
          </>
        ) : (
          <p>📌 Select a note or create a new one.</p>
        )}
      </div>
    </div>
  );
}

export default MyNotes;

const styles = {
  app: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial",
  },
  sidebar: {
    width: "25%",
    borderRight: "1px solid #ccc",
    padding: "10px",
    overflowY: "auto",
  },
  editor: {
    width: "75%",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
  textarea: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    fontFamily: "monospace",
    marginBottom: "10px",
  },
  preview: {
    flex: 1,
    border: "1px solid #ccc",
    padding: "10px",
    overflowY: "auto",
    backgroundColor: "#ffff",
  },
};
