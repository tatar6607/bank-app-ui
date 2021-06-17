import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import logo from "../images/logo1.png";
import {} from "./TopNavbar2.css";

const TopNavbar2 = () => {
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-md-center text-center text-md-start">
          <Col md={4} className="pt-1">
            <img
              src={logo}
              alt="logo"
              style={{ height: "25px", width: "155px" }}
            />
          </Col>
          <Col xs={12} md={8}>
            <TopMenu />
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={12}>
            <SubMenu />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const TopMenu = () => {
  return (
    <div>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        className="justify-content-center justify-content-md-end"
      >
        <Nav.Item className="nav-links">
          <Nav.Link href="/home">
            <Icon name="conversation"> </Icon>
            About Us
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-links">
          <Nav.Link eventKey="link-1">
            <Icon name="university"> </Icon>
            Product
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-links">
          <Nav.Link eventKey="link-1">
            <Icon name="suitcase"> </Icon>
            Package
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-links">
          <Nav.Link eventKey="link-1">
            <Icon name="map marker alternate"> </Icon>
            Location
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-links">
          <Nav.Link eventKey="link-1">
            <Icon name="envelope"> </Icon>
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

const SubMenu = () => {
  return (
    <div style={{ backgroundColor: "red", paddingLeft: "0px" }}>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="sub-menu"
      >
        <Container className="p-0">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="text-center"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">About Us</Nav.Link>
              <Nav.Link href="/">Product</Nav.Link>
              <Nav.Link href="/">Package</Nav.Link>
              <Nav.Link href="/">Location</Nav.Link>
              <Nav.Link href="/">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNavbar2;
