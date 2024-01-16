import { FaFilter } from "react-icons/fa";
import styled from "styled-components";
import React, {useState} from "react";
import FilteringPopup from "./FilteringPopUp";


const Header = styled.header`
    background: gray;
    width: 70vw;
    display: flex;
    flex-direction: row;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
`

const HeaderPage = ({page}) => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const visiblePopup = () => {
        setPopupVisible(true)
    }
    const invisiblePopup = () => {
        setPopupVisible(false);
    }; 
    return(
    <>
    <Header>
        <h1>{page}</h1>
        <div className="container">
        <input type="text" name="name" id="name" style={{width:'200px'}} placeholder="Search Writer or Author"/>
        <FaFilter onClick={visiblePopup}/>
        <button><a href="/add-story">Add Story</a></button>

        </div>
    </Header>
    {isPopupVisible && (
        <div className="popup">
          <FilteringPopup onClose={invisiblePopup}/>
        </div>
      )}
    </>
    )
}

export default HeaderPage;