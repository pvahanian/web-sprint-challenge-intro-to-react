import React from 'react'
import styled from "styled-components";

const CardHolder = styled.div`
  width: 30vw;
  border: 2px solid black;
  border-radius: 10px;
  padding: 2% 0;
  margin:10px;
`;

const CharactersMaker = (props) => {
    // console.log(props)
    const {gender,name,status,species,origin,location,image }= props.char
    return (
            
            <CardHolder>
            <div className='cardHolder'>
                <div className='card'>
                    <h2>Name: {name}</h2>
                    <h3>Status {status}</h3>
                    <h3>Species {species}</h3>
                    <h3>Origin {origin.name}</h3>
                    <h3>Gender {gender}</h3>
                    <h4>Location {location.name}<a href={location.url}>Go there!</a></h4> 
                    <img src={image}></img> 
                </div>
            </div>
            </CardHolder>
           


    )
}

export default CharactersMaker


// import React from "react";
// import styled, { keyframes } from "styled-components";

// const kf = keyframes`
//     50%{
//       opacity: .02;
//     }

//   100% {
//     opacity: 1;
//     transform : scale(1);
//   }
// `;

// const StyledFriend = styled.div`
//   opacity: 0;
//   transform: scale(1.5);
//   animation: ${kf} 1.5s ease-in-out forwards;
//   background-color: ${(pr) =>
//     pr.alert ? pr.theme.secondaryColor : pr.theme.primaryColor};
//   border-bottom: 2px solid ${(pr) => pr.theme.white};
//   color: ${(pr) => pr.theme.white};
//   padding: ${(pr) => pr.theme.paddingSmall};
//   width: 60%;
//   display: flex;
//   justify-content: space-between;

//   @media ${(pr) => pr.theme.mobileBreakpoint} {
//     width: initial;
//   }

//   transition: all 0.3s ease-in-out;
//   &:hover {
//     transition: all 0.3s ease-in-out;
//     background-color: ${(pr) => pr.theme.tertiaryColor};
//   }

//   button {
//     transition: all 0.5s ease-in-out;
//     color: ${(pr) => pr.theme.white};
//     background-color: ${(pr) => pr.theme.black};

//     &:hover {
//       transition: all 0.5s ease-in-out;
//       color: ${(pr) => pr.theme.black};
//       background-color: ${(pr) => pr.theme.white};
//     }
//   }
// `;

// export default function Friend({ info, action }) {
//   return (
//     <StyledFriend alert={info.name === "Trevor"}>
//       {info.name}
//       <button onClick={() => action(info.id)}>See details</button>
//     </StyledFriend>
//   );
// }
