// The Problem: "The Auto-Saving Note"
// The Scenario

// You are building a text editor. To prevent data loss, the app should "save" the note to an external service, but only when the user stops typing for a moment.
// The Task

// Create a component called NoteEditor that:

//     Contains a <textarea> where the user can type.

//     Uses an useEffect hook to "save" the content to the console (console.log("Saving:", text)) whenever the text changes.

//     The Twist (Debouncing): The "save" should not happen on every single keystroke. It should only fire after the user has stopped typing for 1 second.

import React, { useState, useEffect } from 'react';

function NoteEditor() {
  const [text, setText] = useState("");

  useEffect(() => {
    // Write your debouncing logic here

    const createTimeout = () => {setTimeout(() => {console.log("Text saved after one second")}, 1000)};

    createTimeout();
  }, [text]);

  return (
    <textarea 
      value={text} 
      onChange={(e) => setText(e.target.value)} 
      placeholder="Type your note here..."
    />
  );
}