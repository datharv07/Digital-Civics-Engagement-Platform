import React from 'react';
import { Navigate } from "react-router-dom";
import styled from 'styled-components';

import elction from "../../assets/services/Election.jpg";
import elctionPDF from "../../assets/pdf/Election-form.pdf";

import BirthPdf from "../../assets/pdf/Birth.pdf";
import Birth from "../../assets/services/Birth.jpg";



import WomenEmpowerment from "../../assets/services/Women-Empowerment.jpg";
import WomenEmpowermentPDF from "../../assets/pdf/Women-Help.pdf";


// Function to download file at URL
const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
};

// Card component
const Card = ({ imageSrc, heading, description, downloadPdf }) => {
    return (
        <CardContainer>
            <CardImage src={imageSrc} alt="Card" />
            <CardContent>
                <Heading>{heading}</Heading>
                <Description>{description}</Description>
                <DownloadButton onClick={() => downloadFileAtURL(downloadPdf)}>Download PDF</DownloadButton>
            </CardContent>
        </CardContainer>
    );
};


// Component
const MyComponent = ({ isAuthenticated }) => {
    if (!isAuthenticated) {
        return <Navigate to={"/login"} />;
    }

    // Array of card data
    const cardData = [
        { imageSrc: elction, heading: "General Elections 2024 ", description: "New registration for general electors . Fill Form 6 if you are 18 years or above or you will turn 18 in few months", downloadPdf: elctionPDF },

        { imageSrc: WomenEmpowerment, heading: "Women Empowerment ", description: "Women empowerment is about giving women the power to control their own lives. It means providing them with education, opportunities, and support to pursue their dreams and make their voices heard. By empowering women, we can build a more equal and prosperous society for everyone.", downloadPdf: WomenEmpowermentPDF },

        { imageSrc: Birth, heading: "Births, Deaths, Marriages and Child care ", description: "Bal Shakti Puraskar, Ministry of Women and Child Development, awarded to Indian citizens under the age of 18 for outstanding achievement in innovation, scholastic achievements, social service, arts and culture, bravery, or sports.", downloadPdf: BirthPdf },
        
       
    ];

    return (
        <StyledContainer>
            <MainHeading>Our Services</MainHeading>
            <Paragraph>Empowering communities through active engagement. From town halls to digital platforms, we facilitate dialogue between city officials and residents to drive positive change.</Paragraph>
            <CardGrid>
                {cardData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </CardGrid>
        </StyledContainer>
    );
};

export default MyComponent;


const StyledContainer = styled.div`
  text-align: center;
  padding-top: 30px;
  background: #376a9e;
  height: 100%;
`;

const MainHeading = styled.h2`
  color: #ffffff;
`;

const Paragraph = styled.p`
  color: #ffffff;
`;



// Container for the cards
const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 0 auto;
    max-width: 1200px;
    padding: 20px;
`;

// Styled components for the card
const CardContainer = styled.div`
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%; /* Ensure the container takes up full height */
    position: relative; /* Set position to relative for absolute positioning of button */
`;




const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const CardContent = styled.div`
    padding: 20px;
`;

const Heading = styled.h3`
    font-size: 20px;
    color: #010101;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 16px;
    color: #010101;
    text-align: center; /* Center align description */
    padding-bottom: 40px;
`;

const DownloadButton = styled.button`
    background-color: #007bff;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    position: absolute;
    bottom: 10px; /* Adjust as needed */
    left: 50%;
    transform: translateX(-50%);
  
    &:hover {
        background-color: #0056b3;
    }
`;