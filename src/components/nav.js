import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
export const NAV = () => (
  <Navbar bg="dark" variant="dark">
    <Link className="prota" to="/">
      Portafolio
    </Link>
    <Nav className="mr-auto"></Nav>
  </Navbar>
)
