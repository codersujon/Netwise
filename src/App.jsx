import HomeOneLayout from "./components/HomeOneLayout";
import HomeTwoLayout from "./components/HomeTwoLayout";

import { BrowserRouter as Router, Routes, Route } from "react-router";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/Home";
import HomeTwo from "./pages/HomeTwo";

function App() {
  return (
    <>
      <Router basename="/Netwise">
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
