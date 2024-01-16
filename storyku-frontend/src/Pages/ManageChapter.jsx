
import React, {useState} from 'react';
import StoryEditor from '../Components/StoryEditor';
import axios from 'axios';

const TitleChapter = ({onTitleChange }) => (
    <div>
    <p>Title</p>
    <input
      type="text"
      name="title"
      id="title"
      onChange={(e) => onTitleChange(e.target.value)}
    />
  </div>
)

const ManageChapter = () => {
    const [titleChapter, setTitleChapter] = useState("");
    const [chapterContent, setChapterContent] = useState('');

    const handleTitleChange = (title) => {
        // Simpan judul ke dalam state atau lakukan aksi lainnya
        setTitleChapter(title);
      };

      const handleSave = () => {
        console.log(`${titleChapter}, ${chapterContent}`);
        // Tambahkan logika penyimpanan data atau aksi lainnya di sini
      };

    const handleStoryChange = (content) => {
        // Simpan konten cerita ke dalam state atau lakukan aksi lainnya
        setChapterContent(content);
      };
    return (
        <>
        <h1>Add Chapter</h1>
        <TitleChapter onTitleChange={handleTitleChange} />
        <StoryEditor onStoryChange={handleStoryChange} />
        <button onClick={handleSave}>Save</button>
        </>
    );
}

export default ManageChapter;