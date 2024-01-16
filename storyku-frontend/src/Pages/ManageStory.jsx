
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import TableChapter from '../Components/TableChapter'
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  margin-bottom: 30px;
  *{
    margin: 0;
    padding: 0;
  }
`
const ManageStory = () => {
  const navigate = useNavigate();
  // const chapters = [{
  //   title: "sabchdbd",
  //   lastUpdate: "sabchdbd",
  //   fileName: "sdvdsv"
  // }]
  const [storyData, setStoryData] = useState({});
  const [chapters, setChapters] = useState([]);
  const {idStory} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storyResponse = await axios.get(`http://localhost:3000/story/${idStory}`);
        setStoryData(storyResponse.data);

        // Request ke endpoint chapters
        const chaptersResponse = await axios.get(`http://localhost:3000/story/chapter/${idStory}`);
        setChapters(chaptersResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [idStory]);

  
  

  console.log(storyData);
  
  const addChapter = (storyId) => {
    navigate(`/add-chapter/${storyId}`);
  }
  return (
    <>
      <Container>
      <h1>{storyData.title}</h1>
      <p>Writer : {storyData.writer}</p>
      </Container>
      <Container>
        <h3>Synopsis</h3>
        <p>{storyData.synopsis}</p>
      </Container>
      <Container>
        <h3>Tags</h3>
        {storyData.tags
              ? storyData.tags.map((tag, i) =>
                  i === storyData.tags.length - 1 ? tag : `${tag}, `
                )
              : null}
      </Container>
      <Container>
        <h3>Status</h3>
        <p>{storyData.status ? "Publish" : "Draft"}</p>
      </Container>
      <button onClick={() => addChapter(idStory)}>Add Chapter</button>

      <Container>
        <TableChapter chapters={chapters}></TableChapter>
      </Container>


      
      
    </>

  )
}

export default ManageStory;