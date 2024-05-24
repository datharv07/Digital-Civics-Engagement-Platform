import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

// Import images
import collegeImage from '../assets/images/dagdusheth.jpg';
import campusImage from '../assets/images/Shanivaevadha.jpg';
import facultyImage from '../assets/images/pune.jpg';

const About = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login");
    return null; // or a loading spinner or message
  }

  return (
    <AboutContainer className=''>
      <Card>
        <div>{/*About Pune */}
          <Title>About Pune, Maharashtra, India</Title>
          <Description>
            Pune, located in the western state of Maharashtra, India, is a vibrant city known for its rich history,
            culture, and educational institutions. It boasts a diverse cultural landscape, influenced by its Marathi
            heritage as well as the various communities that call the city home.
          </Description>
          <Description>
            The city is often referred to as the "Oxford of the East" due to its numerous educational institutions,
            including prestigious universities such as Savitribai Phule Pune University and Symbiosis International
            University. Pune attracts students from all over India and abroad, making it a hub of learning and
            academic excellence.
          </Description>
          <Description>
            Pune is also an emerging IT and industrial hub, with the Rajiv Gandhi Infotech Park in Hinjawadi being
            one of the largest IT parks in Asia. The city's strong presence in sectors like automotive, manufacturing,
            and engineering contributes to its economic growth and development.
          </Description>
          <Description>
            Additionally, Pune offers a vibrant culinary scene, with a wide range of restaurants and eateries serving
            traditional Maharashtrian cuisine as well as international fare. Street food is also popular, with local
            delicacies like vada pav, misal pav, and bhel puri being favorites among residents and visitors alike.
          </Description>
          <Description>
            With its blend of tradition and modernity, Pune continues to charm visitors and residents with its historical
            landmarks, cultural festivals, and dynamic atmosphere, making it a city that truly has something for everyone.
          </Description>
        </div>
      </Card>

      <ImageContainer>
        <Image src={collegeImage} alt="College Building" />
        <Image src={campusImage} alt="Campus View" />
        <Image src={facultyImage} alt="Faculty Members" />
      </ImageContainer>

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
            <GridItem>
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
            </GridItem>
          </GridContainer>
        </InfoCard>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;

const InfoContainer = styled.div`
  width: 100%;
`;

const InfoCard = styled.div`
  background-color: #343a40;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

const AboutContainer = styled.div`
  padding: 1rem;
  background: #376a9e;
  min-height: 100vh;
`;

const Card = styled.div`
  background-color: #343a40;
  color: #fff;
  border-radius: 10px;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Description = styled.p`
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Image = styled.img`
  width: calc(33.33% - 1rem);
  border-radius: 5px;
  margin-bottom: 1rem;
  height: 300px;
  object-fit: cover;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  background-color: #343a40;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
`;
