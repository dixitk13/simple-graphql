import React from "react";
import "./editor.styles.scss";

import MarkDown from "../MarkDown";

const editorOptions = [
  { value: "BOLD", text: "Bold", element: "b" },
  { value: "STRIKE", text: "Strike", element: "s" },
  { value: "ITALIC", text: "Italic", element: "i" },
  { value: "COLOR", text: "Color", element: "span" },
  { value: "CODE", text: "Code", element: "code" }
];

const EditorView = ({
  activeMode,
  setActiveMode,
  lines,
  newLine,
  addTodo,
  updateCurrentLine,
  onEditorBlur
}) => {
  return (
    <div className="editor-preview-container">
      <div className="editor-lf-container preview-box">
        <MarkDown classes="editor-left" lines={lines} />
        <div className="editor-right block" />
      </div>
      <div className="editor-controls">
        {editorOptions.map(({ value, text, element }, index) => {
          const Wrapper = element || "div";
          return (
            <button
              key={`editor-control-${index}`}
              value={value}
              style={{
                background: `${value === activeMode ? "lightsteelblue" : ""}`
              }}
              onClick={() => setActiveMode(value)}
            >
              <Wrapper>{text}</Wrapper>
            </button>
          );
        })}
      </div>
      <div className="editor-lf-container editor-view-container">
        <div className="editor-left input-box">
          <input
            className="text-box"
            type="text"
            onBlur={onEditorBlur}
            value={newLine}
            onChange={updateCurrentLine}
          />
        </div>
        <input
          type="button"
          className="editor-right add-button"
          value="Add"
          onClick={addTodo}
        />
      </div>
    </div>
  );
};

export default EditorView;
