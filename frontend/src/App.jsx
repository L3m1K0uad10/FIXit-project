import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landingPage/LandingPage";
import AuthPage from "./pages/authPage/AuthPage.jsx";
import HomePage from "./pages/homePage/HomePage";
import ProfilesPage from "./pages/profilesPage/ProfilesPage";
import BenefitsPage from "./pages/benefitsPage/BenefitsPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/auth" element={<AuthPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/professional-profiles" element={<ProfilesPage />}></Route>
          <Route path="/benefits" element={<BenefitsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
