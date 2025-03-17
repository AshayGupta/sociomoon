import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Dashboard from "../pages/Dashboard";
// import Login from "../pages/Login";
// import MainLayout from "../layouts/MainLayout";
// import ProtectedRoute from "./ProtectedRoute";
import { Suspense } from "react";
import HomeLayout from "../pages/Home/homeLayout";
import PageNotFound from "../common/components/notFound/pageNotFound"
import HomePage from "../pages/Home/homePage";
import LoginPage from "../pages/Auth/loginPage";
import SignupPage from "../pages/Auth/signupPage";

const AppRoutes = () => {
  return (
    <Router>
      {/* // <Navbar /> Persistent navigation bar */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            {/* <Route path="about" element={<About />} /> */}
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Protected Route */}
          {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          /> */}

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
