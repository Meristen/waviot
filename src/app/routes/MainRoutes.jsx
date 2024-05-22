import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import TechnologiesPage from "../../pages/technologies/TechnologiesPage";
import CompanyPage from "../../pages/company/CompanyPage";
import SolutionPage from "../../pages/solution/SolutionPage";
import EquipmentPage from "../../pages/equipment/EquipmentPage";
import SupportPage from "../../pages/support/SupportPage";
import ContactPage from "../../pages/contact/ContactPage";
const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/company" element={<CompanyPage />} />
      <Route path="/technology" element={<TechnologiesPage />} />
      <Route path="/solution" element={<SolutionPage />} />
      <Route path="/equipment" element={<EquipmentPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default MainRoutes;
