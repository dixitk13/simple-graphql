import React from "react";
import "./editor.styles.scss";

import MarkDown from "../MarkDown";
import _ from "lodash";

const editorOptions = [
  { value: "BOLD", text: "B", element: <b>B</b> },
  { value: "STRIKE", text: "Strike", element: <strike>s</strike> },
  { value: "ITALIC", text: "Italic", element: <i>i</i> },
  {
    value: "COLOR",
    text: "Color",
    element: (
      <span role="img" aria-label="colors">
        🌈
      </span>
    ),
  },
  {
    value: "CODE",
    text: "Code",
    element: (
      <span role="img" aria-label="code">
        📟
      </span>
    ),
  },
];

const colorOptions = [
  { value: "RED", element: <p /> },
  { value: "BLUE", element: <p /> },
  { value: "GREEN", element: <p /> },
  { value: "ORANGE", element: <p /> },
];

const EditorView = ({
  activeMode,
  setActiveMode,
  lines,
  newLine,
  forwardedRef,
  addTodo,
  setColor,
  color,
  updateCurrentLine,
  onEditorBlur,
}) => {
  return (
    <div className="editor-preview-container">
      <div className="color-controls">
        {activeMode === "COLOR" &&
          colorOptions.map(({ value, element }, index) => {
            return (
              <button
                key={`color-control-${index}`}
                value={value}
                className={`${value}`}
                style={{
                  border: `${color === activeMode ? "0.4px solid red" : ""}`,
                }}
                onClick={() => setColor(value)}
              >
                {element}
              </button>
            );
          })}
      </div>
      <div className="editor-controls">
        {editorOptions.map(({ value, element }, index) => {
          return (
            <button
              key={`editor-control-${index}`}
              value={value}
              style={{
                background: `${value === activeMode ? "lightsteelblue" : ""}`,
              }}
              onClick={() => setActiveMode(value)}
            >
              {element}
            </button>
          );
        })}

        {activeMode && (
          <p className="hint">
            {color} {activeMode} active
          </p>
        )}
      </div>
      <div className="editor-lf-container editor-view-container">
        <div className="editor-left input-box">
          <MarkDown classes="editor-preview" lines={lines} />
          <input
            className="text-box"
            type="text"
            ref={(r) => {
              forwardedRef.current = r;
            }}
            onBlur={onEditorBlur}
            value={newLine}
            onChange={updateCurrentLine}
          />
        </div>
        <button
          className="editor-right add-button"
          disabled={_.isEmpty(lines)}
          onClick={addTodo}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default EditorView;
