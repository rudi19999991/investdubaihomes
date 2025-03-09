
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AreaDevelopments from "@/components/uae-know-how/AreaDevelopments";

const AreaDetail = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <AreaDevelopments />
      </main>
      
      <Footer />
    </div>
  );
};

export default AreaDetail;
