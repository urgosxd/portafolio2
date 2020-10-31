import React from "react"
import "./main.css"
import theme from "./src/js/theme"
import { createGlobalStyle, ThemeProvider } from "styled-components"

const Globalstyle = createGlobalStyle`
  *{
    box-sizing: border;
    margin:0;
    padding: 0;
    
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    
  }
 
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Globalstyle />
    {element}
  </ThemeProvider>
)
