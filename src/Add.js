import { useState } from "react";
import List from "./List";
import Undo from "./Undo";
import Redo from "./Redo";

export default function Add() {
  const [nameInput, setNameInput] = useState("");
  const [names, setNames] = useState([]);
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameInput.trim() !== "") {
      setUndoStack([...undoStack, names]);
      setNames([...names, nameInput.trim()]);
      setNameInput("");
      setRedoStack([]);
    }
  };

  const handleUndoButton = () => {
    if (undoStack.length > 0) {
      {
        setRedoStack([...redoStack, names]);
        setNames(undoStack[undoStack.length - 1]);
        setUndoStack(undoStack.slice(0, -1));
      }
    }
  };

  const handleRedoButton = () => {
    if (redoStack.length > 0) {
      {
        setUndoStack([...undoStack, names]);
        setNames(redoStack[redoStack.length - 1]);
        setRedoStack(redoStack.slice(0, -1));
      }
    }
  };

  return (
    <>
    <div className="button-container">
    <Undo onClick={handleUndoButton} disabled={undoStack.length === 0} />
    <Redo onClick={handleRedoButton} disabled={redoStack.length === 0} />
    </div>
      <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text" className="form-control"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Enter the text"
        />
        <button type="submit" className="btn"> Add </button>
      </form>
      </div>
      <List items={names} />
    </>
  );
}
