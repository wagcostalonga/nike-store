import styled from "styled-components";

export const Container = styled.button`
  margin-top: 2rem;
  height: 3rem;
  padding: 0 3rem;
  border-radius: 4px;
  border: 0;
  background-color: var(--primary);
  color: var(--white);
  transition: all 0.2s;

  &:hover {
    background-color: var(--secondary);
    color: var(--white);
  }
`;