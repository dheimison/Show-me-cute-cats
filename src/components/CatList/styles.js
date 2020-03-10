import styled, { css, keyframes } from 'styled-components';

export const Container = styled.main`
  height: 95%;
  width: 65vw;
  background: #fff;
  border-radius: 10px;
  margin: 20px 20px 0px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 680px) {
    width: 70vw;
    margin: 20px 0 0 0;
    }
  }

  h1 {
    padding: 0 15px 0 15px;
  }

  ul {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 100px;

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
      width: 6px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #000000;
    }

    li {
      max-width: 300px;
      margin: 30px 0px 0px 20px;

      @media (max-width: 680px) {
        margin: 30px 0 0 5px;
      }

      img {
        width: 100%;
        border-radius: 30px;
      }
    }
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity:1;
  }
`;

export const ButtonLoad = styled.button`
  color: #4c25eb;
  font-weight: bold;
  background: none;
  border: 3px solid #4c25eb;
  padding: 10px 5px;
  cursor: pointer;
  font-size: 24px;
  border-radius: 50px;
  margin: 10px 0;
  display: none;
  outline: none;
  animation: 1s ${fadeIn} ease-out;
  position: fixed;
  bottom: 20px;

  &:hover {
    background: #4c25eb;
    color: #fff;
  }

  ${props =>
    props.show &&
    css`
      display: block;
    `}
`;
