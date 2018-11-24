import React from 'react';
import { Container, Header } from 'semantic-ui-react'

const Bio=({text, children})=> (
    <Container text>
    <Header as='h2'>{text}</Header>
    {children}
  </Container>
);





export default Bio;