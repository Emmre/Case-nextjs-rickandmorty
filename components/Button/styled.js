import styled from "styled-components"

export const ButtonStyled = styled.button`
  display: inline-block;
  width: 120px;
  height: 40px;
  border-radius: 50px;
  position: relative;
  .dot {
    position: absolute;
    width: 12px;
    height: 12px;
    margin-right: 11px;
    border-radius: 50%;
    bottom: 14px;
    left: 11px;
  }
  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 22px;
  }
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.status === "Dead" &&
    `
    background: rgba(185, 0, 0, 0.05);
    border: 1px solid #B90000;
    .dot {
      background: #B90000;
    }
    span {
      color: #44281D;
    }
    &:hover {
      background: rgba(185, 0, 0, 0.2);
    }
    &.active {
      background: rgba(185, 0, 0, 0.5);
    }
    &.passive {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(185, 0, 0, 0.5);
      .dot {
        background: rgba(185, 0, 0, 0.25);
      }
    }
  `}

  ${(props) =>
    props.status === "Alive" &&
    `
    background: rgba(152, 205, 77, 0.05);
    border: 1px solid #98CD4D;
    .dot {
      background: #98CD4D;
    } 
    &:hover {
      background: rgba(152, 205, 77, 0.2);
    }
    &.active {
      background: rgba(152, 205, 77, 0.5);
      opacity: 0.5;
    }
    &.passive {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(152, 205, 77, 0.5);
      .dot {
        background: rgba(152, 205, 77, 0.25);
      }
    }
    `
  }

  ${(props) =>
    props.status === "unknown" &&
    `
    background: rgba(184, 184, 184, 0.05);
    border: 1px solid #B8B8B8;
    .dot {
      background: #B8B8B8;
    } 
    &:hover {
      background: rgba(184, 184, 184, 0.2);
    }
    &.active {
      background: rgba(184, 184, 184, 0.5);
    }
    &.passive {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(184, 184, 184, 0.5);
      .dot {
        background: rgba(184, 184, 184, 0.25);
      }
    }
    `
  }
`
