import React from 'react'
import As from "../images/ema 2.jpg";
import SK from "../images/suraj.png";
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Container = styled.div`
    width: ${(props) => props.type !== "sm" && "360px"};
    margin-bottom:  ${(props) => props.type === "sm" ? "10px" : "45px"};
    cursor: pointer;

    display: ${(props) => props.type === "sm" && "flex"};
    gap: 10px;
`;  
const Image = styled.img`
    width: 100%;
    height: ${(props) => props.type === "sm" ? "120px" : "200px"};
    background-color: #999;
    flex: 1;
`;

const Details = styled.div`
display: flex;
marin-top: ${(props) => props.type === "sm" && "16px"};
gap: 12px;  
flex: 1;
`;

const ChannelImage = styled.img`
height: 36px;
width: 36px;
border-radius: 50%;  
background-color: #999;
display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;
const Card = ( {type} ) => {
  return (
    <Link to = "/video/test" style={{textDecoration:"none", color:"inherit"}}>
    <Container type = {type}>
        <Image type = {type} src={As} />
        <Details type = {type}>
            <ChannelImage  src={SK} type = {type}/>
            
            <Texts>
                <Title>Test Video</Title>
                <ChannelName> Suraj web tutes</ChannelName>
                <Info> welcome to suraj web tutes</Info>
            </Texts>
        </Details>
    </Container>
    </Link>
  )


}

export default Card