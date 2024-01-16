/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";
import InputCategory from "../Components/InputCategory";
import InputStatus from "../Components/InputStatus";
import InputMultipleBadge from "../Components/InputMultipleBadge";
import InputFile from "../Components/InputFile";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddForm = styled.div`
  gap: 10px;
  font-size: 1.2rem;
`;
const InputStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 10px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 2;
`;

const InputData = ({ field, label, onDataChange }) => (
  <>
    <Container>
      <label htmlFor={field}>{label}</label>
      <input
        type="text"
        name={field}
        id={field}
        onChange={(e) => onDataChange(field, e.target.value)}
      />
    </Container>
  </>
);

const AddStory = () => {
  const navigate = useNavigate();
  const [storyData, setStoryData] = useState({
    title: "",
    writer: "",
    synopsis: "",
    tags: "",
    category: "",
    status: false,
  });

  const onDataChange = (field, value) => {
    setStoryData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleStatusChange = (value) => {
    onDataChange("status", value);
  };

  const handleCategoryChange = (value) => {
    onDataChange("category", value);
  };

  const handleMultipleBadge = (value) => {
    onDataChange("tags", value);
  };

  const clicked = async () => {
    try {
      const response = await axios.post('http://localhost:3000/add-story', storyData);
      if (response.status === 200) {
        console.log('StoryData added to the database successfully.');
        navigate('/');
      } else {
        console.error('Failed to add StoryData to the database.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <h1>Add Story</h1>
      <AddForm>
        <InputStyle>
          <InputData field={"title"} label={"Title"} onDataChange={onDataChange} />
          <InputData field={"writer"} label={"Writer"} onDataChange={onDataChange} />
          <TextContainer>
            <label htmlFor="synopsis">Synopsis</label>
            <textarea
              value={storyData.synopsis}
              onChange={(e) => onDataChange("synopsis", e.target.value)}
            />
          </TextContainer>
          <InputMultipleBadge onBadgeChange={handleMultipleBadge}/>
          <InputCategory onCategoryChange={handleCategoryChange}/>
          <InputStatus onStatusChange={handleStatusChange}/>
          <InputFile />
        </InputStyle>
        <button type="submit" onClick={clicked}>
          <a href="/add-chapter">Add Chapter</a>
        </button>
        <button type="submit" onClick={clicked}>
          Save
        </button>
      </AddForm>
    </>
  );
};

export default AddStory;
