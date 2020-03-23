import React, { useState } from "react";
import { useMutation } from "react-apollo";

import EditorView from "./EditorView";

import { ADD_TODO } from "./editor.graphql";
import { FIND_ALL_TODOS } from "../Todos/todos.graphql";

const Editor = () => {
  const [lines, setLines] = useState([]);
  const [activeMode, setActiveMode] = useState("");
  const [addTodo] = useMutation(ADD_TODO);
  const [newLine, setNewLine] = useState("");

  const updateCurrentLine = event => setNewLine(event.target.value);

  const onEditorBlur = () => mergeToLine();
  const updateMode = value => {
    setActiveMode(activeMode === value ? "" : value);
    mergeToLine();
  };

  const mergeToLine = () => {
    let line = newLine.trim();

    if (line) {
      setLines([
        ...lines,
        {
          type: activeMode || "NONE",
          text: line
        }
      ]);
    }
    setNewLine("");
  };

  const addTodoHandler = () => {
    addTodo({
      variables: {
        todo: {
          lines: [],
          completed: false
        }
      },
      refetchQueries: [{ query: FIND_ALL_TODOS }]
    });
  };

  return (
    <EditorView
      setActiveMode={updateMode}
      activeMode={activeMode}
      lines={lines}
      newLine={newLine}
      onEditorBlur={onEditorBlur}
      updateCurrentLine={updateCurrentLine}
      addTodo={addTodoHandler}
    />
  );
};

export default Editor;
