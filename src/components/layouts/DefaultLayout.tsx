import React from "react";
import Navbar from "@/components/Navbar";

interface PropType {
  children: JSX.Element | JSX.Element[];
}

const DefaultLayout: React.FC<PropType> = ({ children }) => {
  return (
    <div style={{ minWidth: "380px" }}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default DefaultLayout;
