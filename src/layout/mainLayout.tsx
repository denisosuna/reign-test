import * as React from "react";
import Navbar from "../components/navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
