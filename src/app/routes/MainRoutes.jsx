import React from "react";
import { Route, Routes } from "react-router-dom";
import TechnologiesPage from "../../pages/technologies/TechnologiesPage";
import CompanyPage from "../../pages/company/CompanyPage";
import SolutionPage from "../../pages/solution/SolutionPage";
import EquipmentPage from "../../pages/equipment/EquipmentPage";
import ContactPage from "../../pages/contact/ContactPage";
import CardViewPage from "../../pages/cardView/CardViewPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CompanyPage />} />
      <Route path="/technology" element={<TechnologiesPage />} />
      <Route path="/solution" element={<SolutionPage />} />
      <Route path="/equipment" element={<EquipmentPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/card/:cardId" element={<CardViewPage />} />
    </Routes>
  );
};

export default MainRoutes;
