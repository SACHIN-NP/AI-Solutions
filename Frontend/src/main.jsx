import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AboutUs from "./aboutus/aboutus.jsx";
import BlogPage from "./blog/blog.jsx";
import ContactUs from "./contact/contact.jsx";
import i18n from "./i18n.js";
import Layout from "./layout.jsx";
import Gallery from "./photo/photo.jsx";
import PortfolioPage from "./protfolio/protfolio.jsx";
import Solution from "./solution/solution.jsx";
import TestimonialsPopup from "./testimonal/testimonials.jsx";

import Carousel from "./banner/Carousel.jsx";
import App from "./App.jsx";
import SolutionSociety from "./solution/finance.jsx";
import InsuranceSolutions from "./solution/insurance.jsx";
import AutomationSolutions from "./solution/Automation.jsx";
import BlogDescription from "./component/BlogDescription.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* Redirect from "/" to "/home" */}
      <Route index element={<Navigate to="/home" replace />} />
      <Route path="home" element={<App />} />
      <Route path="PortfolioPage" element={<PortfolioPage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="Gallery" element={<Gallery />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="TestimonialsPopup" element={<TestimonialsPopup />} />
      <Route path="blogs" element={<BlogPage />} />
      <Route path="blogs/:slug" element={<BlogDescription />} />
      <Route path="Solution" element={<Solution />} />
      <Route path="Carousel" element={<Carousel />} />
      <Route path="SolutionSociety" element={<SolutionSociety />} />
      <Route path="InsuranceSolutions" element={<InsuranceSolutions />} />
      <Route path="AutomationSolutions" element={<AutomationSolutions />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18n} defaultNS={"translation"}>
    <RouterProvider router={router} />
  </I18nextProvider>
);
