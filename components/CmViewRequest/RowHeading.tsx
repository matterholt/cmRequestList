import React, { useState, useReducer } from 'react';
import { SimpleGrid, Box, Button, Heading } from '@chakra-ui/react';

const TextHeading = (props) => {
  const { title, children } = props;
  return (
    <Heading as="h2" size="sm">
      {title}
      {children}
    </Heading>
  );
};

export const RowHeading = (props) => {
  const {} = props;
  return (
    <SimpleGrid bg="blue.100" height="80px" columns={6} spacing={1}>
      <TextHeading title="Model Name" />
      <TextHeading title="Description" />
      <TextHeading title="Base Model" />
      <TextHeading title="Status" />
      <TextHeading title="Details" />
    </SimpleGrid>
  );
};
