import styled from "styled-components"

export const LayoutWrapper = styled.div`
  background: ${props => (props.post ? "white" : "black")};
  min-height: 100vh;
  overflow-x: hidden;

  & .prota {
    text-decoration: none;
    font-size: 32px;
    font-weight: 700;
    color: white;
  }
  & .readingBar {
    position: sticky;
    height: 5px;
    bottom: 0;
    background-color: black;
  }

  & .tenedor {
    margin: 40px auto;
    padding: 0;
  }
  & .tenedor .box a {
    text-decoration: none;
    color: white;
    height: 1000px;
  }

  & .tenedor .box {
    text-align: center;
    height: 275px;
    color: #fff;
    transition: 0.5s;
  }
  & .tenedor .box h2 {
    margin-top: 15px;
    font-size: 0;
    font-weight: 700;
  }

  & .tenedor .box:hover h2 {
    font-size: 25px;
  }
  & .tenedor .box:hover {
    transform: scale(1.1);
  }

  & .tenedor:hover .box {
    opacity: 0.2;
    cursor: pointer;
  }
  & .tenedor:hover .box:hover {
    opacity: 1;
  }

  & .tenedor .box img {
    position: relative;
    height: 250px;
    width: 400px;
  }

  //post

  & .texto {
    margin-top: 50px;
    text-rendering: optimizeLegibility;
  }

  & .texto img {
    position: relative;
    height: 250px;
    width: 400px;
    margin: 20px;
  }
  & .texto h1 {
    font-weight: 700;
    font-size: 72px;
    margin: 0.5em 0 0.4em;
    line-height: 1.25em;
  }

  & .texto h2,
  h3,
  h4 {
    font-size: 32px;
    margin: 0.5em 0 0.4em;
    line-height: 1.25em;
    font-weight: 600;
  }
`
