import HomeOneLayout from "./components/HomeOneLayout";
import HomeTwoLayout from "./components/HomeTwoLayout";

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/Home";
import HomeTwo from "./pages/HomeTwo";
import { useEffect } from "react";

function App() {

  const BodyClassHandler = () => {
    const location = useLocation();

    useEffect(() => {
      const homePages = ["/", "/home-two"];

      if (homePages.includes(location.pathname)) {
        document.body.classList.add("section-bg");
      } else {
        document.body.classList.remove("section-bg");
      }

      return () => {
        document.body.classList.remove("section-bg");
      };
    }, [location]);

    return null;
  };

  return (
    <>
      <Router basename="/Netwise">
        <BodyClassHandler />
          <Routes>
            <Route path="/" element={ <HomeOneLayout /> }>
                <Route index element={ <HomePage /> }/>
                <Route path="about" element={ <AboutPage /> }/>
            </Route>
            <Route path="home-two" element={ <HomeTwoLayout /> }>
                <Route index element={ <HomeTwo /> }/>
                <Route path="about" element={ <AboutPage /> }/>
            </Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
