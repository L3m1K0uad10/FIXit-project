import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import AuthPage from "./pages/authPage/authPage.jsx";
import HomePage from "./pages/homePage/HomePage";

/* import REG_USERPAGE from "./pages/REG-USERPAGE/REG_USERPAGE";
import SERVICE from "./pages/SERVICE_PROSPAGE/SERVICE";
import CREATE from "./pages/CREATEPAGE/CREATE"; */

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/auth" element={<AuthPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>

          {/* <Route path="/USER_PAGE" element={<REG_USERPAGE />}></Route>
          <Route path="/SERVICE" element={<SERVICE />}></Route>
          <Route path="/CREATE" element={<CREATE />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
