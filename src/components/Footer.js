import React from 'react'
import { Container, Row, Col, Navbar, Nav, NavLink } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, FaGem, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';
import './footer.css';
export default function Footer() {
  return (
    <div>
        <footer className="bg-light text-center text-lg-start text-muted">
  
  <section className="footerStyle" style={{ backgroundColor: '#adb5bd' }}>
      <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
              <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                      <FaGem className="me-3" />
                       PowerHouseFitness
                  </h6>
                  <p>
                  PowerHouseFitness offers innovative fitness solutions and a supportive community. Our state-of-the-art facility provides a range of equipment, classes, and personalized training to help you reach your health goals.
                  </p>
              </Col>

              <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Membership</h6>
                  <p>
                      <NavLink href="/membership" className="text-reset">
                          Standard Membership
                      </NavLink>
                  </p>
                  <p>
                      <NavLink href="/membership" className="text-reset">
                          Premium Membership
                      </NavLink>
                  </p>
                  <p>
                      <NavLink href="/membership" className="text-reset">
                          Family Membership
                      </NavLink>
                  </p>
              </Col>

              <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                      <NavLink href="/" className="text-reset">
                          Home
                      </NavLink>
                  </p>
                  <p>
                      <NavLink href="/aboutUs" className="text-reset">
                          About Us
                      </NavLink>
                  </p>
                  <p>
                      <NavLink href="/contactUs" className="text-reset">
                          Contact Us
                      </NavLink>
                  </p>
              </Col>

              <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                      <FaEnvelope className="me-3" />
                      info@powerhousefitness.com
                  </p>
                  <p>
                      <FaPhone className="me-3" /> +1 555 123-4567
                  </p>
                  <p>
                      <FaPrint className="me-3" /> +1 555 987-6543
                  </p>
              </Col>
          </Row>
      </Container>
  </section>

  <div className="text-center p-4" style={{ backgroundColor: '#adb5bd' }}>
      © 2024 Copyright:
      <NavLink className="text-reset fw-bold" href="/">
       PowerHouseFitness.com
      </NavLink>
  </div>
</footer>
    </div>
    
  )
}
