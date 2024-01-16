
import styled from "styled-components";
import HeaderPage from "../Components/HeaderPage";
import { useState, useEffect } from "react";
import axiosInstance from '../api/backendInstance';
import { useNavigate } from "react-router-dom";
useNavigate

const Container = styled.div`
    margin-left: 2.5vw;
    .main{
        display:flex;
        flex-direction: column;
    }
    
`
const Card = styled.div`
margin: 10px 0;
background: gray;
border-radius: 5px;
padding: 15px;
*{
    margin:0;
    padding:0;
    
}
p{
    font-size: 1em;
    letter-spacing: 1px;
}
`

const Home = () =>{
    const navigate = useNavigate();
    const [stories, setStories] = useState([]);

    const storyClick = (storyId) => {
        console.log(storyId);
        navigate(`/story/${storyId}`)
    }
    useEffect(() => {
        axiosInstance.get('stories')
            .then(response => {
                setStories(prevData => [...prevData, ...response.data]);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return(
    <>
    <Container>
        <HeaderPage page={"Home"}/>
        <div className="main">
            {stories.map((story) => (
                <Card key={story.id} onClick={()=> storyClick(story.id)}>
                <h3>{story.title}</h3>
                <p>{story.writer}</p>
                <p>Synopsis : {story.synopsis}</p>
                <p>Tags : 
                    {story.tags.map((tag) => (tag))}
                </p>
                </Card>
            ))}
        </div>
    </Container>
    </>
    )
}
export default Home;