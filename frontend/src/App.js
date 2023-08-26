import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import LocationsPage from "./pages/Locations";
import MenuLayout from "./layouts/MenuLayout";
import MenuPage from "./pages/Menu";
import CategoryPage from "./pages/Category";
import ItemPage from "./pages/Item";
import LoginLayout from "./layouts/LoginLayout";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route element={<MenuLayout />}>
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/:type/:category" element={<CategoryPage />} />
            <Route path="/menu/:type/:category/:item" element={<ItemPage />} />
          </Route>
        </Route>

        <Route element={<LoginLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
