import React from 'react';
import styled from 'styled-components';
import { Navigate } from "react-router-dom";
import DistrictImage from '../assets/images/DistrictImage.jpg';

import { Link } from "react-router-dom";


// Data
const WelcomeMessage_msg = `"Welcome to Pune District Government, serving our citizens with dedication and integrity. We are committed to fostering growth, ensuring welfare, and building a prosperous future for all residents of Pune. Through innovation, transparency, and citizen-centric governance, we strive to address the evolving needs of our dynamic community. Join us in our journey towards progress and inclusive development."`;

const district_highlight = `Pune District Government serves as the administrative authority for the Pune district, covering a diverse range of urban and rural areas. Our services encompass various sectors including infrastructure development, public health, education, agriculture, and more. With a focus on efficiency and accountability, we aim to deliver effective governance and sustainable solutions to enhance the quality of life for all residents.`;

const Mission = `"Our mission is to uphold the principles of good governance, promote socio-economic development, and ensure the well-being of every individual in the Pune district. Through collaboration, innovation, and responsive governance, we strive to create an inclusive and thriving community for present and future generations."`;

const DistrictGlance = [
    "Area : 15,643 Sq. Km.",
    "Population: 94,26,959",
    "No. of Municipal Corporations : 2",
    "Tehsils : 14",
    "Literacy Rate : 87.2"
];

const Helpline = [
    "Coronavirus Central Helpline: 011-23978043/46",
    "Coronavirus Maharashtra Helpline: 020-26127394",
    "Election : 1950",
    "Disaster Management Control Room : 1077",
    "Child Helpline : 1098",
    "Women Helpline : 1091"
];

// Styled Components
const StyledContainer = styled.div`
  text-align: center;
  padding-top: 30px;
  background: #376a9e;
  min-height: 100vh;
  font-family: 'Times New Roman', Times, serif;
`;

const ContentContainer = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background: #212529;
  color: white;
  padding: 20px;
  margin: 13px;
`;

const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DistrictHeading = styled.h1`
  font-size: 2rem;
`;

const WelcomeMessage = styled.p`
  margin: 0;
  padding: 20px;
  font-size: 16px;
  line-height: 1.6;
  color: white;
`;

const CustomSection = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(1, 2fr);
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.7rem;
  color: #000000;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  color: #ffffff;
`;

const Section = styled.div`
  background: ${({ background }) => background || 'transparent'};
  color: ${({ color }) => color || 'inherit'};
  padding: 20px;
  border-radius: 10px;
  margin-top: 15px;
`;

const DistrictHighlightsHeading = styled.h2`
  font-size: 24px;
  color: white;
  margin-bottom: 10px;
`;

const ImageDiv = styled.div`
  max-width: 100%;
  margin: 13px;
  padding: 10px;
`;

const DistrictImageStyled = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const RightDiv = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  color: black;
`;

const DownloadButton = styled(Link)`
    display: inline-block;
    background-color: #007bff;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.3s ease;
    position: absolute;
    /* bottom: 10px; */
    transform: translateX(-50%);
  
    @media (max-width: 768px) {
        position: relative;
        bottom: auto;
        left: auto;
        transform: none;
        margin-bottom: 20px;
    }

    &:hover {
        background-color: #0056b3;
    }
`;



// Component
const Home = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <StyledContainer>
      <Card>
        <CardBody>
          <DistrictHeading>Pune District Government</DistrictHeading>
        </CardBody>
        <WelcomeMessage>{WelcomeMessage_msg}</WelcomeMessage>
      </Card>
      <ContentContainer>
        <CustomSection>
          <Section background="#ff7700">
            <SectionTitle>Highlights About Work</SectionTitle>
            <Paragraph>"We're dedicated to improving our city by tackling challenges head-on and implementing innovative solutions for a brighter, more vibrant community."</Paragraph>
            <DownloadButton to={"/work"}>Check Out</DownloadButton>
          </Section>
          <Section background="#28a745">
            <SectionTitle>District At a Glance</SectionTitle>
            <Paragraph>
              {DistrictGlance.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </Paragraph>
          </Section>
        </CustomSection>
        <CustomSection>
          <Section background="#007bff">
            <SectionTitle>Mission</SectionTitle>
            <Paragraph>{Mission}</Paragraph>
          </Section>
          <Section background="#ffc107" color="black">
            <SectionTitle>Helpline</SectionTitle>
            <Paragraph>
              {Helpline.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </Paragraph>
          </Section>
        </CustomSection>
      </ContentContainer>
      <DistrictHighlightsHeading>District Highlights:</DistrictHighlightsHeading>
      <CustomSection>
        <ImageDiv>
          <DistrictImageStyled src={DistrictImage} alt="District Image" />
          <Section background="#c2065e" color="black">
            <Paragraph>{district_highlight}</Paragraph>
          </Section>
        </ImageDiv>
      </CustomSection>

      <AboutContainer>
      
      <InfoContainer>
        <InfoCard>
          <h2>About Us</h2>
            We are students at SKNCOE studying E&TC Engineering.
          <br />
          <GridContainer>
            <GridItem>
              <h3>Atharv</h3>
              <p>
              Hey there! I'm Atharv Daware, Passionate about coding. <br />
              I love using my creativity to solve problems. I'm always eager to learn new things and keep up with the latest tech trends.<br />
               When I'm not coding, you'll find me playing games, watching series, or just chilling with friends.<br /> 
               Feel free to connect with me! Whether it's tech talk or just chilling, I'm all ears.
              </p>
              <p style={{ fontStyle: 'italic' }}>
                Warm regards,<br />
                - Atharv Daware
              </p>
            </GridItem>
            {/* <GridItem>
              <h3>Arya</h3>
              <p>
                Hello, I am Arya Deshmukh currently pursuing my graduation from Smt. Kashibai Navale College of engineering in Electronics and telecommunication engineering.
                <br />
                I am enthusiastic about blending my technical knowledge with valuable soft skills. I am passionate about coding and exploring various skills which will help me grow.
                <br />
                I am good at multitasking through involvement in various student activities. In my free time, I enjoy sports and exploring new destinations through travel.
              </p>
            </GridItem>
            <GridItem>
              <h3>Yash</h3>
              <p>
                Hey there! I'm Yash Deotale, an avid explorer of the digital realm with a penchant for crafting immersive experiences through code and design. With a background in both engineering and creativity, I bring a unique perspective to every project I undertake.<br /> 
                From developing robust algorithms to designing captivating visuals, I love the challenge of bringing ideas to fruition in innovative ways.<br /> 
                Through my projects, I aim to inspire curiosity and spark creativity in others, fostering a community of passionate makers and creators.
              </p>
            </GridItem> */}
          </GridContainer>
        </InfoCard>
      </InfoContainer>

      </AboutContainer>
    </StyledContainer>
  );
}

export default Home;


const AboutContainer = styled.div`
  padding: 1rem;
  background: #376a9e;
  min-height: 100vh;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  background-color: #343a40;
  color: #fff;
  padding-top: 20px;
  border-radius: 10px;
`;
const InfoContainer = styled.div`
  width: 100%;
`;

const InfoCard = styled.div`
  background-color: #343a40;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
`;
