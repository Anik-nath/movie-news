import Navbar from "@/components/shared/Navbar";
import React from "react";
// import StoreProvider from "../StoreProvider";

const layout = ({ children }) => {
  return (
    <div>
     
        <Navbar />
        <div className="container mx-auto">{children}</div>
    
    </div>
  );
};

export default layout;
