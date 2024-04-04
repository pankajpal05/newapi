import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TopStories from "./components/TopStories";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Search from "./components/Search";
import { CATEGORIES } from "./constants/index";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TopStories
                apiKey={process.env.REACT_APP_API_KEY}
                section="home"
              />
            }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="*" element={<NotFound />}></Route>
          <Route
            exact
            path="/search"
            element={<Search apiKey={process.env.REACT_APP_API_KEY} />}
          ></Route>
          {CATEGORIES.map((e) => {
            return (
              <Route
                key={e}
                exact
                path={`/categories/${e.toLowerCase()}`}
                element={
                  <TopStories
                    apiKey={process.env.REACT_APP_API_KEY}
                    section={e.toLowerCase()}
                  />
                }
              ></Route>
            );
          })}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
