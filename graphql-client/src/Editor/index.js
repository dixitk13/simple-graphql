import React, { useState, createRef } from "react";
import { useMutation } from "react-apollo";

import EditorView from "./EditorView";

import { ADD_TODO } from "./editor.graphql";
import { FIND_ALL_TODOS } from "../Todos/todos.graphql";

const Editor = () => {
  const [addTodo] = useMutation(ADD_TODO);
  const ref = createRef();

  // this should be a reducer!
  const [lines, setLines] = useState([]);
  const [activeMode, setActiveMode] = useState("");
  const [color, setColor] = useState("");
  const [newLine, setNewLine] = useState("");

  const updateCurrentLine = (event) => setNewLine(event.target.value);

  const onEditorBlur = () => mergeToLine();

  const updateMode = (value) => {
    setActiveMode(activeMode === value ? "" : value);
    if (activeMode !== value) {
      ref.current.focus();
    }
    mergeToLine();
  };

  const mergeToLine = () => {
    let line = newLine.trim();

    if (line) {
      setLines([
        ...lines,
        {
          type: activeMode || "NONE",
          ...(activeMode === "COLOR" && { color }),
          text: line,
        },
      ]);
    }
    setNewLine("");
  };

  const addTodoHandler = () => {
    addTodo({
      variables: {
        todo: {
          lines,
          completed: false,
        },
      },
      refetchQueries: [{ query: FIND_ALL_TODOS }],
    });
    // this should be a reducer!
    setLines([]);
    setColor("");
    setActiveMode("");
    setNewLine("");
  };

  return (
    <EditorView
      setActiveMode={updateMode}
      activeMode={activeMode}
      forwardedRef={ref}
      lines={lines}
      newLine={newLine}
      onEditorBlur={onEditorBlur}
      setColor={setColor}
      color={color}
      updateCurrentLine={updateCurrentLine}
      addTodo={addTodoHandler}
    />
  );
};

export default Editor;
