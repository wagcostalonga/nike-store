import React from 'react';

import { Container } from './styles';

export default function Button({ children, type }) {
  return (
    <Container type={type}>
      {children}
    </Container>
  );
}