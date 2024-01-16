import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #63d471;
    height: 90vh;
    width: 150px;
    margin-right: 10px;
    display: flex;
    justify-content: start;

`;
export const NavMenu = styled.div`
display: flex;
flex-direction: column;
margin-right: -24px;
white-space: nowrap;
`;
export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    text-decoration: none;
    padding: 0.2rem 1rem;
    cursor: pointer;
    &.active {
        color: #000000;
    }
`;
