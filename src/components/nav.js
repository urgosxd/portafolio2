import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, OverlayTrigger, Button, Popover } from "react-bootstrap"
export const NAV = () => (
  <Navbar bg="dark" variant="dark" className="justify-content-between">
    <Link className="prota" to="/">
      Portafolio
    </Link>
    <OverlayTrigger
      trigger="click"
      placement="left"
      overlay={
        <Popover>
          <Popover.Title as="h3">Integrantes</Popover.Title>
          <Popover.Content>
            <strong>Frabrizio Aguilar Sanchez</strong>
            <br />
            <br />
            <strong>Edwin Mamani Condori</strong>
            <br />
            <br />
            <strong>Josue Cornejo Cuba</strong>
            <br />
            <br />
            <strong>Jhayr Chambilla Robles</strong>
            <br />
            <br />
            <strong>Naike sharon Macha Costillas</strong>
            <br />
            <br />
            <strong>Wilbert Anhelo Huacac Cárdenas</strong>
            <br />
          </Popover.Content>
        </Popover>
      }
    >
      <Button variant="secondary" size="lg" style={{ fontWeight: "700" }}>
        Nombres
      </Button>
    </OverlayTrigger>
  </Navbar>
)
