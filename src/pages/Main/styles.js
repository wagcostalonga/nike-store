import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--secondary);
  }

  .divider {
    content: "";
    border-bottom: 1px solid var(--stroke);
    width: 100%;
    margin: 0.5rem 0;
  }
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
  grid-gap: 30px;
  list-style: none;
  margin: 2rem 0;

  button {
    position: relative;
    max-width: 16rem;
    max-height: 16rem;
    border: none;
    transition: transform .2s;

    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }

    span {
      background-color: var(--red);
      padding: .4rem .8rem;
      border-radius: 4px;
      color: var(--white);
      position: absolute;
      right: 1rem;
      top: 1rem;
      font-weight: 500;
      font-size: .8rem;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;
