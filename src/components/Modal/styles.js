import styled from "styled-components";

export const Container = styled.div`
  .product-img {
    display: flex;
    align-items: center;

    .large-img {
      > img {
        width: 355px;
        height: 255px;
        object-fit: cover;
        border-radius: 4px;
      }
    }

    .preview-img {
      display: flex;
      flex-direction: column;

      > button {
        margin-left: 0.6rem;
        border: none;
        background-color: transparent;

        img {
          width: 79px;
          height: 79px;
          border-radius: 4px;
        }

        & + button {
          margin-top: 5px;
        }
      }
    }
  }

  .product-title {
    margin-top: 1rem;

    > small {
      color: var(--secondary);
    }

    > p {
      margin-top: .25rem;
      font-weight: 500;
    }
  }

  .product-price {
    margin-top: 1.5rem;
    display: flex;
    align-items: baseline;

    > p {
      margin-right: auto;
      color: var(--secondary);
      text-decoration: line-through;
    }

    > span {
      color: var(--red);
      font-weight: 700;
      margin-right: .5rem;
    }

    > h2 {
      font-weight: 700;
    }
  }

  .divider {
    content: "";
    border-bottom: 1px solid var(--stroke);
    width: 100%;
    margin: 1rem 0;
  }

  .product-size {
    display: flex;
    justify-content: space-between;

    > button {
      background-color: transparent;
      font-size: .8rem;
      font-weight: 500;
      padding: .5rem 1rem;
      border-radius: 4px;
      border: 2px solid var(--primary) ;
    }
  }

  .product-button {
    display: flex;
    justify-content: center;
  }
`;
