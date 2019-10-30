import styled, { createGlobalStyle } from "styled-components";
import Head from "next/head";
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-size: 20px;
    color: rgba(14, 30, 37, 0.7);
    line-height: 1.5;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  
  ol, ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

const Outer = styled.div`
  display: flex;
  justify-content: center;
`;
const Inner = styled.div`
  flex: 0 1 700px;
  padding: 200px 20px;
  padding-bottom: 30vh;
`;

export const Title = styled.h1`
  font-size: 16px;
  margin-bottom: 8px;
  line-height: 1.5;
  color: #2211c2;
  display: flex;
  justify-content: space-between;
`;

export const P = styled.p`
  color: #34333e;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 30px;
`;

export default ({ children }) => (
  <Outer>
    <Head>
      <title>Democratic writing</title>
    </Head>
    <Inner>{children}</Inner>
    <GlobalStyle />
  </Outer>
);
