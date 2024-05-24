import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Mainhome from "./components/MainHome";
import Trail from "./components/Trail";
import Scheme from "./components/scheme/Scheme";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Work from "./components/Work";


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState({});
  const [taskTitle, setTaskTitle] = useState("Tasks");

  useEffect(() => {
    const handleGetUser = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/v1/user/me",
          { withCredentials: true }
        );
        setIsAuthenticated(true);
        setUser(data.user);
      } catch (error) {
        console.log("USER IS NOT AUTHENTICATED!");
        setIsAuthenticated(false);
        setUser({});
      }
    };
    handleGetUser();
  }, [isAuthenticated]);

  return (
    <>
      <Router>
        <Navbar
          setTasks={setTasks}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          setTaskTitle={setTaskTitle}
        />
        <Routes>
          <Route
            path="/trail"
            element={<Trail isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/work"
            element={<Work isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/"
            element={
              <Home
                setTasks={setTasks}
                isAuthenticated={isAuthenticated}
                tasks={tasks}
                taskTitle={taskTitle}
                setTaskTitle={setTaskTitle}
              />
            }
          />
          <Route
            path="/home"
            element={<Mainhome isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/task"
            element={
              <Home
                setTasks={setTasks}
                isAuthenticated={isAuthenticated}
                tasks={tasks}
                taskTitle={taskTitle}
                setTaskTitle={setTaskTitle}
              />
            }
          />
          <Route
            path="/services"
            element={<Scheme isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/register"
            element={
              <Register
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route
            path="/profile"
            element={<Profile user={user} isAuthenticated={isAuthenticated} />}
          />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
