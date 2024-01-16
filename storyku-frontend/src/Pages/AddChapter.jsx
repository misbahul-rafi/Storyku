import styled from 'styled-components';
import StoryEditor from '../Components/StoryEditor';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 10px;
`;

const InputData = ({ field, label, onDataChange }) => (
  <Container>
    <label htmlFor={field}>{label}</label>
    <input
      type="text"
      name={field}
      id={field}
      onChange={(e) => onDataChange(field, e.target.value)}
    />
  </Container>
);

const AddChapter = () => {
  const navigate = useNavigate();
  const { storyId } = useParams();
  const [dataChapter, setDataChapter] = useState({
    story_id: storyId,
    chapter: "",
    file: "",
  });

  const onDataChange = (field, value) => {
    setDataChapter((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleEditorChange = (value) => {
    onDataChange("file", value)
  }

const saveChapter = async () => {
  try {
    const response = await axios.post(`http://localhost:3000/story/add-chapter/${storyId}`, dataChapter);
    console.log('Server Response:', response);

    if (response.status === 201) {
      console.log('StoryData added to the database successfully.');
      navigate(`/manage-story/${storyId}`)
    } else {
      console.error('Failed to add StoryData to the database.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
  console.log(dataChapter);
};

  return (
    <>
      <InputData field="title" label="Title" onDataChange={onDataChange} />
      <StoryEditor onStoryChange={handleEditorChange} />
      <button onClick={saveChapter}>Save Chapter</button>
    </>
  );
};

export default AddChapter;
