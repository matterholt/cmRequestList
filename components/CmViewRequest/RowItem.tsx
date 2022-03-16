import React from 'react';
import { Grid, Box, Text, GridItem } from '@chakra-ui/react';

export const RowItem = (props) => {
  const { model } = props;
  const { id, modelName, description, modelBase, status, priority } = model;

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={1}>
      <GridItem>
        <Text bg="blue.200">{modelName}</Text>
      </GridItem>
      <GridItem>
        <Text fontSize="xs" w="150px" bg="red.100">
          {description}
        </Text>
      </GridItem>

      <p>{modelBase}</p>

      <p>{priority}</p>
      <Box w="50px" bg="gray.500">
        :::
      </Box>
    </Grid>
  );
};
