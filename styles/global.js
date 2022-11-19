import styled, { createGlobalStyle } from "styled-components"
import { Container } from "@mui/material"

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: "Poppins";
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
  }
  .disabled {
    pointer-events: none;
    cursor: default;
    text-decoration: none;
  }
`

export const ContainerBox = styled(Container)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .pagination {
    margin-bottom: 75px;
    margin-top: 40px;
    .MuiPagination-text {
      margin: auto;
    }
  }
  .buttons {
    margin-right: 12px;
  }
`

export const CharacterContainer = styled(ContainerBox)`
  .right-card {
    display: grid;
    margin-bottom: auto;
    grid-template-columns: repeat(2, 1fr);
    a {
      margin-bottom: 15px;
    }
    @media screen and (max-width: 1210px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .big-card {
    .vertical-card {
      @media screen and (max-width: 1210px) {
        max-width: 100%;
      }
    }
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px 75px;
  @media screen and (max-width: 1210px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`

export const CardBox = styled.div`
border-radius: 15px;
  background: #efe04b;
  padding-top: 17px;
  padding-left: 25px;
  padding-bottom: 15px;
  padding-right: 25px;
  &:hover {
    cursor: pointer;
  }
  div {
    display: flex;
  }
  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    margin-bottom: 10px;
  }
  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    color: #000000;
  }
  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 22px;
    color: #000000;
  }
`

export const FilterStyled = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #44281d;
  margin-bottom: 10px;
`

export const LocationBox = styled(Grid)`
  margin-top: 40px;
  margin-bottom: 64px;
  gap: 20px 30px;
`

export const FlexBox = styled.div`
  display: flex;
  flex: 1;
`

export const CharacterBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

export default GlobalStyle
