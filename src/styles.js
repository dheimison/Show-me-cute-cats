import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Anonymous Pro', monospace;
  }

  html, body {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    background: #1D1D1F;

    @media (max-width: 680px) {
      justify-content: center;
    }
  }
`;

export const GlobalIcons = styled.div`
  svg {
    display: none;
  }

  @media (max-width: 680px) {
    svg {
      position: absolute;
      left: 5%;
      top: 25px;
      cursor: pointer;
      z-index: 1;
    }
    .menu {
      display: ${props => (props.modal ? 'none' : 'block')};
    }

    .closeMenu {
      display: ${props => (props.modal ? 'block' : 'none')};
    }
  }
`;
