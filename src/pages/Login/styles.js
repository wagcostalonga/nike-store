import styled from "styled-components";

import background from "../../assets/background.jpg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  position: relative;

  .content {
    place-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 800px;

    &-group {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      width: 350px;
      margin: 0 auto;

      img {
        margin-bottom: 5rem;
      }

      h1 {
        font-size: 4rem;
        color: var(--secondary);
        margin-bottom: 3rem;
      }
    }
  }

  footer {
    text-align: center;
    position: absolute;
    bottom: 2rem;
    color: var(--placeholder);
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center -13rem;
  background-size: cover;
  filter: saturate(.6) contrast(.9);
`;
