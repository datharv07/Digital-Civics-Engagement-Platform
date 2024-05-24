import React from 'react';
import { Navigate } from "react-router-dom";
import styled from 'styled-components';

import katraj from "../assets/work/katraj.jpg";
import metro from "../assets/work/metro.jpg";
import WaterSupply from "../assets/work/WaterSupply.jpg";

import elction from "../assets/services/Election.jpg";




// Card component
const Card = ({ imageSrc, heading, description }) => {
    return (
        <CardContainer>
            <CardImage src={imageSrc} alt="Card" />
            <CardContent>
                <Heading>{heading}</Heading>
                <Description>{description}</Description>
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
        { imageSrc: katraj, heading: "Katraj-Navale bridge highway ", description: "Commuters travelling through the underpasses on the Katraj-Navale bridge Road face harrowing time due to traffic congestion, especially during peak hours. While the road widening and new underpass work is ongoing, it is unlikely to function before June this year. So, residents demand better traffic management on the said stretch." },

        { imageSrc: metro, heading: "Pune Metro rail Civil Court to Swargate", description: "The Pune Metro rail expects to start the underground service on both lines from Civil Court to Swargate in mid-June with the recent successful trial runs in the route, according to officials.“The Pune Metro has now done the trial run on the second line of underground metro rail service and it was successful,” said a Pune Metro rail official, adding that the work on the underground metro station is going on in full swing."},
        
        { imageSrc: elction, heading: "General Elections 2024 ", description: "We are diligently working to ensure that every eligible individual has the opportunity to participate in the upcoming General Elections of 2024. If you are 18 years or above, or will be turning 18 in the next few months, it's crucial to register as a general elector by filling out Form 6. Your voice matters, and we are committed to making the democratic process accessible to all. Join us in shaping the future of our nation by exercising your right to vote." },

        { imageSrc: WaterSupply, heading: "Bhama Askhed Water Supply Scheme", description: "Bhama Askhed Water Supply Scheme for eastern part of Pune City: The scheme is designed for water supply of 200 MLD.The targets to complete the work by 31 July, 2017 are given to all contractors. This will cover 58 sq.km area of eastern part of Pune city along the Nagar road for projected population of 14.50 lac up to year 2041. This project is sanctioned under JNNURM scheme of Govt. of India vide sanction letter no. K14012/2(123)/2006-NURM-III dated 5th July 2013 amounting to Rs. 380.16 Crores. The funding from details are as follows:"},


        
        
       
    ];

    return (
        <StyledContainer>
            <MainHeading>On Going Work</MainHeading>
            <Paragraph>As we embark on our mission to serve people or citizens, our focus remains steadfast on understanding their needs and aspirations. Through collaborative efforts and open communication, we strive to deliver solutions that enhance their lives and foster positive change within our communities. Our commitment lies in empowering individuals, ensuring inclusivity, and fostering a sense of belonging for all.</Paragraph>
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