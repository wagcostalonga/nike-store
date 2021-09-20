import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
    color: var(--secondary);
    font-weight: 500;
    text-align: left !important;
  }

  input {
    height: 48px;
    padding: 0 12px;
    border-radius: 4px;
    border: 1px solid var(--stroke);
    background-color: var(--input);

    &::placeholder {
      color: var(--placeholder);
    }
  }

  & + div {
    margin-top: 1rem;
  }
`;
