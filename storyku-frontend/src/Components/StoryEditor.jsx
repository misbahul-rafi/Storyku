import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const StoryEditor = ({ onStoryChange }) => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const handleStoryChange = (content, delta, source, editor) => {
    setValue(content);

    // Panggil prop onStoryChange dan kirim nilai content
    if (onStoryChange) {
      onStoryChange(content);
    }
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'link',
    'image',
  ];

  return (
    <div className="story-editor">
      <p>Story</p>
      <ReactQuill
        value={value}
        onChange={handleStoryChange}
        modules={modules}
        formats={formats}
        theme="snow"
      />
    </div>
  );
};

export default StoryEditor;
