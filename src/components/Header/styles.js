import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  background-color: var(--primary);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;

  .content {
    max-width: 1110px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1080px) {
      padding: 0 24px;
    }

    .user {
      display: flex;
      align-items: center;
      color: var(--white);

      &-image {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background: url("https://i.ibb.co/dLTc0pY/wagner.png") no-repeat center center;
        background-size: cover;
        border: 2px solid var(--white);
        margin: 0 24px;
      }

      button {
        background-color: transparent;
        border: none;
        transition: all .2s;

        &:hover {
          filter: brightness(.8);
        }

        &:last-child {
          margin-left: 24px;
        }
      }

      .btn-bag {
        position: relative;

        .amount {
          background-color: var(--white);
          font-size: .7rem;
          font-weight: 700;
          color: var(--primary);
          width: 1.1rem;
          height: 1.1rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;

          position: absolute;
          right: -2px;
          top: -4px;
        }
      }
    }
  }
`;
