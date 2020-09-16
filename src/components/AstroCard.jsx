import React from "react";
import styled, {keyframes} from 'styled-components'

const kf = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const StyledDiv = styled.div`
    background-color: black;
    border: 5px ridge navy;
    color: white;
    
    img {
        animation: ${kf} 3s ease-in;
    }
      
`

const AstroCard = props => 
{
    return(
        <StyledDiv className="astro-card">
            <h1>Nasa Picture of the Day</h1>
            <h3>{props.date}</h3>
            <h3>{props.title}</h3>
            <img src={props.image}/>
            <p>{props.desc}</p>
        </StyledDiv>
    )
}

export default AstroCard;