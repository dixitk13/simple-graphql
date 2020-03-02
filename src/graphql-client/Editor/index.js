import React, { useState } from "react";
import EditorView from "./EditorView";

const Editor = () => {
  const [lines, setLines] = useState([]);
  const [activeMode, setActiveMode] = useState("");

  const [newLine, setNewLine] = useState("");

  const updateCurrentLine = event => setNewLine(event.target.value);

  const onEditorBlur = () => mergeToLine();
  const updateMode = value => {
    setActiveMode(activeMode === value ? "" : value);
    mergeToLine();
  };

  const mergeToLine = () => {
    setLines([
      ...lines,
      {
        type: activeMode,
        text: newLine
      }
    ]);
    setNewLine("");
  };

  const addTodo = event => {
    console.log("add todo ", event);
    // todo make graphql query
  };

  return (
    <EditorView
      setActiveMode={updateMode}
      activeMode={activeMode}
      lines={lines}
      newLine={newLine}
      onEditorBlur={onEditorBlur}
      updateCurrentLine={updateCurrentLine}
      addTodo={addTodo}
    />
  );
};

export default Editor;
