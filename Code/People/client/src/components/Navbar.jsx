import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import InstituteLogo from "../assets/images/logo.jpg";

// React Component
function Header({ setTasks, setIsAuthenticated, isAuthenticated }) {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchTasks();
    }
  }, [isAuthenticated]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/task/mytask",
        { withCredentials: true }
      );
      setAllTasks(response.data.tasks);
      setTasks(response.data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        { withCredentials: true }
      );
      toast.success(data.message);
      setIsAuthenticated(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <HeaderContainer>
      <Brand>
      <BrandContainer>
          <StyledLogo src={InstituteLogo} alt="Institute Logo" />
          <BrandText> PUNE DISTRICT</BrandText>
        </BrandContainer></Brand>
      <NavList>
        <NavItem>
          <NavLink to={"/home"}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"/task"}>Raise Issue</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"/services"}>Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"/profile"}>Profile</NavLink>
        </NavItem>
        <NavItem>
          <LogoutButton onClick={handleLogout}>LOGOUT</LogoutButton>
        </NavItem>
      </NavList>
    </HeaderContainer>
  );
}

export default Header;



// Styled Components
const HeaderContainer = styled.nav`
  background-color: #343a40;
  padding: 1rem;
  display: flex;
  justify-content: space-between; /* Space items evenly */
  align-items: center;
  flex-wrap: wrap; /* Wrap items to the next line if needed */
`;

const Brand = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
`;

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem; /* Add margin bottom for spacing */
`;

const StyledLogo = styled.img`
  width: 90px;
  height: auto;
  margin-right: 10px;
  border-radius: 35%;
`;

const BrandText = styled.span`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #495057;
  }
  
  /* Adjust width for mobile */
  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 1rem;
  }
`;

const LogoutButton = styled.button`
  background-color: #dc3545;
  border: none;
  color: #ffffff;
  cursor: pointer;
  padding: 0.4rem 1rem;
  border-radius: 15px;
  font-size: 1.2rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: #c82333;
  }
  
  /* Adjust width for mobile */
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

// Media Query for Mobile
const media = {
  laptop: `@media (min-width: 992px) {
    ${NavList} {
      margin-left: auto; /* Move navigation items to the right */
    }
  }`,
  mobile: `@media (max-width: 768px) {
    ${HeaderContainer} {
      flex-direction: column; /* Display items vertically */
      align-items: center; /* Center items horizontally */
      margin-top: 1rem; /* Corrected margin top */
    }

    ${BrandContainer} {
      margin-bottom: 1rem; /* Increase margin bottom for spacing */
    }

    ${NavList} {
      margin-top: 1rem; /* Add space between brand and navigation items */
    }

    ${NavItem} {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }
    ${NavLink} {
      width: 100%; /* Adjusted width for mobile */
    }
  }`
};

