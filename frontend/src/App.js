import { LoginPage } from "./pages/login/LoginPage";
import { Route, Routes, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import "./App.css";
import { PrivateRoute } from "./common/components/PrivateRoute";

const App = () => {
  const isAuth = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            name="Login"
            exact={true}
            isPublic={true}
            element={
              isAuth() ? <Navigate to={{ pathname: "/home" }} /> : <LoginPage />
            }
          />
          <Route
            path="/home"
            name="Home"
            exact={true}
            isPublic={false}
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          {/* {isAuth() && (
            <Route
              path="/home"
              name="Home"
              exact={true}
              isPublic={false}
              element={
                isAuth() ? <HomePage /> : <Navigate to={{ pathname: "/" }} />
              }
            />
          )} */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
