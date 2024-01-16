
import styled from 'styled-components';
import axios from 'axios';
import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

const StoryContainer = styled.div`

`

const Story = () => {
    const {storyId} = useParams();
    const [storyData, setStoryData] = useState({});


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:3000/story/${storyId}`);
            setStoryData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [storyId]);
    return(
        <StoryContainer>
            <h1>{storyData.title}</h1>
        </StoryContainer>
    )
}
export default Story;