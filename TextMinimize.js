import React, { useState } from 'react';

function TextMinimize(props) {
  const initialText = props.text;
  const characters = props.characters;
  const Tag = props.as;
  const text =
    initialText.length > characters
      ? initialText.slice(0, characters) + '...'
      : initialText;

  const [currentText, setCurrentText] = useState(text);
  const [readState, setReadState] = useState(false);

  const toggleText = () => {
    if (!readState) {
      setCurrentText(initialText);
    } else {
      setCurrentText(text);
    }
    setReadState(!readState);
  };

  return (
    <Tag>
      <span style={{ wordWrap: 'break-word' }}>{currentText} </span>
      {initialText.length > characters && (
        <span
          onClick={toggleText}
          style={{ color: '#000', cursor: 'pointer', wordWrap: 'break-word' }}
        >
          {readState ? 'Read Less' : 'Read More'}
        </span>
      )}
    </Tag>
  );
}

export default TextMinimize;
