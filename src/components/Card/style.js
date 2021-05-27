import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 10px;

  img {
    width: 280px;
    height: 280px;
    object-fit: contain;
    background-color: #fff;
  }

  h3 {
    font-size: 1rem;
  }

  button {
    align-self: center;
    margin-top: 8px;
  }
`;

export const Wrapper = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    span {
      font-size: 1.5rem;
    }
  }

  button {
    width: 30px;
    height: 20px;

    svg {
      font-size: 1rem;
    }
  }
`;
