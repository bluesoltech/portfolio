import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Teammember from "../Pages/Teammember";
import Blog from "../Pages/Blog";
import Get from "../Pages/Get";
import CyberSecurity from "../Pages/Services/CyberSecurity";
import WebDevelopment from "../Pages/Services/WebDevelopment";
import AppDevelopment from "../Pages/Services/AppDevelopment";
import DataAnalytics from "../Pages/Services/DataAnalytics";
import SeoOptimization from "../Pages/Services/SeoOptimization";
import SocialMediaManagement from "../Pages/Services/SocialMediaManagement";
import GraphicDesign from "../Pages/Services/GraphicDesign";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Teammember />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/contact" element={<Get />} />

      <Route path="/services/cyber" element={<CyberSecurity />} />
      <Route path="/services/web" element={<WebDevelopment />} />
      <Route path="/services/app" element={<AppDevelopment />} />
      <Route path="/services/data" element={<DataAnalytics />} />
      <Route path="/services/seo" element={<SeoOptimization />} />
      <Route path="/services/smma" element={<SocialMediaManagement />} />
      <Route path="/services/graphic" element={<GraphicDesign />} />
      <Route path="/services/socialmedia" element={<SocialMediaManagement />} />
    </Routes>
  );
};

export default Routers;
