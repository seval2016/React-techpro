import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainMenu from "../components/00-common/main-menu";
import { Outlet } from "react-router-dom";
import Header from "../components/00-common/header";
import Footer from "../components/00-common/footer";

const UserLayout = () => {
	return (
		<div style={{height: "100vh"}} className="d-flex flex-column">
			<Header />
			<Container className="my-4 flex-grow-1 p-4">
				<Row className="g-5">
					<Col md={4} lg={3}>
						<MainMenu />
					</Col>
					<Col md={8} lg={9}>
						<Outlet />{/* Single Page Application'larda değişecek olan component buraya yerleşir */}
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default UserLayout;