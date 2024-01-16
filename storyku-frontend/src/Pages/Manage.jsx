import Table from "../Components/Table"
import HeaderPage from "../Components/HeaderPage";
import axiosInstance from '../api/backendInstance';
import React, {useState, useEffect} from "react";

const Home = () =>{
    const [stories, setStories] = useState([]);

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
    <div className="story-list">
        <HeaderPage page={"Story List"}/>
        <Table stories={stories}/>
    </div>
    </>
        
    )
}

export default Home;