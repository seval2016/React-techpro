import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className={`d-flex flex-column gap-4 vh-100`}>
      <Header />
      <Container className="flex-grow-1">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default RootLayout;
