import React from "react"
import { LayoutWrapper } from "../styles/layout"
import { NAV } from "./nav"
export const Layout = ({ children, post }) => (
  <LayoutWrapper post={post}>
    <NAV />
    {children}
  </LayoutWrapper>
)
