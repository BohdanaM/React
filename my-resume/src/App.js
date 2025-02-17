import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material";
import { useDispatch } from "react-redux";

import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import Swapi from "./pages/Swapi";
import Footer from "./components/Footer";

import { loadTodosRequest } from "./redux/todoSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodosRequest());
  }, [dispatch]);

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Resume
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/todo">
            TODO
          </Button>
          <Button color="inherit" component={Link} to="/swapi">
            SWAPI
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/swapi" element={<Swapi />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
};

export default App;
