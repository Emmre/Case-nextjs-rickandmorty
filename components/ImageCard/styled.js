import styled from "styled-components"

export const LinkStyled = styled.a`
  .dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-right: 6px;
  }
  ${(props) =>
    props.status === "Dead" &&
    `
      .dot {
        background-color: #ff0000;
      }
    `}
  ${(props) =>
    props.status === "Alive" &&
    `
      .dot {
        background-color: #98CD4D;
      }
    `}
    ${(props) =>
      props.status === "unknown" &&
      `
      .dot {
        background-color: #B8B8B8;
      }
    `}

    ${(props) =>
      props.isCharacterDetail &&
      `
    .vertical-card {
      max-width: 550px;
      .img-box {
        img {
          width: 100%;
          border-radius: 15px;
          margin-bottom: 23px;
        }
      }
      .info-box {
        .title {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 30px;
          color: #44281d;
          margin-bottom: 6px;
        }
        .status {
          margin-bottom: 9px;
          .species {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
            color: #44281D;
            margin-right: auto;
          }
          .type {
            font-family: 'Poppins';
            font-style: italic;
            font-weight: 300;
            font-size: 16px;
            line-height: 22px;
            text-align: right;
            color: #818181;
          }
        }
        .location {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          color: #000000;
        }
      }
    }
    
    `}	
  .vertical-card {
    .img-box {
      img {
        width: 100%;
        border-radius: 15px;
        margin-bottom: 19px;
      }
    }
    .info-box {
      .title {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
        color: #44281d;
        margin-bottom: 6px;
      }
      .status {
        display: flex;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: #44281d;
      }
      .location {
      }
    }
  }
  .list-card {
    display: flex;
    .img-box {
      width: 100%;
      max-width: 90px;
      max-height: 90px;
      height: 100%;
      margin-right: 14px;
      img {
        max-width: 90px;
        width: 100%;
        height: 90px;
        border-radius: 15px;
      }
    }
    .info-box {
      .title {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 30px;
        color: #000000;
        margin-bottom: 4px;
      }
      .species {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #000000;
      }
      .type { 
        font-family: 'Poppins';
        font-style: italic;
        font-weight: 300;
        font-size: 16px;
        line-height: 22px;
        color: #818181;
      }
  }
`

// export const ImageCardStyled = styled.div`
//   display: flex;
//   &:hover {
//     cursor: pointer;
//   }
// `

// export const InfoBox = styled.div`
//   flex: 1;
//   img {
//     width: 550px;
//     height: 550px;
//     border-radius: 15px;
//     margin-bottom: 23px;
//   }
//   h1 {
//     font-family: "Poppins";
//     font-style: normal;
//     font-weight: 600;
//     font-size: 24px;
//     line-height: 30px;
//     color: #44281d;
//     margin-bottom: 6px;
//   }
// `
// export const StatusBox = styled.div`
//   display: flex;
//   justify-content: space-between;
//   div {
//     display: flex;
//     margin-bottom: 9px;
//   }
//   h2 {
//     font-family: "Poppins";
//     font-style: normal;
//     font-weight: 500;
//     font-size: 16px;
//     line-height: 22px;
//     color: #44281d;
//   }
//   h3 {
//     font-family: "Poppins";
//     font-style: italic;
//     font-weight: 300;
//     font-size: 16px;
//     line-height: 22px;
//     text-align: right;
//     color: #818181;
//   }

// `

// export const CharacterDetailStyled = styled.div`
//   h2 {
//     font-family: "Poppins";
//     font-style: normal;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 22px;
//     color: #000000;
//   }
// `
